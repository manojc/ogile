import { Injectable } from "@angular/core";
import { Subject, from } from "rxjs";
import { UUID } from "../../models/uuid.model";

export const GLOBAL_EVENTS = {
    TOGGLE_LOADER: "TOGGLE_LOADER",
    SHOW_SNACKBAR: "SHOW_SNACKBAR",
    SET_USER: "SET_USER",
    SET_ORGANISATION: "SET_ORGANISATION"
};

/**
 * 
 * 
 * @class EventListener
 */
class EventListener {

    constructor(uuid: string, func: Function) {
        if (!uuid || !func) {
            console.error("required arguments not provided!");
            return;
        }
        this._uuid = uuid;
        this.func = func;
    }

    private _uuid: string;
    public get uuid(): string {
        return this._uuid;
    }

    public func: Function;
}

@Injectable()
export class EventsService {

    private eventsSubject: Subject<any>;
    private listeners: Map<string, Array<EventListener>>;

    public constructor() {
        //initialise listeners
        this.listeners = new Map();
        //initialise event subject
        this.eventsSubject = new Subject();
        //listen to the changes in subject
        from(this.eventsSubject)
            .subscribe(({ name, args }) => {
                if (this.listeners[name]) {
                    this.listeners[name].forEach((listener: EventListener) => {
                        listener.func(...args);
                    });
                }
            });
    }

    /**
     * Listens to the event and provides a unique key for the listener
     * @method on
     * @param {string} name name of the event to be listened to.
     * @param {Function} listener listener function with one array argument
     * @return {string} returns the key (UUID) for listener function which can be used to stop listening to the event.
     * @memberof EventsService
    */
    public on(name: string, listener: Function): string {
        this.listeners[name] = this.listeners[name] || [];
        let listenerEvent: EventListener = new EventListener(UUID.generate(), listener);
        this.listeners[name].push(listenerEvent);
        return listenerEvent.uuid;
    }

    /**
     * Stops listening to the event by using the unique key for the listener
     * @method off
     * @param {string} name name of the event to be broadcasted
     * @param {string} uuid name of the event listener specific uuid to be removed
     * @param {boolean} [removeAll=false] removes all event listeners attached to specified event name
     * @returns {void} 
     * @memberof EventsService
    */
    public off(name: string, uuid?: string, removeAll: boolean = false): void {
        if (!this.listeners[name] || !this.listeners[name].length) {
            return;
        }
        if (removeAll) {
            this.listeners[name] = [];
            return;
        }
        this.listeners[name] = this.listeners[name].filter((item: EventListener, index: number) => {
            return item.uuid !== uuid;
        });
    }

    /**
     * Broadcasts the event and passes data provided in args argument as event data
     * @method broadcast
     * @param {string} name name of the event to be broadcasted.
     * @param {any} args arguments to be sent with the event.
     * @return {void} return void
     * @memberof EventsService
    */
    public broadcast(name: string, ...args: Array<any>): void {
        this.eventsSubject.next({ name, args });
    }
}