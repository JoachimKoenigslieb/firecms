import { CMSType, ResolvedProperty } from "../../types";
interface FieldDescriptionPopoverProps<T extends CMSType> {
    property: ResolvedProperty<T>;
}
/**
 * Render the field description for a property
 * @category Form custom fields
 */
export declare function FieldDescription<T extends CMSType>({ property }: FieldDescriptionPopoverProps<T>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
