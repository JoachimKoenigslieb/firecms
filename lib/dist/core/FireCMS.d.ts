import { FireCMSProps, User } from "../types";
/**
 * If you are using independent components of the CMS
 * you need to wrap them with this main component, so the internal hooks work.
 *
 * @constructor
 * @category Core
 */
export declare function FireCMS<UserType extends User>(props: FireCMSProps<UserType>): import("@emotion/react/jsx-runtime").JSX.Element;
