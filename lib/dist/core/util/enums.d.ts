import { ChipColorScheme, EnumValueConfig, EnumValues } from "../../types";
export declare function enumToObjectEntries(enumValues: EnumValues): EnumValueConfig[];
export declare function getLabelOrConfigFrom(enumValues: EnumValueConfig[], key?: string | number): EnumValueConfig | undefined;
export declare function getColorScheme(enumValues: EnumValueConfig[], key: string | number): ChipColorScheme | undefined;
export declare function isEnumValueDisabled(labelOrConfig?: string | EnumValueConfig): boolean | undefined;
export declare function buildEnumLabel(labelOrConfig?: string | EnumValueConfig): string | undefined;
