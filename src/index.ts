import express from "express"
import path from "path"
import { handler } from "./controller";

export const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

// const PORT = config.port;

// app.get("/xyz", (req, res) => {
//     console.log("xyz")
//     res.json({
//         message: "hellllodasj"
//     })
// })
app.get("/home", async (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'index.html'))
})

app.get("/hello", (req, res) => {
    res.json({
        message: "hello"
    })
})
// console.log("Express app is running")
app.get("*", async (req, res) => {
    res.send(await handler(req, "hello"))
})
app.post("*", async (req, res) => {
    res.send(await handler(req, "hello"))
})

app.listen(4040, () => {
    console.log(`Server is running on http://localhost:${4040}`)
})