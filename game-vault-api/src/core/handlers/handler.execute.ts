import { AppError } from "../errors/appError";

export class ExecuteHandler {
  async repository<T>(
    fn: () => Promise<T>,
    message: string,
    context?: string,
  ): Promise<T> {
    try {
      const result = await fn();

      if (!result || (Array.isArray(result) && result.length === 0)) {
        throw new AppError(message, 500, context);
      }

      return result;
    } catch (err: any) {
      if (err instanceof AppError) throw err;
      console.error(context, err);
      throw err
    }
  }
  async service<T>(
    fn: () => Promise<T>,
    message: string,
    context?: string,
  ): Promise<T> {
    try {
      const result = await fn();
      return result;
    } catch (err: any) {
      if (err instanceof AppError) throw err;
      console.error(message, context, err);
      throw err
    }
  }
}
