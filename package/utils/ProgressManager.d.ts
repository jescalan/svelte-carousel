export class ProgressManager {
    constructor({ onProgressValueChange }: {
        onProgressValueChange: any;
    });
    _onProgressValueChange: any;
    _paused: boolean;
    setAutoplayDuration(autoplayDuration: any): void;
    _autoplayDuration: any;
    start(onFinish: any): Promise<any>;
    _interval: NodeJS.Timer;
    pause(): void;
    resume(): void;
    reset(): void;
}
