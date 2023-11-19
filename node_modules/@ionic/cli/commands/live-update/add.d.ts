import { CommandInstanceInfo, CommandLineInputs, CommandLineOptions, CommandMetadata } from '../../definitions';
import { LiveUpdatesConfCommand } from './core';
export declare class AddCommand extends LiveUpdatesConfCommand {
    getMetadata(): Promise<CommandMetadata>;
    protected buildCordovaLiveUpdateOptions(options: CommandLineOptions): string[];
    preRun(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void>;
    addPlugin(options: CommandLineOptions, runinfo: CommandInstanceInfo, integration?: string): Promise<void>;
    run(inputs: CommandLineInputs, options: CommandLineOptions, runinfo: CommandInstanceInfo): Promise<void>;
}
