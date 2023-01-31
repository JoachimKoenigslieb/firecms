import { EnumValueConfig } from "../../types";
import { PreviewSize } from "../PropertyPreviewProps";
/**
 * @category Preview components
 */
export declare function ArrayEnumPreview({ name, value, enumValues, size }: {
    value: string[] | number[];
    name: string | undefined;
    enumValues: EnumValueConfig[];
    size: PreviewSize;
}): import("@emotion/react/jsx-runtime").JSX.Element;
