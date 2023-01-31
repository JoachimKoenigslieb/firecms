/// <reference types="react" />
import { Theme } from "@mui/material";
declare module "@mui/material/styles" {
    interface TypographyVariants {
        label: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        label?: React.CSSProperties;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        label: true;
    }
}
/**
 * Use this function to build the default FireCMS MUI5 theme,
 * with some overrides.
 * @category Hooks and utilities
 */
export declare const createCMSDefaultTheme: ({ mode, primaryColor, secondaryColor, fontFamily, headersFontFamily }: {
    mode: "light" | "dark";
    primaryColor?: string | undefined;
    secondaryColor?: string | undefined;
    fontFamily?: string | undefined;
    headersFontFamily?: string | undefined;
}) => Theme;
