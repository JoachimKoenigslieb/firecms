import { CollectionSize, EntityReference, FilterValues } from "../../../../types";
export declare function TableReferenceField(props: {
    name: string;
    disabled: boolean;
    internalValue: EntityReference | EntityReference[] | undefined | null;
    updateValue: (newValue: (EntityReference | EntityReference[] | null)) => void;
    size: CollectionSize;
    multiselect: boolean;
    previewProperties?: string[];
    title?: string;
    path: string;
    forceFilter?: FilterValues<string>;
}): import("@emotion/react/jsx-runtime").JSX.Element;
