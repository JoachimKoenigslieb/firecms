import { StorageFieldItem } from "../../core/util/useStorageUploadController";
export interface StorageUploadItemProps {
    storagePath: string;
    metadata?: any;
    entry: StorageFieldItem;
    onFileUploadComplete: (value: string, entry: StorageFieldItem, metadata?: any) => Promise<void>;
    imageSize: number;
    simple: boolean;
}
export declare function StorageUploadProgress({ storagePath, entry, metadata, onFileUploadComplete, imageSize, simple }: StorageUploadItemProps): import("@emotion/react/jsx-runtime").JSX.Element;
