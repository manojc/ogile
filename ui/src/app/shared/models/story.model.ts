import { Priority, StoryStatus } from "./common.model";
import { WorkLog } from "./work-log.model";

export class Story {
    public _id?: string;
    public epicId: string;
    public sprintId: string;
    public name: string;
    public points: number;
    public priority: Priority;
    public status: StoryStatus;
    public estimatedTime: string;
    public remainingTime: string;
    public workLogs: Array<WorkLog>;
    public description: string;
    public comments: Array<string>;
    public additionalInformation: Array<string>;
}