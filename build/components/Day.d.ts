import * as React from "react";
import { Theme, WithStyles } from "@material-ui/core";
interface DayProps extends WithStyles<typeof styles> {
    filled?: boolean;
    outlined?: boolean;
    highlighted?: boolean;
    disabled?: boolean;
    startOfRange?: boolean;
    endOfRange?: boolean;
    onClick?: () => void;
    onHover?: () => void;
    value: number | string;
}
declare const styles: (theme: Theme) => Record<"button" | "filled" | "outlined" | "leftBorderRadius" | "rightBorderRadius" | "buttonContainer" | "buttonText" | "highlighted" | "contrast", import("@material-ui/styles").CSSProperties | (() => import("@material-ui/styles").CSSProperties)>;
declare const _default;
export default _default;
