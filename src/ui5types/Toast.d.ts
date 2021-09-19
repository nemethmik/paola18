export default Toast
declare class Toast extends HTMLElement {
    tag: string
    duration: number
    /**
     * Defines the placement of the component.
     * <br><br>
     * Available options are:
     * <ul>
     * <li><code>TopStart</code></li>
     * <li><code>TopCenter</code></li>
     * <li><code>TopEnd</code></li>
     * <li><code>MiddleStart</code></li>
     * <li><code>MiddleCenter</code></li>
     * <li><code>MiddleEnd</code></li>
     * <li><code>BottomStart</code></li>
     * <li><code>BottomCenter</code></li>
     * <li><code>BottomEnd</code></li>
     * </ul>
     *
     * @type {ToastPlacement}
     * @defaultvalue "BottomCenter"
     * @public
     */
    placement: "BottomCenter" | "TopStart" | "TopCenter" | "TopEnd" | "MiddleStart" 
    | "MiddleCenter" | "MiddleEnd" | "BottomStart" | "BottomEnd"
    /**
     * Indicates whether the component is open (visible).
     * @type {boolean}
     * @private
     */
    open: boolean
    /**
     * Indicates whether the component is hovered.
     * @type {boolean}
     * @private
     */
    hover: boolean
    /**
     * Shows the component.
     * @public
     */
    public show(): void;
}
