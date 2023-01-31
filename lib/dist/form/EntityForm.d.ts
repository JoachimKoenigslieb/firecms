import { Entity, EntityCollection, EntityStatus, EntityValues, ResolvedEntityCollection } from "../types";
/**
 * @category Components
 */
export interface EntityFormProps<M extends Record<string, any>> {
    /**
     * New or existing status
     */
    status: EntityStatus;
    /**
     * Path of the collection this entity is located
     */
    path: string;
    /**
     * The collection is used to build the fields of the form
     */
    collection: EntityCollection<M>;
    /**
     * The updated entity is passed from the parent component when the underlying data
     * has changed in the datasource
     */
    entity?: Entity<M>;
    /**
     * The callback function called when Save is clicked and validation is correct
     */
    onEntitySave?: (props: {
        collection: ResolvedEntityCollection<M>;
        path: string;
        entityId: string | undefined;
        values: EntityValues<M>;
        previousValues?: EntityValues<M>;
        closeAfterSave: boolean;
    }) => Promise<void>;
    /**
     * The callback function called when discard is clicked
     */
    onDiscard?: () => void;
    /**
     * The callback function when the form is dirty, so the values are different
     * from the original ones
     */
    onModified?: (dirty: boolean) => void;
    /**
     * The callback function when the form original values have been modified
     */
    onValuesChanged?: (values?: EntityValues<M>) => void;
}
/**
 * This is the form used internally by the CMS
 * @param status
 * @param path
 * @param collection
 * @param entity
 * @param onEntitySave
 * @param onDiscard
 * @param onModified
 * @param onValuesChanged
 * @constructor
 * @category Components
 */
export declare const EntityForm: <M extends Record<string, any>>({ status, path, collection: inputCollection, entity, onEntitySave, onDiscard, onModified, onValuesChanged }: EntityFormProps<M>) => import("@emotion/react/jsx-runtime").JSX.Element;
