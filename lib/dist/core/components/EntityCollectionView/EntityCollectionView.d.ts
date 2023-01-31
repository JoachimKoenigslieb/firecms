import React from "react";
import { EntityCollection, SelectionController } from "../../../types";
/**
 * @category Components
 */
export type EntityCollectionViewProps<M extends Record<string, any>> = {
    fullPath: string;
    isSubCollection?: boolean;
} & EntityCollection<M>;
/**
 * This component is in charge of binding a datasource path with an {@link EntityCollection}
 * where it's configuration is defined. It includes an infinite scrolling table
 * and a 'Add' new entities button,
 *
 * This component is the default one used for displaying entity collections
 * and is in charge of generating all the specific actions and customization
 * of the lower level {@link EntityCollectionTable}
 *
 * Please **note** that you only need to use this component if you are building
 * a custom view. If you just need to create a default view you can do it
 * exclusively with config options.
 *
 * If you need a lower level implementation with more granular options, you
 * can use {@link EntityCollectionTable}.
 *
 * If you need a generic table that is not bound to the datasource or entities and
 * properties at all, you can check {@link VirtualTable}
 *
 * @param fullPath
 * @param collection
 * @constructor
 * @category Components
 */
export declare const EntityCollectionView: React.FunctionComponent<EntityCollectionViewProps<any>>;
export declare function useSelectionController<M extends Record<string, any>>(): SelectionController<M>;
