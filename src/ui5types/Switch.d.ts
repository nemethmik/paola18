export default Switch
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 * The <code>ui5-switch</code> component is used for changing between binary states.
 * <br>
 * The component can display texts, that will be switched, based on the component state, via the <code>textOn</code> and <code>textOff</code> properties,
 * but texts longer than 3 letters will be cutted off.
 * <br>
 * However, users are able to customize the width of <code>ui5-switch</code> with pure CSS (<code>&lt;ui5-switch style="width: 200px"></code>), and set widths, depending on the texts they would use.
 * <br>
 * Note: the component would not automatically stretch to fit the whole text width.
 *
 * <h3>Keyboard Handling</h3>
 * The state can be changed by pressing the Space and Enter keys.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>ui5-switch</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>slider - Used to style the track, where the handle is being slid</li>
 * <li>text-on - Used to style the onText</li>
 * <li>text-off - Used to style the offText</li>
 * <li>handle - Used to style the handle of the switch</li>
 * </ul>
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Switch";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Switch
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-switch
 * @public
 * @since 0.8.0
 */
declare class Switch {
    static get metadata(): {
        tag: string;
        languageAware: boolean;
        properties: {
            /**
             * Defines the component design.
             * <br><br>
             * <b>Note:</b> If <code>Graphical</code> type is set,
             * positive and negative icons will replace the <code>textOn</code> and <code>textOff</code>.
             *
             * @public
             * @type {SwitchDesign}
             * @defaultValue "Textual"
             */
            design: any;
            /**
             * Defines if the component is checked.
             * <br><br>
             * <b>Note:</b> The property can be changed with user interaction,
             * either by cliking the component, or by pressing the <code>Enter</code> or <code>Space</code> key.
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            checked: boolean;
            /**
             * Defines whether the component is disabled.
             * <br><br>
             * <b>Note:</b> A disabled component is noninteractive.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            disabled: boolean;
            /**
             * Defines the text, displayed when the component is checked.
             *
             * <br><br>
             * <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            textOn: string;
            /**
             * Defines the text, displayed when the component is not checked.
             * <br><br>
             * <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            textOff: string;
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
    };
    static get styles(): any;
    static get render(): any;
    static get template(): any;
    static get dependencies(): any[];
    static onDefine(): Promise<void>;
    i18nBundle: any
    _onclick(event: any): void;
    _onkeydown(event: any): void;
    _onkeyup(event: any): void;
    toggle(): void;
    checked: boolean
    get graphical(): boolean;
    get _textOn(): any;
    get _textOff(): any;
    get tabIndex(): string;
    get classes(): {
        main: {
            "ui5-switch-desktop": any;
            "ui5-switch--disabled": any;
            "ui5-switch--checked": any;
            "ui5-switch--semantic": boolean;
            "ui5-switch--no-label": boolean;
        };
    };
    get ariaDisabled(): string;
    get accessibilityOnText(): any;
    get accessibilityOffText(): any;
    get hiddenText(): any;
}
