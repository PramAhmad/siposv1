/// <reference types="node" />
import { CommandLineInputs, CommandLineOptions, CommandMetadata, VueBuildOptions } from '../../../definitions';
import { BuildCLI, BuildRunner, BuildRunnerDeps } from '../../build';
import { VueViteProject } from './';
export interface VueBuildRunnerDeps extends BuildRunnerDeps {
    readonly project: VueViteProject;
}
export declare class VueViteBuildRunner extends BuildRunner<VueBuildOptions> {
    protected readonly e: VueBuildRunnerDeps;
    constructor(e: VueBuildRunnerDeps);
    getCommandMetadata(): Promise<Partial<CommandMetadata>>;
    createOptionsFromCommandLine(inputs: CommandLineInputs, options: CommandLineOptions): VueBuildOptions;
    buildProject(options: VueBuildOptions): Promise<void>;
}
export declare class VueViteBuildCLI extends BuildCLI<VueBuildOptions> {
    readonly name = "Vite CLI Service";
    readonly pkg = "vite";
    readonly program = "vite";
    readonly prefix = "vite";
    readonly script = "ionic:build";
    protected buildArgs(options: VueBuildOptions): Promise<string[]>;
    protected buildEnvVars(options: VueBuildOptions): Promise<NodeJS.ProcessEnv>;
}
