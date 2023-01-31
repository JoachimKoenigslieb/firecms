import { CMSType, ResolvedArrayProperty, ResolvedMapProperty, ResolvedProperties, ResolvedProperty } from "../types";
import { AnySchema, ObjectSchema } from "yup";
declare module "yup" {
    interface ArraySchema<T> {
        uniqueInArray(mapper: (a: T) => T, message: string): ArraySchema<T>;
    }
}
export type CustomFieldValidator = (props: {
    name: string;
    value: any;
    property: ResolvedProperty;
    entityId?: string;
    parentProperty?: ResolvedMapProperty | ResolvedArrayProperty;
}) => Promise<boolean>;
interface PropertyContext<T extends CMSType> {
    property: ResolvedProperty<T>;
    parentProperty?: ResolvedMapProperty | ResolvedArrayProperty;
    entityId: string;
    customFieldValidator?: CustomFieldValidator;
    name?: any;
}
export declare function getYupEntitySchema<M extends Record<string, any>>(entityId: string, properties: ResolvedProperties<M>, customFieldValidator?: CustomFieldValidator): ObjectSchema<any>;
export declare function mapPropertyToYup<T extends CMSType>(propertyContext: PropertyContext<T>): AnySchema<unknown>;
export declare function getYupMapObjectSchema<M extends Record<string, any>>({ property, entityId, customFieldValidator, name }: PropertyContext<M>): ObjectSchema<any>;
export {};
