import {Response, Request, NextFunction} from "express";
import {ZodError, ZodIssue} from "zod";
import {ResponseError} from "../error/response-error";

const formatZodIssue = (issue: ZodIssue): object => {
    const { path, message } = issue
    const pathString = path.join('.')

    return {
        path: pathString,
        message
    }
}


// Format the Zod error message with only the current error
const formatZodError = (error: ZodError): object | undefined => {
    const { issues } = error

    if (issues.length) {
        return issues.map(formatZodIssue)
    }

    return undefined;
}



export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
        console.log(error.issues);
        res.status(400).json({
            code: "VALIDATION",
            errors: formatZodError(error)
        });
    } else if (error instanceof ResponseError) {
        res.status(error.status).json({
            code: "ERROR",
            errors: error.message
        });
    } else {
        res.status(500).json({
            code: "SYSTEM_ERROR",
            errors: error.message
        });
    }
}
