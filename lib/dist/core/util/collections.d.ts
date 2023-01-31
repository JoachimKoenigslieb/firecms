import { EntityCollection, PropertiesOrBuilders, ResolvedEntityCollection } from "../../types";
/**
 *
 * @param target
 * @param source
 */
export declare function mergeCollections(target: EntityCollection, source: EntityCollection): EntityCollection;
/**
 *
 * @param fetchedCollections
 * @param baseCollections
 */
export declare function joinCollectionLists(fetchedCollections: EntityCollection[], baseCollections: EntityCollection[] | undefined): EntityCollection[];
export declare function sortProperties<M extends Record<string, any>>(properties: PropertiesOrBuilders<M>, propertiesOrder?: (keyof M)[]): PropertiesOrBuilders<M>;
export declare function getFistAdditionalView<M extends Record<string, any>>(collection: EntityCollection<M> | ResolvedEntityCollection<M>): EntityCollection<any, any, import("../../types").User> | import("../../types").EntityCustomView<M> | undefined;
