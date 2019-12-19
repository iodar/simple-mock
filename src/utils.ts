export class Logger {
    constructor(public readonly moduleName: string) {}

    /**
     * Logs info message
     */
    public info(infoMsg: string): void {
        console.log(`[INFO] ${this.moduleName} - ${infoMsg}`)
    }

    /**
     * Logs debug message
     */
    public debug(debugMsg: string): void {
        console.log(`[DEBUG] ${this.moduleName} - ${debugMsg}`)
    }

    /**
     * Logs error message
     */
    public error(errorMsg: string): void {
        console.log(`[ERROR] ${this.moduleName} - ${errorMsg}`)
    }
}
