export default DatePicker
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-date-picker</code> component provides an input field with assigned calendar which opens on user action.
 * The <code>ui5-date-picker</code> allows users to select a localized date using touch,
 * mouse, or keyboard input. It consists of two parts: the date input field and the
 * date picker.
 *
 * <h3>Usage</h3>
 *
 * The user can enter a date by:
 * <ul>
 * <li>Using the calendar that opens in a popup</li>
 * <li>Typing it in directly in the input field</li>
 * </ul>
 * <br><br>
 * When the user makes an entry and chooses the enter key, the calendar shows the corresponding date.
 * When the user directly triggers the calendar display, the actual date is displayed.
 *
 * <h3>Formatting</h3>
 *
 * If a date is entered by typing it into
 * the input field, it must fit to the used date format.
 * <br><br>
 * Supported format options are pattern-based on Unicode LDML Date Format notation.
 * For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>.
 * <br><br>
 * For example, if the <code>format-pattern</code> is "yyyy-MM-dd",
 * a valid value string is "2015-07-30" and the same is displayed in the input.
 *
 * <h3>Keyboard Handling</h3>
 * The <code>ui5-date-picker</code> provides advanced keyboard handling.
 * If the <code>ui5-date-picker</code> is focused,
 * you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys.
 * Once the drop-down is opened, you can use the <code>UP</code>, <code>DOWN</code>, <code>LEFT</code>, <code>RIGHT</code> arrow keys
 * to navigate through the dates and select one by pressing the <code>Space</code> or <code>Enter</code> keys. Moreover you can
 * use TAB to reach the buttons for changing month and year.
 * <br>
 *
 * If the <code>ui5-date-picker</code> is focused and the picker dialog is not opened the user can
 * increment or decrement the corresponding field of the JS date object referenced by <code>dateValue</code> propery
 * by using the following shortcuts:
 * <br>
 * <ul>
 * <li>[PAGEDOWN] - Decrements the corresponding day of the month by one</li>
 * <li>[SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one</li>
 * <li>[SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one</li>
 * <li>[PAGEUP] - Increments the corresponding day of the month by one</li>
 * <li>[SHIFT] + [PAGEUP] - Increments the corresponding month by one</li>
 * <li>[SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one</li>
 * </ul>
 *
 * <h3>Calendar types</h3>
 * The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
 * By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
 * you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules:
 * <br><br>
 *
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code>
 * <br><br>
 *
 * Or, you can use the global configuration and set the <code>calendarType</code> key:
 * <br>
 * <pre><code>&lt;script data-id="sap-ui-config" type="application/json"&gt;
 * {
 *	"calendarType": "Japanese"
 * }
 * &lt;/script&gt;
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/DatePicker";</code>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.DatePicker
 * @extends DateComponentBase
 * @tagname ui5-date-picker
 * @public
 */
declare class DatePicker {
    static get metadata(): {
        tag: string;
        altTag: string;
        managedSlots: boolean;
        properties: {
            /**
             * Defines a formatted date value.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            value: string;
            /**
             * Defines the value state of the component.
             * <br><br>
             * Available options are:
             * <ul>
             * <li><code>None</code></li>
             * <li><code>Error</code></li>
             * <li><code>Warning</code></li>
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
             * Defines whether the component is required.
             *
             * @since 1.0.0-rc.9
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            required: boolean;
            /**
             * Determines whether the component is displayed as disabled.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            disabled: boolean;
            /**
             * Determines whether the component is displayed as read-only.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            readonly: boolean;
            /**
             * Defines a short hint, intended to aid the user with data entry when the
             * component has no value.
             *
             * <br><br>
             * <b>Note:</b> When no placeholder is set, the format pattern is displayed as a placeholder.
             * Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
             *
             * @type {string}
             * @defaultvalue undefined
             * @public
             */
            placeholder: string;
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
            /**
             * Defines the visibility of the week numbers column.
             * <br><br>
             *
             * <b>Note:<b> For calendars other than Gregorian,
             * the week numbers are not displayed regardless of what is set.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             * @since 1.0.0-rc.8
             */
            hideWeekNumbers: boolean;
            /**
             * Defines the aria-label attribute for the component.
             *
             * @type {String}
             * @public
             * @since 1.0.0-rc.15
             */
            accessibleName: string;
            /**
             * Receives id(or many ids) of the elements that label the component.
             *
             * @type {String}
             * @defaultvalue ""
             * @public
             * @since 1.0.0-rc.15
             */
            accessibleNameRef: string;
            _isPickerOpen: {
                type: BooleanConstructor;
                noAttribute: boolean;
            };
            _respPopoverConfig: {
                type: ObjectConstructor;
            };
            _calendarCurrentPicker: {
                type: StringConstructor;
                defaultValue: string;
            };
        };
        slots: {
            /**
             * Defines the value state message that will be displayed as pop up under the component.
             * <br><br>
             *
             * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed.
             * <br>
             * <b>Note:</b> The <code>valueStateMessage</code> would be displayed,
             * when the component is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
             * @type {HTMLElement}
             * @since 1.0.0-rc.7
             * @slot
             * @public
             */
            valueStateMessage: HTMLElement;
            /**
             * The slot is used to render native <code>input</code> HTML element within Light DOM to enable form submit,
             * when <code>name</code> property is set.
             * @type {HTMLElement[]}
             * @slot
             * @private
             */
            formSupport: HTMLElement[];
        };
        events: {
            /**
             * Fired when the input operation has finished by pressing Enter or on focusout.
             *
             * @event
             * @public
            */
            change: {};
            /**
             * Fired when the value of the component is changed at each key stroke.
             *
             * @event
             * @public
            */
            input: {};
        };
    };
    static get template(): any;
    static get staticAreaTemplate(): any;
    static get styles(): any;
    static get staticAreaStyles(): any[];
    static get dependencies(): any[];
    /**
     * @protected
     */
    protected onResponsivePopoverAfterClose(): void;
    _isPickerOpen: boolean
    _focusInputAfterClose: boolean
    onBeforeRendering(): void;
    /**
     * Override in derivatives to change calendar selection mode
     * @returns {string}
     * @protected
     */
    protected get _calendarSelectionMode(): string;
    /**
     * Used to provide a timestamp to the Calendar (to focus it to a relevant date when open) based on the component's state
     * Override in derivatives to provide the calendar a timestamp based on their properties
     * By default focus the calendar on the selected date if set, or the current day otherwise
     * @protected
     */
    protected get _calendarTimestamp(): any;
    /**
     * Used to provide selectedDates to the calendar based on the component's state
     * Override in derivatives to provide different rules for setting the calendar's selected dates
     * @protected
     */
    protected get _calendarSelectedDates(): any[];
    _onkeydown(event: any): void;
    /**
     *
     * @param amount
     * @param unit
     * @protected
     */
    protected _modifyDateValue(amount: any, unit: any): void;
    _updateValueAndFireEvents(value: any, normalizeValue: any, events: any, updateValue?: boolean): void;
    value: any
    _updateValueState(): void;
    valueState: any
    _toggleAndFocusInput(): void;
    _getInput(): any;
    /**
     * The ui5-input "submit" event handler - fire change event when the user presses enter
     * @protected
     */
    protected _onInputSubmit(event: any): void;
    /**
     * The ui5-input "change" event handler - fire change event when the user focuses out of the input
     * @protected
     */
    protected _onInputChange(event: any): void;
    /**
     * The ui5-input "input" event handler - fire input even when the user types
     * @protected
     */
    protected _onInputInput(event: any): Promise<void>;
    /**
     * @protected
     */
    protected _checkValueValidity(value: any): boolean;
    _click(event: any): void;
    /**
     * Checks if a value is valid against the current date format of the DatePicker.
     * @param {string} value A value to be tested against the current date format
     * @public
     */
    public isValid(value?: string): boolean;
    /**
     * Checks if a date is between the minimum and maximum date.
     * @param {string} value A value to be checked
     * @returns {boolean}
     * @public
     */
    public isInValidRange(value?: string): boolean;
    /**
     * The parser understands many formats, but we need one format
     * @protected
     */
    protected normalizeValue(value: any): any;
    get _displayFormat(): any;
    /**
     * @protected
     */
    protected get _placeholder(): any;
    get _headerTitleText(): any;
    get phone(): any;
    get showHeader(): any;
    get showFooter(): any;
    get _isIE(): any;
    get accInfo(): {
        ariaRoledescription: any;
        ariaHasPopup: string;
        ariaAutoComplete: string;
        role: string;
        ariaControls: string;
        ariaExpanded: boolean;
        ariaRequired: any;
        ariaLabel: any;
    };
    get openIconTitle(): any;
    get openIconName(): string;
    get dateAriaDescription(): any;
    /**
     * Defines whether the dialog on mobile should have header
     * @private
     */
    private get _shouldHideHeader();
    _respPopover(): Promise<any>;
    _canOpenPicker(): boolean;
    /**
     * The user selected a new date in the calendar
     * @param event
     * @protected
     */
    protected onSelectedDatesChange(event: any): void;
    /**
     * Formats a Java Script date object into a string representing a locale date
     * according to the <code>formatPattern</code> property of the DatePicker instance
     * @param {object} date A Java Script date object to be formatted as string
     * @returns {string} The date as string
     * @public
     */
    public formatValue(date: object): string;
    /**
     * Closes the picker.
     * @public
     */
    public closePicker(): void;
    /**
     * Opens the picker.
     * @public
     * @async
     * @returns {Promise} Resolves when the picker is open
     */
    public openPicker(): Promise<any>;
    _calendarCurrentPicker: string
    responsivePopover: any
    togglePicker(): void;
    /**
     * Checks if the picker is open.
     * @returns {boolean} true if the picker is open, false otherwise
     * @public
     */
    public isOpen(): boolean;
    /**
     * Currently selected date represented as a Local JavaScript Date instance.
     *
     * @readonly
     * @type { Date }
     * @public
     */
    public /*readonly*/ get dateValue(): Date;
    get dateValueUTC(): any;
    get styles(): {
        main: {
            width: string;
        };
    };
    get type(): any;
}
