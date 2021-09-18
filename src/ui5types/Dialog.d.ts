import Popup from "./Popup"
export default Dialog
/**
 * @class
 * <h3 class="comment-api-title">Overview</h3>
 * The <code>ui5-dialog</code> component is used to temporarily display some information in a
 * size-limited window in front of the regular app screen.
 * It is used to prompt the user for an action or a confirmation.
 * The <code>ui5-dialog</code> interrupts the current app processing as it is the only focused UI element and
 * the main screen is dimmed/blocked.
 * The dialog combines concepts known from other technologies where the windows have
 * names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
 * <br><br>
 * The <code>ui5-dialog</code> is modal, which means that user action is required before returning to the parent window is possible.
 * The content of the <code>ui5-dialog</code> is fully customizable.
 *
 * <h3>Structure</h3>
 * A <code>ui5-dialog</code> consists of a header, content, and a footer for action buttons.
 * The <code>ui5-dialog</code> is usually displayed at the center of the screen.
 * Its position can be changed by the user. To enable this, you need to set the property <code>draggable</code> accordingly.

 *
 * <h3>Responsive Behavior</h3>
 * The <code>stretch</code> property can be used to stretch the
 * <code>ui5-dialog</code> on full screen.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Dialog";</code>
 *
 * <b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside <code>ui5-dialog</code>.
 * Ideally you should create all popups on the same level inside your HTML page and just open them from one another, rather than nesting them.
 *
 * <b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside other components containing z-index.
 * This might break z-index management.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Dialog
 * @extends Popup
 * @tagname ui5-dialog
 * @public
 */
declare class Dialog extends Popup {
    static get metadata(): {
        tag: string;
        slots: {
            /**
             * Defines the header HTML Element.
             * <br><br>
             * <b>Note:</b> If <code>header</code> slot is provided, the labelling of the dialog is a responsibility of the application developer.
             * <code>accessibleName</code> should be used.
             *
             * @type {HTMLElement[]}
             * @slot
             * @public
             */
            header: HTMLElement[];
            /**
             * Defines the footer HTML Element.
             *
             * @type {HTMLElement[]}
             * @slot
             * @public
             */
            footer: HTMLElement[];
        };
        properties: {
            /**
             * Defines the header text.
             * <br><br>
             * <b>Note:</b> If <code>header</code> slot is provided, the <code>headerText</code> is ignored.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            headerText: string;
            /**
             * Sets the accessible aria name of the component.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            accessibleName: string;
            /**
             * Determines whether the component should be stretched to fullscreen.
             * <br><br>
             * <b>Note:</b> The component will be stretched to approximately
             * 90% of the viewport.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            stretch: boolean;
            /**
             * Determines whether the component is draggable.
             * If this property is set to true, the Dialog will be draggable by its header.
             * <br><br>
             * <b>Note:</b> The component can be draggable only in desktop mode.
             * @type {boolean}
             * @defaultvalue false
             * @since 1.0.0-rc.9
             * @public
             */
            draggable: boolean;
            /**
             * Configures the component to be resizable.
             * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
             * In RTL languages, the resize handle will be placed in the bottom left corner.
             * <br><br>
             * <b>Note:</b> The component can be resizable only in desktop mode.
             * <br>
             * <b>Note:</b> Upon resizing, externally defined height and width styling will be ignored.
             * @type {boolean}
             * @defaultvalue false
             * @since 1.0.0-rc.10
             * @public
             */
            resizable: boolean;
            /**
             * @private
             */
            onPhone: {
                type: BooleanConstructor;
            };
            /**
             * @private
             */
            onDesktop: {
                type: BooleanConstructor;
            };
        };
    };
    static get dependencies(): any[];
    static get template(): any;
    static get styles(): any[];
    static _isHeader(element: any): any;
    _screenResizeHandler: any
    _dragMouseMoveHandler: any
    _dragMouseUpHandler: any
    _resizeMouseMoveHandler: any
    _resizeMouseUpHandler: any
    /**
     * Shows the dialog.
     *
     * @param {boolean} preventInitialFocus Prevents applying the focus inside the popup
     * @async
     * @returns {Promise} Resolves when the dialog is open
     * @public
     */
    public show(preventInitialFocus?: boolean): Promise<any>;
    get isModal(): boolean;
    get shouldHideBackdrop(): boolean;
    get _ariaLabelledBy(): string;
    get _ariaLabel(): any;
    get _ariaModal(): boolean;
    get _displayProp(): string;
    /**
     * Determines if the header of the dialog should be shown.
     */
    get _displayHeader(): any;
    get _movable(): any;
    get _headerTabIndex(): string;
    _show(): void;
    onBeforeRendering(): void;
    _isRTL: boolean
    onPhone: any
    onDesktop: any
    onExitDOM(): void;
    _attachResizeHandlers(): void;
    _detachResizeHandlers(): void;
    _center(): void;
    _revertSize(): void;
    /**
     * Event handlers
     */
    _onDragMouseDown(event: any): void;
    _x: any
    _y: any
    _onDragMouseMove(event: any): void;
    _onDragMouseUp(): void;
    _onDragOrResizeKeyDown(event: any): void;
    _dragWithEvent(event: any): void;
    _resizeWithEvent(event: any): void;
    _attachMouseDragHandlers(): void;
    _detachMouseDragHandlers(): void;
    _onResizeMouseDown(event: any): void;
    _initialX: any
    _initialY: any
    _initialWidth: any
    _initialHeight: any
    _initialTop: any
    _initialLeft: any
    _minWidth: any
    _minHeight: any
    _onResizeMouseMove(event: any): void;
    _onResizeMouseUp(): void;
    _attachMouseResizeHandlers(): void;
    _detachMouseResizeHandlers(): void;
}
