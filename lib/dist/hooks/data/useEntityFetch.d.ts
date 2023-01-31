import { Entity, EntityCollection, User } from "../../types";
/**
 * @category Hooks and utilities
 */
export interface EntityFetchProps<M extends Record<string, any>> {
    path: string;
    entityId?: string;
    collection: EntityCollection<M>;
    useCache?: boolean;
}
/**
 * @category Hooks and utilities
 */
export interface EntityFetchResult<M extends Record<string, any>> {
    entity?: Entity<M>;
    dataLoading: boolean;
    dataLoadingError?: Error;
}
/**
 * This hook is used to fetch an entity.
 * It gives real time updates if the datasource supports it.
 * @param path
 * @param collection
 * @param entityId
 * @param useCache
 * @category Hooks and utilities
 */
export declare function useEntityFetch<M extends Record<string, any>, UserType extends User>({ path: inputPath, entityId, collection, useCache }: EntityFetchProps<M>): EntityFetchResult<M>;
