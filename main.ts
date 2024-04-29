import "reflect-metadata";
import express from "express";
import { UserHandler } from "./src/handler/UserHandler";

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//一覧取得
const userHandler = new UserHandler();
app.get('/users/:userID', userHandler.getUserByID)

app.listen(3000, () => {
  console.log("Start on port 3000.")
})



