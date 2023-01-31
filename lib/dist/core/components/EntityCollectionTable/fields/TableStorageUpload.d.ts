import * as React from "react";
import { Entity, ResolvedArrayProperty, ResolvedStringProperty } from "../../../../types";
import { PreviewSize } from "../../../../preview";
/**
 * Field that allows to upload files to Google Cloud Storage.
 *
 * This is one of the internal components that get mapped natively inside forms
 * and tables to the specified properties.
 * @category Form fields
 */
export declare function TableStorageUpload(props: {
    propertyKey: string;
    error: Error | undefined;
    disabled: boolean;
    value: string | string[] | null;
    updateValue: (newValue: (string | string[] | null)) => void;
    focused: boolean;
    property: ResolvedStringProperty | ResolvedArrayProperty<string[]>;
    entity: Entity<any>;
    path: string;
    previewSize: PreviewSize;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}): import("@emotion/react/jsx-runtime").JSX.Element;
interface TableStorageItemPreviewProps {
    property: ResolvedStringProperty;
    value: string;
    size: PreviewSize;
    entity: Entity<any>;
}
export declare function TableStorageItemPreview({ property, value, size, entity }: TableStorageItemPreviewProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
