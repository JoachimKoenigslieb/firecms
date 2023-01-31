import { Property, ResolvedProperty } from "../../types";
import { SxProps, Theme } from "@mui/material";
interface LabelWithIconProps {
    property: Property | ResolvedProperty;
    small?: boolean;
    sx?: SxProps<Theme>;
}
/**
 * Render the label of a form field for a given property, with the corresponding
 * icon
 * @category Form custom fields
 */
export declare function LabelWithIcon({ property, small, sx }: LabelWithIconProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
