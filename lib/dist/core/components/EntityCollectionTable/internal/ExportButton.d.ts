import { EntityCollection, ExportConfig, User } from "../../../../types";
interface ExportButtonProps<M extends Record<string, any>, UserType extends User> {
    collection: EntityCollection<M>;
    path: string;
    exportConfig?: ExportConfig<UserType>;
}
export declare function ExportButton<M extends Record<string, any>, UserType extends User>({ collection: inputCollection, path: inputPath, exportConfig }: ExportButtonProps<M, UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
