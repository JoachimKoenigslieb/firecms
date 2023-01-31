import { FilterCombination, FilterValues } from "../../../types";
export declare function isFilterCombinationValidForFirestore<M>(filterValues: FilterValues<Extract<keyof M, string>>, sortBy?: [string, "asc" | "desc"], indexes?: FilterCombination<string>[]): boolean;
