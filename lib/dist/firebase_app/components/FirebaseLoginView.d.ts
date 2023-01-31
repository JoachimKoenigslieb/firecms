import React, { ReactNode } from "react";
import { FirebaseApp } from "firebase/app";
import { FirebaseAuthController, FirebaseSignInOption, FirebaseSignInProvider } from "../types/auth";
/**
 * @category Firebase
 */
export interface FirebaseLoginViewProps {
    /**
     * Firebase app this login view is accessing
     */
    firebaseApp: FirebaseApp;
    /**
     * Delegate holding the auth state
     */
    authController: FirebaseAuthController;
    /**
     * Path to the logo displayed in the login screen
     */
    logo?: string;
    /**
     * Enable the skip login button
     */
    allowSkipLogin?: boolean;
    /**
     * Each of the sign in options that get a custom button
     */
    signInOptions: Array<FirebaseSignInProvider | FirebaseSignInOption>;
    /**
     * Disable the login buttons
     */
    disabled?: boolean;
    /**
     * Prevent users from creating new users in when the `signInOptions` value
     * is `password`. This does not apply to the rest of login providers.
     */
    disableSignupScreen?: boolean;
    /**
     * Display this component when no user is found a user tries to log in
     * when the `signInOptions` value is `password`.
     */
    noUserComponent?: ReactNode;
    /**
     * Display this component bellow the sign-in buttons.
     * Useful for adding checkboxes for privacy and terms and conditions.
     * You may want to use it in conjunction with the `disabled` prop.
     */
    additionalComponent?: ReactNode;
    notAllowedError?: any;
}
/**
 * Use this component to render a login view, that updates
 * the state of the {@link FirebaseAuthController} based on the result
 * @constructor
 * @category Firebase
 */
export declare function FirebaseLoginView({ allowSkipLogin, logo, signInOptions, firebaseApp, authController, noUserComponent, disableSignupScreen, disabled, additionalComponent, notAllowedError }: FirebaseLoginViewProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function LoginButton({ icon, onClick, text, disabled }: {
    icon: React.ReactNode;
    onClick: () => void;
    text: string;
    disabled?: boolean;
}): import("@emotion/react/jsx-runtime").JSX.Element;
