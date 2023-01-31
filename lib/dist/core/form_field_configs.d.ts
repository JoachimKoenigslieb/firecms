import { FieldConfig, FieldConfigId, Property, ResolvedProperty } from "../index";
export declare const DEFAULT_FIELD_CONFIGS: Record<FieldConfigId, FieldConfig<any>>;
export declare function getFieldConfig(property: Property | ResolvedProperty): FieldConfig | undefined;
export declare function getFieldId(property: Property | ResolvedProperty): FieldConfigId | undefined;
