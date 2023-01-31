/// <reference types="react" />
import { EntityValues, ResolvedArrayProperty, ResolvedStringProperty, StorageConfig, StorageSource } from "../../types";
import { PreviewSize } from "../../preview";
/**
 * Internal representation of an item in the storage
 * It can have two states, having a storagePathOrDownloadUrl set,
 * which means the file has been uploaded, and it is rendered as a preview
 * Or have a pending file being uploaded.
 */
export interface StorageFieldItem {
    id: number;
    storagePathOrDownloadUrl?: string;
    file?: File;
    fileName?: string;
    metadata?: any;
    size: PreviewSize;
}
export declare function useStorageUploadController<M>({ entityId, entityValues, path, value, property, propertyKey, storageSource, disabled, onChange }: {
    entityId: string;
    entityValues: EntityValues<M>;
    value: string | string[] | null;
    path: string;
    propertyKey: string;
    property: ResolvedStringProperty | ResolvedArrayProperty<string[]>;
    storageSource: StorageSource;
    disabled: boolean;
    onChange: (value: string | string[] | null) => void;
}): {
    internalValue: StorageFieldItem[];
    setInternalValue: import("react").Dispatch<import("react").SetStateAction<StorageFieldItem[]>>;
    storage: StorageConfig;
    fileNameBuilder: (file: File) => Promise<string>;
    storagePathBuilder: (file: File) => string;
    onFileUploadComplete: (uploadedPath: string, entry: StorageFieldItem, metadata?: any) => Promise<void>;
    onFilesAdded: (acceptedFiles: File[]) => Promise<void>;
    multipleFilesSupported: boolean;
};
