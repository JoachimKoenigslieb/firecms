import { CMSType, Entity, EntityReference, EntityStatus, EntityValues, PropertiesOrBuilders, Property, PropertyBuilder, PropertyOrBuilder, ResolvedProperties, ResolvedProperty } from "../../types";
export declare function isReadOnly(property: Property | ResolvedProperty): boolean;
export declare function isHidden(property: Property | ResolvedProperty): boolean;
export declare function isPropertyBuilder<T extends CMSType, M extends Record<string, any>>(propertyOrBuilder?: PropertyOrBuilder<T, M> | Property<T> | ResolvedProperty<T>): propertyOrBuilder is PropertyBuilder<T, M>;
export declare function getDefaultValuesFor<M extends Record<string, any>>(properties: PropertiesOrBuilders<M> | ResolvedProperties<M>): Partial<EntityValues<M>>;
/**
 * Update the automatic values in an entity before save
 * @category Datasource
 */
export declare function updateDateAutoValues<M extends Record<string, any>>({ inputValues, properties, status, timestampNowValue, setDateToMidnight }: {
    inputValues: Partial<EntityValues<M>>;
    properties: ResolvedProperties<M>;
    status: EntityStatus;
    timestampNowValue: any;
    setDateToMidnight: (input?: any) => any | undefined;
}): EntityValues<M>;
/**
 * Add missing required fields, expected in the collection, to the values of an entity
 * @param values
 * @param properties
 * @category Datasource
 */
export declare function sanitizeData<M extends Record<string, any>>(values: EntityValues<M>, properties: ResolvedProperties<M>): any;
export declare function getReferenceFrom(entity: Entity<any>): EntityReference;
export declare function traverseValuesProperties<M extends Record<string, any>>(inputValues: Partial<EntityValues<M>>, properties: ResolvedProperties<M>, operation: (value: any, property: Property) => any): EntityValues<M> | undefined;
export declare function traverseValueProperty(inputValue: any, property: Property, operation: (value: any, property: Property) => any): any;
