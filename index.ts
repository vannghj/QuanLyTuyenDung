import express, { Express, Request, Response } from "express";
const app: Express = express();
const port: number = 3000;

app.get("/company", (req: Request, res: Response) => {
    res.json({
        message: "Company",
    })
})
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})