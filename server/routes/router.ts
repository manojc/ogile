import { Application } from "express";
import { indexRoute } from "./index.routes";
import { userRoutes } from "./user.routes";

export function initialiseRouter(app: Application): void {
    app.use('/api/user', userRoutes);
    //UI route, always register this route in the end
    app.use('/', indexRoute);
}