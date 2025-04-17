import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import * as database from "./config/database"
import Company from "./models/companyModel"
database.connect();
dotenv.config();
const app: Express = express();
const port: number = 3000;
app.get("/company", async (req: Request, res: Response) => {
    const company = await Company.find({
        deleted: false,
    });
    res.json({
        company: company,
    })
})
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})