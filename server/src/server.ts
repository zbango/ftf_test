import express, { Express } from "express";
import cors from "cors";
import "reflect-metadata";
import { Server } from "http";
import { InversifyExpressServer } from "inversify-express-utils";
import CONTAINER from "./infrastructure/Container";

import "./controllers/GitController";

const app: Express = express();
app.use(cors());
const port: number = Number(process.env.PORT) || 4000;

let server: InversifyExpressServer = new InversifyExpressServer(
	CONTAINER,
	null,
	{ rootPath: "/api/v1" },
	app
);

let appConfigured = server.build();
let serve: Server = appConfigured.listen(port, () => `App running on ${port}`);
