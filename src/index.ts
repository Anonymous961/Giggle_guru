import express from "express"
import config from "./config";
import { handler } from "./controller";

export const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

const PORT = config.port;

// app.get("/xyz", (req, res) => {
//     console.log("xyz")
//     res.json({
//         message: "hellllodasj"
//     })
// })

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})