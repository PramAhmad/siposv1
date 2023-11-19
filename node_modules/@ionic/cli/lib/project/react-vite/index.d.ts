import { Project } from '../';
import { InfoItem } from '../../../definitions';
export declare class ReactViteProject extends Project {
    readonly type: 'react';
    getInfo(): Promise<InfoItem[]>;
    /**
     * We can't detect React project types. We don't know what they look like!
     */
    detected(): Promise<boolean>;
    getDefaultDistDir(): Promise<string>;
    requireBuildRunner(): Promise<import('./build').ReactViteBuildRunner>;
    requireServeRunner(): Promise<import('./serve').ReactViteServeRunner>;
    requireGenerateRunner(): Promise<never>;
    setPrimaryTheme(themeColor: string): Promise<void>;
}
