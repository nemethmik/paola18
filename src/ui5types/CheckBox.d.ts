export default CheckBox
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 * <br><br>
 * The <code>ui5-checkbox</code> component consists of a box and a label that describes its purpose.
 * If it's checked, an indicator is displayed inside the box.
 * To check/uncheck the <code>ui5-checkbox</code>, the user has to click or tap the square
 * box or its label.
 * <br><br>
 * The <code>ui5-checkbox</code> component only has 2 states - checked and unchecked.
 * Clicking or tapping toggles the <code>ui5-checkbox</code> between checked and unchecked state.
 *
 * <h3>Usage</h3>
 *
 * You can define the checkbox text with via the <code>text</code> property. If the text exceeds the available width, it is truncated by default.
 * In case you prefer text to wrap, set the <code>wrappingType</code> property to "Normal".
 * The touchable area for toggling the <code>ui5-checkbox</code> ends where the text ends.
 * <br><br>
 * You can disable the <code>ui5-checkbox</code> by setting the <code>disabled</code> property to
 * <code>true</code>,
 * or use the <code>ui5-checkbox</code> in read-only mode by setting the <code>readonly</code>
 * property to <code>true</code>.
 *
 * <br><br>
 * <h3>Keyboard Handling</h3>
 *
 * The user can use the following keyboard shortcuts to toggle the checked state of the <code>ui5-checkbox</code>.
 * <ul>
 * <li>[SPACE, ENTER] - Toggles between different states: checked, not checked.</li>
 * </ul>
 * <br><br>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/CheckBox";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.CheckBox
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-checkbox
 * @public
 */
declare class CheckBox extends HTMLElement {
    static get metadata(): {
        tag: string;
        languageAware: boolean;
        properties: {
            /**
             * Defines whether the component is disabled.
             * <br><br>
             * <b>Note:</b> A disabled component is completely noninteractive.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            disabled: boolean;
            /**
             * Defines whether the component is read-only.
             * <br><br>
             * <b>Note:</b> A red-only component is not editable,
             * but still provides visual feedback upon user interaction.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            readonly: boolean;
            /**
            * Defines whether the component is displayed as partially checked.
            * <br><br>
            * <b>Note:</b> The indeterminate state can be set only programatically and can’t be achieved by user
            * interaction and the resulting visual state depends on the values of the <code>indeterminate</code>
            * and <code>checked</code> properties:
            * <ul>
            * <li> If the component is checked and indeterminate, it will be displayed as partially checked
            * <li> If the component is checked and it is not indeterminate, it will be displayed as checked
            * <li> If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
            * </ul>
            *
            * @type {boolean}
            * @defaultvalue false
            * @public
            * @since 1.0.0-rc.15
            */
            indeterminate: boolean;
            /**
             * Defines if the component is checked.
             * <br><br>
             * <b>Note:</b> The property can be changed with user interaction,
             * either by cliking/tapping on the component, or by
             * pressing the Enter or Space key.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            checked: boolean;
            /**
             * Defines the text of the component.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            text: string;
            /**
             * Defines the value state of the component.
             *
             * <br><br>
             * <b>Note:</b>
             *
             * <ul>
             * <li><code>Warning</code></li>
             * <li><code>Error</code></li>
             * <li><code>None</code>(default)</li>
             * <li><code>Success</code></li>
             * <li><code>Information</code></li>
             * </ul>
             *
             * @type {ValueState}
             * @defaultvalue "None"
             * @public
             */
            valueState: any;
            /**
             * Defines whether the component text wraps when there is not enough space.
             * <br><br>
             * Available options are:
             * <ul>
             * <li><code>None</code> - The text will be truncated with an ellipsis.</li>
             * <li><code>Normal</code> - The text will wrap. The words will not be broken based on hyphenation.</li>
             * </ul>
             *
             * @type {WrappingType}
             * @defaultvalue "None"
             * @public
             */
            wrappingType: any;
            /**
             * Determines the name with which the component will be submitted in an HTML form.
             *
             * <br><br>
             * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project:
             * <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
             *
             * <br><br>
             * <b>Note:</b> When set, a native <code>input</code> HTML element
             * will be created inside the component so that it can be submitted as
             * part of an HTML form. Do not use this property unless you need to submit a form.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            name: string;
        };
        events: {
            /**
             * Fired when the component checked state changes.
             *
             * @public
             * @event
             */
            change: {};
        };
        slots: {
            /**
             * The slot is used to render native <code>input</code> HTML element within Light DOM to enable form submit,
             * when <code>name</code> property is set.
             * @type {HTMLElement[]}
             * @slot
             * @private
             */
            formSupport: HTMLElement[];
        };
    };
    static get render(): any;
    static get template(): any;
    static get styles(): any;
    static get dependencies(): any[];
    static onDefine(): Promise<void>;
    i18nBundle: any
    onBeforeRendering(): void;
    _enableFormSupport(): void;
    _onclick(): void;
    _onkeydown(event: any): void;
    _onkeyup(event: any): void;
    toggle(): CheckBox;
    indeterminate: boolean
    checked: any
    canToggle(): boolean;
    valueStateTextMappings(): {
        Error: any;
        Warning: any;
        Success: any;
    };
    get classes(): {
        main: {
            "ui5-checkbox--hoverable": any;
        };
    };
    get ariaReadonly(): string;
    get ariaDisabled(): string;
    get ariaChecked(): any;
    get ariaLabelledBy(): string;
    get ariaDescribedBy(): string;
    get hasValueState(): boolean;
    get valueStateText(): any;
    get tabIndex(): any;
    get isCompletelyChecked(): boolean;
}
