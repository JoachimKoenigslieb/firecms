import { Entity, EntityCollection } from "../../types";
/**
 * @category Components
 */
export interface EntityPreviewProps<M extends Record<string, any>> {
    entity: Entity<M>;
    collection: EntityCollection<M>;
    path: string;
}
/**
 * Use this component to render a preview of a property values
 * @param entity
 * @param collection
 * @param path
 * @constructor
 * @category Components
 */
export declare function EntityPreview<M extends Record<string, any>>({ entity, collection, path }: EntityPreviewProps<M>): import("@emotion/react/jsx-runtime").JSX.Element;
export default EntityPreview;
