import { Entity, ResolvedStringProperty } from "../../types";
import { PreviewSize } from "../../preview";
interface StorageItemPreviewProps {
    name: string;
    property: ResolvedStringProperty;
    value: string;
    entity: Entity<any>;
    onRemove: (value: string) => void;
    size: PreviewSize;
    disabled: boolean;
}
export declare function StorageItemPreview({ name, property, value, entity, onRemove, disabled, size }: StorageItemPreviewProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
