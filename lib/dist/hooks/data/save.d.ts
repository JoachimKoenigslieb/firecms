import { DataSource, Entity, EntityCallbacks, FireCMSContext, SaveEntityProps, User } from "../../types";
/**
 * @category Hooks and utilities
 */
export type SaveEntityWithCallbacksProps<M extends Record<string, any>> = SaveEntityProps<M> & {
    callbacks?: EntityCallbacks<M>;
    onSaveSuccess?: (updatedEntity: Entity<M>) => void;
    onSaveFailure?: (e: Error) => void;
    onPreSaveHookError?: (e: Error) => void;
    onSaveSuccessHookError?: (e: Error) => void;
};
/**
 * This function is in charge of saving an entity to the datasource.
 * It will run all the save callbacks specified in the collection.
 * It is also possible to attach callbacks on save success or error, and callback
 * errors.
 *
 * If you just want to save the data without running the `onSaveSuccess`,
 * `onSaveFailure` and `onPreSave` callbacks, you can use the `saveEntity` method
 * in the datasource ({@link useDataSource}).
 *
 * @param collection
 * @param path
 * @param entityId
 * @param callbacks
 * @param values
 * @param previousValues
 * @param status
 * @param dataSource
 * @param context
 * @param onSaveSuccess
 * @param onSaveFailure
 * @param onPreSaveHookError
 * @param onSaveSuccessHookError
 * @see useDataSource
 * @category Hooks and utilities
 */
export declare function saveEntityWithCallbacks<M extends Record<string, any>, UserType extends User>({ collection, path, entityId, values, previousValues, status, dataSource, context, onSaveSuccess, onSaveFailure, onPreSaveHookError, onSaveSuccessHookError }: SaveEntityWithCallbacksProps<M> & {
    dataSource: DataSource;
    context: FireCMSContext<UserType>;
}): Promise<void>;
