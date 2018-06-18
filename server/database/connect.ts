import { createConnection } from "mongoose";

export function connect(url: string = "mongodb:27017//localhost/reise"): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
        createConnection(url)
            .on("open", () => resolve())
            .on("error", () => reject());
    });
}