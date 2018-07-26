import { createConnection } from "mongoose";

export function connect(url: string = process.env.DATABASE_URL): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
        createConnection(url)
            .on("open", () => resolve())
            .on("error", () => reject());
    });
}