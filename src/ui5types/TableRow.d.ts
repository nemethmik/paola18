export default TableRow
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-table-row</code> component represents a row in the <code>ui5-table</code>.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>ui5-table-row</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>row - Used to style the native <code>tr</code> element</li>
 * <li>popin-row - Used to style the <code>tr</code> element</li> when a row pops in
 * </ul>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.TableRow
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-table-row
 * @implements sap.ui.webcomponents.main.ITableRow
 * @public
 */
declare class TableRow /* implements sap.ui.webcomponents.main.ITableRow */ extends HTMLElement {
    static get metadata(): {
        tag: string;
        managedSlots: boolean;
        slots: {
            /**
             * Defines the cells of the component.
             * <br><br>
             * <b>Note:</b> Use <code>ui5-table-cell</code> for the intended design.
             *
             * @type {sap.ui.webcomponents.main.ITableCell[]}
             * @slot cells
             * @public
             */
            default: any[];
        };
        properties: {
            /**
             * Defines the mode of the row (None, SingleSelect, MultiSelect).
             * @type {TableMode}
             * @defaultvalue "None"
             * @since 1.0.0-rc.15
             * @private
             */
            mode: any;
            /**
             * Defines the visual indication and behavior of the component.
             * <br><br>
             * Available options are:
             * <ul>
             * <li><code>Active</code></li>
             * <li><code>Inactive</code></li>
             * <ul>
             * <br><br>
             * <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press,
             * while with type <code>Inactive</code> - will not.
             *
             * @type {TableRowType}
             * @defaultvalue "Inactive"
             * @since 1.0.0-rc.15
             * @public
            */
            type: any;
            /**
             * Defines the row's selected state.
             *
             * @type {boolean}
             * @defaultvalue false
             * @since 1.0.0-rc.15
             * @public
             */
            selected: boolean;
            /**
             * Indicates if the table row is active.
             *
             * @type {boolean}
             * @defaultvalue false
             * @since 1.0.0-rc.15
             * @private
            */
            active: boolean;
            _columnsInfo: {
                type: ObjectConstructor;
                multiple: boolean;
            };
            _tabIndex: {
                type: StringConstructor;
                defaultValue: string;
            };
            _busy: {
                type: BooleanConstructor;
            };
            _ariaPosition: {
                type: StringConstructor;
                defaultValue: string;
                noAttribute: boolean;
            };
        };
        events: {
            /**
             * Fired when a row in <code>Active</code> mode is clicked or <code>Enter</code> key is pressed.
             *
             * @event sap.ui.webcomponents.main.TableRow#row-click
             * @since 1.0.0-rc.15
             * @private
             */
            "row-click": {};
            _focused: {};
            /**
             * Fired on selection change of an active row.
             *
             * @event sap.ui.webcomponents.main.TableRow#selection-requested
             * @since 1.0.0-rc.15
             * @private
             */
            "selection-requested": {};
        };
    };
    static get styles(): any;
    static get render(): any;
    static get template(): any;
    static onDefine(): Promise<void>;
    i18nBundle: any
    _onmouseup(): void;
    _onkeydown(event: any): void;
    _onkeyup(event: any): void;
    _ontouchstart(event: any): void;
    _ontouchend(): void;
    _onfocusout(): void;
    _onfocusin(event: any, forceSelfFocus?: boolean): void;
    _onrowclick(event: any): void;
    _handleSelection(): void;
    _getActiveElementTagName(): string;
    activate(): void;
    active: boolean
    deactivate(): void;
    get shouldPopin(): any;
    get allColumnsPoppedIn(): any;
    onBeforeRendering(): void;
    visibleCells: any[]
    popinCells: any[]
    get visibleCellsCount(): number;
    get ariaLabelText(): string;
    get ariaLabelRowSelection(): any;
    get isSingleSelect(): boolean;
    get isMultiSelect(): boolean;
    getCellText(cell: any): any;
    getColumnTextByIdx(index: any): any;
    getNormilzedTextContent(textContent: any): any;
}
