import { Response } from "express";
import { Ipost } from "../interfaces/post.interface.js";
export const sendResponse = (
    res : Response,
    statusCode : number,
    succes : boolean,
    message : string,
    data ?: Ipost | Ipost[] | null
) => {
    res.status(statusCode).json({succes, message, data})
}