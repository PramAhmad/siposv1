/// <reference types="node" />
import { CommandMetadata, ServeDetails, ReactServeOptions } from '../../../definitions';
import { ServeCLI, ServeRunner, ServeRunnerDeps } from '../../serve';
export declare class ReactViteServeRunner extends ServeRunner<ReactServeOptions> {
    protected readonly e: ServeRunnerDeps;
    constructor(e: ServeRunnerDeps);
    getCommandMetadata(): Promise<Partial<CommandMetadata>>;
    modifyOpenUrl(url: string, _options: ReactServeOptions): string;
    serveProject(options: ReactServeOptions): Promise<ServeDetails>;
}
export declare class ReactViteServeCLI extends ServeCLI<ReactServeOptions> {
    readonly name = "Vite CLI Service";
    readonly pkg = "vite";
    readonly program = "vite";
    readonly prefix = "vite";
    readonly script = "ionic:serve";
    protected chunks: number;
    serve(options: ReactServeOptions): Promise<void>;
    protected stdoutFilter(line: string): boolean;
    protected stderrFilter(line: string): boolean;
    protected buildArgs(options: ReactServeOptions): Promise<string[]>;
    protected buildEnvVars(options: ReactServeOptions): Promise<NodeJS.ProcessEnv>;
}
