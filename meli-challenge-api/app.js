import Express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index.js";

const App = Express();

App.use(logger("dev"));
App.use(Express.json());
App.use(Express.urlencoded({ extended: false }));
App.use(cookieParser());
App.use("/", indexRouter);

export default App;
