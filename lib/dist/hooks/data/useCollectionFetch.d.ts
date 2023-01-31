import { Entity, EntityCollection, FilterValues, User } from "../../types";
/**
 * @category Hooks and utilities
 */
export interface CollectionFetchProps<M extends Record<string, any>> {
    /**
     * Absolute collection path
     */
    path: string;
    /**
     * collection of the entity displayed by this collection
     */
    collection: EntityCollection<M>;
    /**
     * Number of entities to fetch
     */
    itemCount?: number;
    /**
     * Filter the fetched data by the property
     */
    filterValues?: FilterValues<Extract<keyof M, string>>;
    /**
     * Sort the results by
     */
    sortBy?: [Extract<keyof M, string>, "asc" | "desc"];
    /**
     * Search string
     */
    searchString?: string;
}
/**
 * @category Hooks and utilities
 */
export interface CollectionFetchResult<M extends Record<string, any>> {
    data: Entity<M>[];
    dataLoading: boolean;
    noMoreToLoad: boolean;
    dataLoadingError?: Error;
}
/**
 * This hook is used to fetch collections using a given collection
 * @param path
 * @param collection
 * @param filterValues
 * @param sortBy
 * @param itemCount
 * @param searchString
 * @category Hooks and utilities
 */
export declare function useCollectionFetch<M extends Record<string, any>, UserType extends User>({ path: inputPath, collection, filterValues, sortBy, itemCount, searchString }: CollectionFetchProps<M>): CollectionFetchResult<M>;
