import { RecaptchaVerifier } from "firebase/auth";
declare global {
    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
    }
}
export declare const RECAPTCHA_CONTAINER_ID: "recaptcha-container";
export declare function useRecaptcha(): null;
