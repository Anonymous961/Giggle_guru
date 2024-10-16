import express from "express"
import { handler } from "./controller";

export const app = express();

app.use(express.json());


app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

app.get("/", async (req, res) => {
    res.json({
        message: "hello"
    })
})

app.get("/hello", (req, res) => {
    res.json({
        message: "hello"
    })
})

app.post("*", async (req, res) => {
    res.send(await handler(req, "hello"))
})

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${4040}`)
})