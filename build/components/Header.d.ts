import { WithStyles } from "@material-ui/core";
import React from "react";
interface HeaderProps extends WithStyles<typeof styles> {
    date: Date;
    setDate: (date: Date) => void;
    nextDisabled: boolean;
    prevDisabled: boolean;
    onClickNext: () => void;
    onClickPrevious: () => void;
}
declare const styles: Record<"iconContainer" | "icon", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
declare const _default;
export default _default;
