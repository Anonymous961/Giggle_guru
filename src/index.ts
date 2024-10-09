import express from "express"
import config from "./config";
import { handler } from "./controller";

const app = express();

app.use(express.json());

const PORT = config.port;

app.get("*", async (req, res) => {
    res.send(await handler(req, "hello"))
})
app.post("*", async (req, res) => {
    res.send(await handler(req, "hello"))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})