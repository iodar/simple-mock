import express from "express"
import { Logger } from "./src/utils"

const serverOptions = {
    host: "0.0.0.0",
    port: 3000,
}

const app = express()
const l = new Logger("index.ts")

app.get("/", (req, res, next) => {
    res.status(200).send({
        greeting: "Hello World",
    })
})

app.listen(serverOptions.port, serverOptions.host, () => {
    l.info("server started")
    l.info(`listening for requests on ${serverOptions.host}:${serverOptions.port}`)
})
