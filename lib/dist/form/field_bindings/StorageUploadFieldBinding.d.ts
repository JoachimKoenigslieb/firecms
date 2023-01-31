import { Entity, FieldProps, ResolvedArrayProperty, ResolvedStringProperty, StorageConfig } from "../../types";
import { StorageFieldItem } from "../../core/util/useStorageUploadController";
type StorageUploadFieldProps = FieldProps<string | string[]>;
/**
 * Field that allows to upload files to Google Cloud Storage.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function StorageUploadFieldBinding({ propertyKey, value, setValue, error, showError, autoFocus, tableMode, property, includeDescription, context, isSubmitting }: StorageUploadFieldProps): import("@emotion/react/jsx-runtime").JSX.Element;
export interface StorageUploadProps {
    value: StorageFieldItem[];
    setInternalValue: (v: StorageFieldItem[]) => void;
    name: string;
    property: ResolvedStringProperty | ResolvedArrayProperty<string[]>;
    onChange: (value: string | string[] | null) => void;
    multipleFilesSupported: boolean;
    autoFocus: boolean;
    disabled: boolean;
    entity: Entity<any>;
    storage: StorageConfig;
    onFilesAdded: (acceptedFiles: File[]) => void;
    storagePathBuilder: (file: File) => string;
    onFileUploadComplete: (uploadedPath: string, entry: StorageFieldItem, fileMetadata?: any) => Promise<void>;
}
export declare function StorageUpload({ property, name, value, setInternalValue, onChange, multipleFilesSupported, onFileUploadComplete, disabled, onFilesAdded, autoFocus, storage, entity, storagePathBuilder }: StorageUploadProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
