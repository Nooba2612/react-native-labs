class Logger {
    private static instance: Logger;
    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG] ${message}`);
    }

    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }

    warn(message: string): void {
        console.warn(`[WARN] ${message}`);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Application started");
logger2.error("Something went wrong");
