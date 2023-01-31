import { ArrayProperty, CMSType, EntityCollection, EntityValues, EnumValueConfig, EnumValues, FieldConfig, NumberProperty, PropertiesOrBuilders, PropertyOrBuilder, ResolvedArrayProperty, ResolvedEntityCollection, ResolvedNumberProperty, ResolvedProperties, ResolvedProperty, ResolvedStringProperty, StringProperty, UserConfigurationPersistence } from "../../types";
export declare const resolveCollection: <M extends Record<string, any>>({ collection, path, entityId, values, previousValues, userConfigPersistence, fields }: {
    collection: EntityCollection<M, string, import("../../types").User> | ResolvedEntityCollection<M>;
    path: string;
    entityId?: string | undefined;
    values?: Partial<M> | undefined;
    previousValues?: Partial<M> | undefined;
    userConfigPersistence?: UserConfigurationPersistence | undefined;
    fields?: Record<string, FieldConfig<any>> | undefined;
}) => ResolvedEntityCollection<M>;
/**
 * Resolve property builders, enums and arrays.
 * @param propertyOrBuilder
 * @param propertyValue
 * @param values
 */
export declare function resolveProperty<T extends CMSType = CMSType, M extends Record<string, any> = any>({ propertyOrBuilder, propertyValue, fromBuilder, ...props }: {
    propertyOrBuilder: PropertyOrBuilder<T, M> | ResolvedProperty<T>;
    propertyValue?: unknown;
    values?: Partial<M>;
    previousValues?: Partial<M>;
    path?: string;
    entityId?: string;
    index?: number;
    fromBuilder?: boolean;
    fields?: Record<string, FieldConfig<any>>;
}): ResolvedProperty<T> | null;
export declare function resolveArrayProperty<T extends any[], M>({ property, propertyValue, ...props }: {
    property: ArrayProperty<T> | ResolvedArrayProperty<T>;
    propertyValue: any;
    values?: Partial<M>;
    previousValues?: Partial<M>;
    path?: string;
    entityId?: string;
    index?: number;
    fromBuilder?: boolean;
    fields?: Record<string, FieldConfig>;
}): ResolvedArrayProperty;
/**
 * Resolve enums and arrays for properties
 * @param properties
 * @param value
 */
export declare function resolveProperties<M extends Record<string, any>>({ properties, propertyValue, ...props }: {
    properties: PropertiesOrBuilders<M>;
    propertyValue: unknown;
    values?: Partial<M>;
    previousValues?: Partial<M>;
    path?: string;
    entityId?: string;
    index?: number;
    fromBuilder?: boolean;
    fields?: Record<string, FieldConfig>;
}): ResolvedProperties<M>;
/**
 * Resolve enum aliases for a string or number property
 * @param property
 * @param fromBuilder
 */
export declare function resolvePropertyEnum(property: StringProperty | NumberProperty, fromBuilder?: boolean): ResolvedStringProperty | ResolvedNumberProperty;
export declare function resolveEnumValues(input: EnumValues): EnumValueConfig[] | undefined;
