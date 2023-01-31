import { Entity, EntityCollection, FilterCombination, FilterValues, User } from "../../../types";
export type TableController<M extends Record<string, any> = any> = {
    data: Entity<M>[];
    dataLoading: boolean;
    noMoreToLoad: boolean;
    dataLoadingError?: Error;
    filterValues?: FilterValues<Extract<keyof M, string>>;
    setFilterValues: (filterValues: FilterValues<Extract<keyof M, string>>) => void;
    sortBy?: [Extract<keyof M, string>, "asc" | "desc"];
    setSortBy: (sortBy: [Extract<keyof M, string>, "asc" | "desc"]) => void;
    searchString?: string;
    setSearchString: (searchString?: string) => void;
    clearFilter: () => void;
    itemCount?: number;
    setItemCount: (itemCount: number) => void;
    pageSize: number;
    paginationEnabled: boolean;
    checkFilterCombination: (filterValues: FilterValues<any>, sortBy?: [string, "asc" | "desc"]) => boolean;
};
export type TableControllerProps<M extends Record<string, any> = any> = {
    fullPath: string;
    collection: EntityCollection<M>;
    /**
     * List of entities that will be displayed on top, no matter the ordering.
     * This is used for reference fields selection
     */
    entitiesDisplayedFirst?: Entity<M>[];
    isFilterCombinationValid: (filter: FilterValues<Extract<keyof M, string>>, sort?: [string, "asc" | "desc"], filterCombinations?: FilterCombination<Extract<keyof M, string>>[]) => boolean;
};
export declare function useTableController<M extends Record<string, any> = any, UserType extends User = User>({ fullPath, collection, entitiesDisplayedFirst, isFilterCombinationValid }: TableControllerProps<M>): TableController<M>;
