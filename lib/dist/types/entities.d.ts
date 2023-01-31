/**
 * New or existing status
 * @category Models
 */
export type EntityStatus = "new" | "existing" | "copy";
/**
 * Representation of an entity fetched from the datasource
 * @category Models
 */
export interface Entity<M> {
    /**
     * ID of the entity
     */
    id: string;
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */
    path: string;
    /**
     * Current values
     */
    values: EntityValues<M>;
}
/**
 * This type represents a record of key value pairs as described in an
 * entity collection.
 * @category Models
 */
export type EntityValues<M> = M;
/**
 * Class used to create a reference to an entity in a different path
 */
export declare class EntityReference {
    /**
     * ID of the entity
     */
    readonly id: string;
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */
    readonly path: string;
    constructor(id: string, path: string);
    get pathWithId(): string;
}
export declare class GeoPoint {
    /**
     * The latitude of this GeoPoint instance.
     */
    readonly latitude: number;
    /**
     * The longitude of this GeoPoint instance.
     */
    readonly longitude: number;
    constructor(latitude: number, longitude: number);
}
