export class AppError extends Error {
    statusCode: number
    context?: string
    constructor(message: string, statusCode = 404, context?: string) {
        super(message)
        this.statusCode = statusCode
        this.context = context

        Error.captureStackTrace(this, this.constructor);
    }
}