import { Project } from '../';
import { InfoItem } from '../../../definitions';
export declare class AngularProject extends Project {
    readonly type: 'angular';
    getInfo(): Promise<InfoItem[]>;
    detected(): Promise<boolean>;
    requireBuildRunner(): Promise<import('./build').AngularBuildRunner>;
    requireServeRunner(): Promise<import('./serve').AngularServeRunner>;
    requireGenerateRunner(): Promise<import('./generate').AngularGenerateRunner>;
    setPrimaryTheme(themeColor: string): Promise<void>;
}
