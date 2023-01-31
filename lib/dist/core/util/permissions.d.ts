import { AuthController, Entity, EntityCollection, Permissions, User } from "../../types";
export declare function resolvePermissions<M extends Record<string, any>, UserType extends User>(collection: EntityCollection<M>, authController: AuthController<UserType>, pathSegments: string[], entity: Entity<M> | null): Permissions;
export declare function canEditEntity<M extends Record<string, any>, UserType extends User>(collection: EntityCollection<M>, authController: AuthController<UserType>, paths: string[], entity: Entity<M> | null): boolean;
export declare function canCreateEntity<M extends Record<string, any>, UserType extends User>(collection: EntityCollection<M>, authController: AuthController<UserType>, paths: string[], entity: Entity<M> | null): boolean;
export declare function canDeleteEntity<M extends Record<string, any>, UserType extends User>(collection: EntityCollection<M>, authController: AuthController<UserType>, paths: string[], entity: Entity<M> | null): boolean;
