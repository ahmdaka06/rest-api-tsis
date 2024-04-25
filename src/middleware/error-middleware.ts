import {Response, Request, NextFunction} from "express";
import {ZodError, ZodIssue} from "zod";
import {ResponseError} from "../error/response-error";

const formatZodIssue = (issue: ZodIssue): string => {
    const { path, message } = issue
    const pathString = path.join('.')

    return `${pathString}: ${message}`
}

// Format the Zod error message with only the current error
const formatZodError = (error: ZodError): string | undefined => {
    const { issues } = error

    if (issues.length) {
        const currentIssue = issues[0]

        return formatZodIssue(currentIssue)
    }

    return undefined;
}



export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
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
