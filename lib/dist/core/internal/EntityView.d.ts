import React from "react";
import { Entity, EntityCollection } from "../../types";
export interface EntityViewProps<M extends Record<string, any>> {
    path: string;
    collection: EntityCollection<M>;
    entityId?: string;
    copy?: boolean;
    selectedSubPath?: string;
    formWidth?: number | string;
    onValuesAreModified: (modified: boolean) => void;
    onUpdate?: (params: {
        entity: Entity<any>;
    }) => void;
    onClose?: () => void;
}
/**
 * This is the default view that is used as the content of a side panel when
 * an entity is opened.
 * You probably don't want to use this view directly since it is bound to the
 * side panel. Instead, you might want to use {@link EntityForm} or
 * {@link EntityCollectionView}
 */
export declare const EntityView: React.NamedExoticComponent<EntityViewProps<any>>;
