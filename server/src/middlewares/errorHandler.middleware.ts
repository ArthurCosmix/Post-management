import { Request, Response, NextFunction } from "express";

 const errorHandler = (
    err : any,
    req : Request,
    res : Response,
    next : NextFunction
) => {
    const statusCode = err.statusCode || 500
    const errorMessage = err.message || 'Internal server error'

    res.status(statusCode).json({
        success : false,
        errorMessage
    })

}

export default errorHandler