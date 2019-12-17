export interface RvLocation{
    id: string;
    location: string;
    instance: string;
    version: string;
    datRootLocation: string;
    datRootLastUpdated: Date;
    cacheFileLocation: string;
    cacheFileLastUpdated: Date;
    scanLevel: string;
    fixLevel: string;
    reportLastUpdated: Date;
}