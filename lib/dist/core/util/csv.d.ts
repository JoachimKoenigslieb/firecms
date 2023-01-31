import { Entity, ExportConfig, ResolvedEntityCollection, ResolvedProperties } from "../../types";
interface Header {
    key: string;
    label: string;
}
export declare function downloadCSV<M extends Record<string, any>>(data: Entity<M>[], additionalData: Record<string, any>[] | undefined, collection: ResolvedEntityCollection<M>, path: string, exportConfig: ExportConfig | undefined): void;
export declare function getExportableData(data: any[], additionalData: Record<string, any>[] | undefined, properties: ResolvedProperties, headers: Header[]): any[][];
export declare function downloadBlob(content: BlobPart[], filename: string, contentType: string): void;
export {};
