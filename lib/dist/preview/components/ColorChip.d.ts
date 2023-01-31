import { ChipColorScheme, EnumValues } from "../../types";
export interface EnumValuesChipProps {
    enumValues?: EnumValues;
    enumKey: any;
    small: boolean;
}
/**
 * @category Preview components
 */
export declare function EnumValuesChip({ enumValues, enumKey, small }: EnumValuesChipProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
export interface ColorChipProps {
    label: string;
    small?: boolean;
    colorScheme?: ChipColorScheme;
    error?: boolean;
    outlined?: boolean;
}
/**
 * @category Preview components
 */
export declare function ColorChip({ label, colorScheme, error, outlined, small }: ColorChipProps): import("@emotion/react/jsx-runtime").JSX.Element;
