import { FirebaseApp } from "firebase/app";
import { FirebaseAuthController, FirebaseSignInOption, FirebaseSignInProvider } from "../types/auth";
interface FirebaseAuthHandlerProps {
    firebaseApp?: FirebaseApp;
    signInOptions: Array<FirebaseSignInProvider | FirebaseSignInOption>;
}
/**
 * Use this hook to build an {@link AuthController} based on Firebase Auth
 * @category Firebase
 */
export declare const useFirebaseAuthController: ({ firebaseApp, signInOptions }: FirebaseAuthHandlerProps) => FirebaseAuthController;
export {};
