/// <reference types="node" />
import { CommandLineInputs, CommandLineOptions, CommandMetadata, ReactBuildOptions } from '../../../definitions';
import { BuildCLI, BuildRunner, BuildRunnerDeps } from '../../build';
import { ReactViteProject } from './';
export interface ReactViteBuildRunnerDeps extends BuildRunnerDeps {
    readonly project: ReactViteProject;
}
export declare class ReactViteBuildRunner extends BuildRunner<ReactBuildOptions> {
    protected readonly e: ReactViteBuildRunnerDeps;
    constructor(e: ReactViteBuildRunnerDeps);
    getCommandMetadata(): Promise<Partial<CommandMetadata>>;
    createOptionsFromCommandLine(inputs: CommandLineInputs, options: CommandLineOptions): ReactBuildOptions;
    buildProject(options: ReactBuildOptions): Promise<void>;
}
export declare class ReactViteBuildCLI extends BuildCLI<ReactBuildOptions> {
    readonly name = "Vite CLI Service";
    readonly pkg = "vite";
    readonly program = "vite";
    readonly prefix = "vite";
    readonly script = "ionic:build";
    protected buildArgs(options: ReactBuildOptions): Promise<string[]>;
    protected buildEnvVars(options: ReactBuildOptions): Promise<NodeJS.ProcessEnv>;
}
