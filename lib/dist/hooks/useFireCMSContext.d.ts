/// <reference types="react" />
import { AuthController, FireCMSContext, User } from "../types";
export declare const FireCMSContextInstance: import("react").Context<Partial<FireCMSContext<User, AuthController<User>>>>;
/**
 * Hook to retrieve the {@link FireCMSContext}.
 *
 * Consider that in order to use this hook you need to have a parent
 * `FireCMS` component.
 *
 * @see FireCMSContext
 * @category Hooks and utilities
 */
export declare const useFireCMSContext: <UserType extends User = User, AuthControllerType extends AuthController<UserType> = AuthController<UserType>>() => FireCMSContext<UserType, AuthControllerType>;
