export default Popup
/**
 * @class
 * <h3 class="comment-api-title">Overview</h3>
 * Base class for all popup Web Components.
 *
 * If you need to create your own popup-like custom UI5 Web Components, it is highly recommended that you extend
 * at least Popup in order to have consistency with other popups in terms of modal behavior and z-index management.
 *
 * 1. The Popup class handles modality:
 *  - The "isModal" getter can be overridden by derivatives to provide their own conditions when they are modal or not
 *  - Derivatives may call the "blockBodyScrolling" and "unblockBodyScrolling" static methods to temporarily remove scrollbars on the body
 *  - Derivatives may call the "open" and "close" methods which handle focus, manage the popup registry and for modal popups, manage the blocking layer
 *
 *  2. Provides blocking layer (relevant for modal popups only):
 *   - It is in the static area
 *   - Controlled by the "open" and "close" methods
 *
 * 3. The Popup class "traps" focus:
 *  - Derivatives may call the "applyInitialFocus" method (usually when opening, to transfer focus inside the popup)
 *
 * 4. The Popup class automatically assigns "z-index"
 *  - Each time a popup is opened, it gets a higher than the previously opened popup z-index
 *
 * 5. The template of this component exposes two inline partials you can override in derivatives:
 *  - beforeContent (upper part of the box, useful for header/title/close button)
 *  - afterContent (lower part, useful for footer/action buttons)
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Popup
 * @extends sap.ui.webcomponents.base.UI5Element
 * @public
 */
declare class Popup {
    static get metadata(): {
        managedSlots: boolean;
        slots: {
            /**
             * Defines the content of the Popup.
             * @type {HTMLElement[]}
             * @slot
             * @public
             */
            default: HTMLElement[];
        };
        properties: {
            /**
             * Defines the ID of the HTML Element, which will get the initial focus.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            initialFocus: string;
            /**
             * Defines if the focus should be returned to the previously focused element,
             * when the popup closes.
             * @type {boolean}
             * @defaultvalue false
             * @public
             * @since 1.0.0-rc.8
            */
            preventFocusRestore: boolean;
            /**
             * Indicates if the element is open
             * @private
             * @type {boolean}
             * @defaultvalue false
             */
            opened: boolean;
            /**
             * Sets the accessible aria name of the component.
             *
             * @type {String}
             * @defaultvalue ""
             * @public
             * @since 1.0.0-rc.15
             */
            accessibleName: string;
            /**
             * @private
             */
            _disableInitialFocus: {
                type: BooleanConstructor;
            };
            _blockLayerHidden: {
                type: BooleanConstructor;
            };
        };
        events: {
            /**
             * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. <b>This event does not bubble.</b>
             *
             * @public
             * @event sap.ui.webcomponents.main.Popup#before-open
             * @allowPreventDefault
             */
            "before-open": {};
            /**
             * Fired after the component is opened. <b>This event does not bubble.</b>
             *
             * @public
             * @event sap.ui.webcomponents.main.Popup#after-open
             */
            "after-open": {};
            /**
             * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. <b>This event does not bubble.</b>
             *
             * @public
             * @event sap.ui.webcomponents.main.Popup#before-close
             * @allowPreventDefault
             * @param {boolean} escPressed Indicates that <code>ESC</code> key has triggered the event.
             */
            "before-close": {
                detail: {
                    escPressed: {
                        type: BooleanConstructor;
                    };
                };
            };
            /**
             * Fired after the component is closed. <b>This event does not bubble.</b>
             *
             * @public
             * @event sap.ui.webcomponents.main.Popup#after-close
             */
            "after-close": {};
            /**
             * Fired whenever the popup content area is scrolled
             *
             * @private
             * @event sap.ui.webcomponents.main.Popup#scroll
             */
            scroll: {};
        };
    };
    static get render(): any;
    static get styles(): any;
    static get template(): any;
    static get staticAreaTemplate(): any;
    static get staticAreaStyles(): any;
    /**
     * Temporarily removes scrollbars from the body
     * @protected
     */
    protected static blockBodyScrolling(): void;
    /**
     * Restores scrollbars on the body, if needed
     * @protected
     */
    protected static unblockBodyScrolling(): void;
    onEnterDOM(): void;
    _blockLayerHidden: boolean
    onExitDOM(): void;
    get _displayProp(): string;
    /**
     * Prevents the user from interacting with the content under the block layer
     */
    _preventBlockLayerFocus(event: any): void;
    _scroll(e: any): void;
    _onkeydown(e: any): void;
    _onfocusout(e: any): void;
    _shouldFocusRoot: boolean
    _onmousedown(e: any): void;
    _onmouseup(): void;
    /**
     * Focus trapping
     * @private
     */
    private forwardToFirst
    /**
     * Focus trapping
     * @private
     */
    private forwardToLast
    /**
     * Use this method to focus the element denoted by "initialFocus", if provided, or the first focusable element otherwise.
     * @protected
     */
    protected applyInitialFocus(): Promise<void>;
    /**
     * Focuses the element denoted by <code>initialFocus</code>, if provided,
     * or the first focusable element otherwise.
     * @public
     * @async
     * @returns {Promise} Promise that resolves when the focus is applied
     */
    public applyFocus(): Promise<any>;
    /**
     * Tells if the component is opened
     * @public
     * @returns {boolean}
     */
    public isOpen(): boolean;
    isFocusWithin(): any;
    /**
     * Shows the block layer (for modal popups only) and sets the correct z-index for the purpose of popup stacking
     * @protected
     */
    protected _open(preventInitialFocus: any): Promise<void>;
    _zIndex: any
    _focusedElementBeforeOpen: any
    opened: boolean
    /**
     * Adds the popup to the "opened popups registry"
     * @protected
     */
    protected _addOpenedPopup(): void;
    /**
     * Hides the block layer (for modal popups only)
     * @public
     */
    public close(escPressed?: boolean, preventRegistryUpdate?: boolean, preventFocusRestore?: boolean): void;
    /**
     * Removes the popup from the "opened popups registry"
     * @protected
     */
    protected _removeOpenedPopup(): void;
    /**
     * Returns the focus to the previously focused element
     * @protected
     */
    protected resetFocus(): void;
    /**
     * Sets "block" display to the popup. The property can be overriden by derivatives of Popup.
     * @protected
     */
    protected _show(): void;
    /**
     * Sets "none" display to the popup
     * @protected
     */
    protected hide(): void;
    /**
     * Implement this getter with relevant logic regarding the modality of the popup (e.g. based on a public property)
     *
     * @protected
     * @abstract
     * @returns {boolean}
     */
    protected get isModal(): boolean;
    /**
     * Implement this getter with relevant logic in order to hide the block layer (f.e. based on a public property)
     *
     * @protected
     * @abstract
     * @returns {boolean}
     */
    protected get shouldHideBackdrop(): boolean;
    /**
     * Return the ID of an element in the shadow DOM that is going to label this popup
     *
     * @protected
     * @abstract
     * @returns {String}
     */
    protected get _ariaLabelledBy(): string;
    /**
     * Return the value for aria-modal for this popup
     *
     * @protected
     * @abstract
     * @returns {String}
     */
    protected get _ariaModal(): string;
    /**
     * Ensures ariaLabel is never null or empty string
     * @returns {String|undefined}
     * @protected
     */
    protected get _ariaLabel(): string;
    get _root(): any;
    get styles(): {
        root: {};
        content: {};
        blockLayer: {
            zIndex: number;
        };
    };
    get classes(): {
        root: {
            "ui5-popup-root": boolean;
        };
        content: {
            "ui5-popup-content": boolean;
        };
    };
}
