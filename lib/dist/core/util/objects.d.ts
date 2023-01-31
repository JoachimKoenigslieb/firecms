export declare const pick: <T>(obj: T, ...args: any[]) => T;
export declare function isObject(item: any): any;
export declare function mergeDeep<T extends {}>(target: T, source: any): T;
export declare function getValueInPath(o: object | undefined, path: string): any;
export declare function removeInPath(o: object, path: string): object | undefined;
export declare function removeFunctions(o: object | undefined): any;
export declare function getHashValue<T>(v: T): any;
export declare function removeUndefined(value: any): any;
export declare function isEmptyObject(obj: object): boolean;
