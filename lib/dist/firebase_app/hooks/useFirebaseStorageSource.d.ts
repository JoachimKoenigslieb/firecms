import { FirebaseApp } from "firebase/app";
import { StorageSource } from "../../types";
/**
 * @category Firebase
 */
export interface FirebaseStorageSourceProps {
    firebaseApp?: FirebaseApp;
}
/**
 * Use this hook to build an {@link StorageSource} based on Firebase storage
 * @category Firebase
 */
export declare function useFirebaseStorageSource({ firebaseApp }: FirebaseStorageSourceProps): StorageSource;
