import { EntitySidePanelProps, NavigationContext, SideDialogsController, SideEntityController } from "../../types";
export declare function getEntityViewWidth(props: EntitySidePanelProps<any, any>, small: boolean): string;
export declare const useBuildSideEntityController: (navigation: NavigationContext, sideDialogsController: SideDialogsController) => SideEntityController;
