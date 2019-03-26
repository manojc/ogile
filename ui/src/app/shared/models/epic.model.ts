export class Epic {
    public _id?: string;
    public objectiveId: string;
    public sprintId: string;
    public name: string;
    public description: string;
    public additionalInformation: Array<string>;
    public comments: Array<string>;
}