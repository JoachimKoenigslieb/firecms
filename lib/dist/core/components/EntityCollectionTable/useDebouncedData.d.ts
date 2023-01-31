/**
 * Hack to prevent data updates for incomplete callbacks from Firestore
 * triggers.
 * If any deps change, the update is immediate
 * @param data
 * @param deps
 * @param timeoutMs
 */
export declare function useDebouncedData<T>(data: T[], deps: any, timeoutMs?: number): T[];
