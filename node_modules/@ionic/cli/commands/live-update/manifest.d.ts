import { CommandMetadata } from '../../definitions';
import { LiveUpdatesCoreCommand } from './core';
export declare class LiveUpdatesManifestCommand extends LiveUpdatesCoreCommand {
    getMetadata(): Promise<CommandMetadata>;
    run(): Promise<void>;
    private getFilesAndSizesAndHashesForGlobPattern;
    private getFileAndSizeAndHashForFile;
    private readFile;
    private getIntegrity;
    private getCapacitorConfigJsonPath;
    private getCapacitorCLIConfig;
    private getCapacitorConfig;
}
