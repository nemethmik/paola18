export default Table
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-table</code> component provides a set of sophisticated and convenient functions for responsive table design.
 * It provides a comprehensive set of features for displaying and dealing with vast amounts of data.
 * <br><br>
 * To render the <code>Table</code> properly, the order of the <code>columns</code> should match with the
 * order of the item <code>cells</code> in the <code>rows</code>.
 * <br><br>
 * Desktop and tablet devices are supported.
 * On tablets, special consideration should be given to the number of visible columns
 * and rows due to the limited performance of some devices.
 *
 * <h3>Selection</h3>
 * To benefit from the selection mechanism of <code>ui5-table</code> component, you can use the available selection modes:
 * <code>SingleSelect</code> and <code>MultiSelect</code>.
 * <br>
 * In additition to the used mode, you can also specify the <code>ui5-table-row</code> type choosing between
 * <code>Active</code> or <code>Inactive</code>.
 * <br><br>
 * In <code>SingleSelect</code> mode, you can select both an <code>Active</code> and <code>Inactive</code> row via mouse or
 * by pressing the <code>Space</code> or <code>Enter</code> keys.
 * <br>
 * In <code>MultiSelect</code> mode, you can select both an <code>Active</code> and <code>Inactive</code> row by pressing the
 * <code>Space</code> key when a row is on focus or via mouse click over the selection checkbox of the row.
 * In order to select all the available rows at once, you can use the selection checkbox presented in the table's header.
 * <br><br>
 * <b>Note:</b> Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.
 *
 * <h3>ES6 Module Import</h3>
 *
 * <code>import "@ui5/webcomponents/dist/Table.js";</code>
 * <br>
 * <code>import "@ui5/webcomponents/dist/TableColumn.js";</code> (for <code>ui5-table-column</code>)
 * <br>
 * <code>import "@ui5/webcomponents/dist/TableRow.js";</code> (for <code>ui5-table-row</code>)
 * <br>
 * <code>import "@ui5/webcomponents/dist/TableCell.js";</code> (for <code>ui5-table-cell</code>)
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Table
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-table
 * @appenddocs TableColumn TableRow TableGroupRow TableCell
 * @public
 */
declare class Table extends HTMLElement {
    static get metadata(): {
        tag: string;
        managedSlots: boolean;
        slots: {
            /**
             * Defines the component rows.
             * <br><br>
             * <b>Note:</b> Use <code>ui5-table-row</code> for the intended design.
             *
             * @type {sap.ui.webcomponents.main.ITableRow[]}
             * @slot rows
             * @public
             */
            default: any[];
            /**
             * Defines the configuration for the columns of the component.
             * <br><br>
             * <b>Note:</b> Use <code>ui5-table-column</code> for the intended design.
             *
             * @type {sap.ui.webcomponents.main.ITableColumn[]}
             * @slot
             * @public
             */
            columns: any[];
        };
        properties: {
            /**
             * Defines the text that will be displayed when there is no data and <code>hideNoData</code> is not present.
             *
             * @type {string}
             * @defaultvalue ""
             * @public
             */
            noDataText: string;
            /**
             * Defines the text that will be displayed inside the growing button at the bottom of the table,
             * meant for loading more rows upon press.
             *
             * <br><br>
             * <b>Note:</b> If not specified a built-in text will be displayed.
             * <br>
             * <b>Note:</b> This property takes effect if <code>growing</code> is set to <code>Button</code>.
             *
             * @type {string}
             * @defaultvalue ""
             * @since 1.0.0-rc.15
             * @public
             */
            growingButtonText: string;
            /**
             * Defines the subtext that will be displayed under the <code>growingButtonText</code>.
             *
             * <br><br>
             * <b>Note:</b> This property takes effect if <code>growing</code> is set to <code>Button</code>.
             *
             * @type {string}
             * @defaultvalue ""
             * @since 1.0.0-rc.15
             * @public
             */
            growingButtonSubtext: string;
            /**
             * Defines if the value of <code>noDataText</code> will be diplayed when there is no rows present in the table.
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             * @since 1.0.0-rc.15
             */
            hideNoData: boolean;
            /**
             * Defines whether the table will have growing capability either by pressing a <code>More</code> button,
             * or via user scroll. In both cases <code>load-more</code> event is fired.
             * <br><br>
             *
             * Available options:
             * <br><br>
             * <code>Button</code> - Shows a <code>More</code> button at the bottom of the table, pressing of which triggers the <code>load-more</code> event.
             * <br>
             * <code>Scroll</code> - The <code>load-more</code> event is triggered when the user scrolls to the bottom of the table;
             * <br>
             * <code>None</code> (default) - The growing is off.
             * <br><br>
             *
             * <b>Limitations:</b> <code>growing="Scroll"</code> is not supported for Internet Explorer,
             * and the component will fallback to <code>growing="Button"</code>.
             * @type {TableGrowingMode}
             * @defaultvalue "None"
             * @since 1.0.0-rc.12
             * @public
             */
            growing: any;
            /**
             * Defines if the table is in busy state.
             * <b>
             *
             * In this state the component's opacity is reduced
             * and busy indicator is displayed at the bottom of the table.
             * @type {boolean}
             * @defaultvalue false
             * @since 1.0.0-rc.12
             * @public
            */
            busy: boolean;
            /**
             * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
             *
             * @type {Integer}
             * @defaultValue 1000
             * @public
             */
            busyDelay: any;
            /**
             * Determines whether the column headers remain fixed at the top of the page during
             * vertical scrolling as long as the Web Component is in the viewport.
             * <br><br>
             * <b>Limitations:</b>
             * <ul>
             * <li>Browsers that do not support this feature:
             * <ul>
             * <li>Internet Explorer</li>
             * <li>Microsoft Edge lower than version 41 (EdgeHTML 16)</li>
             * <li>Mozilla Firefox lower than version 59</li>
             * </ul>
             * </li>
             * <li>Scrolling behavior:
             * <ul>
             * <li>If the Web Component is placed in layout containers that have the <code>overflow: hidden</code>
             * or <code>overflow: auto</code> style definition, this can
             * prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.</li>
             * </ul>
             * </li>
             * </ul>
             *
             * @type {boolean}
             * @defaultvalue false
             * @public
             */
            stickyColumnHeader: boolean;
            /**
             * Defines the mode of the component.
             * <br><br>
             * Available options are:
             * <ul>
             * <li><code>MultiSelect</code></li>
             * <li><code>SingleSelect</code></li>
             * <li><code>None</code></li>
             * <ul>
             * @type {TableMode}
             * @defaultvalue "None"
             * @since 1.0.0-rc.15
             * @public
             */
            mode: any;
            _hiddenColumns: {
                type: ObjectConstructor;
                multiple: boolean;
            };
            _noDataDisplayed: {
                type: BooleanConstructor;
            };
            /**
             * Defines the active state of the <code>More</code> button.
             * @private
             */
            _loadMoreActive: {
                type: BooleanConstructor;
            };
            /**
             * Used to represent the table column header for the purpose of the item navigation as it does not work with DOM objects directly
             * @private
             */
            _columnHeader: {
                type: ObjectConstructor;
            };
            /**
             * Defines if the entire table is in view port.
             * @private
             */
            _inViewport: {
                type: BooleanConstructor;
            };
            /**
             * Defines whether all rows are selected or not when table is in MultiSelect mode.
             * @type {Boolean}
             * @defaultvalue false
             * @since 1.0.0-rc.15
             * @private
             */
            _allRowsSelected: boolean;
        };
        events: {
            /**
             * Fired when a row in <code>Active</code> mode is clicked or <code>Enter</code> key is pressed.
             *
             * @event sap.ui.webcomponents.main.Table#row-click
             * @param {HTMLElement} row the activated row.
             * @public
             */
            "row-click": {
                detail: {
                    row: {
                        type: {
                            new (): HTMLElement;
                            prototype: HTMLElement;
                        };
                    };
                };
            };
            /**
             * Fired when <code>ui5-table-column</code> is shown as a pop-in instead of hiding it.
             *
             * @event sap.ui.webcomponents.main.Table#popin-change
             * @param {Array} poppedColumns popped-in columns.
             * @since 1.0.0-rc.6
             * @public
             */
            "popin-change": {
                detail: {
                    poppedColumns: {};
                };
            };
            /**
             * Fired when the user presses the <code>More</code> button or scrolls to the table's end.
             * <br><br>
             *
             * <b>Note:</b> The event will be fired if <code>growing</code> is set to <code>Button</code> or <code>Scroll</code>.
             * @event sap.ui.webcomponents.main.Table#load-more
             * @public
             * @since 1.0.0-rc.11
             */
            "load-more": {};
            /**
             * Fired when selection is changed by user interaction
             * in <code>SingleSelect</code> and <code>MultiSelect</code> modes.
             *
             * @event sap.ui.webcomponents.main.Table#selection-change
             * @param {Array} selectedRows An array of the selected rows.
             * @param {Array} previouslySelectedRows An array of the previously selected rows.
             * @public
             * @since 1.0.0-rc.15
             */
            "selection-change": {
                detail: {
                    selectedRows: {
                        type: ArrayConstructor;
                    };
                    previouslySelectedRows: {
                        type: ArrayConstructor;
                    };
                };
            };
        };
    };
    static get styles(): any;
    static get render(): any;
    static get template(): any;
    static get dependencies(): any[];
    static onDefine(): Promise<void>;
    _columnHeader: {
        id: string;
        _tabIndex: string;
    }
    _itemNavigation: any
    fnOnRowFocused: any
    _handleResize: any
    i18nBundle: any
    tableEndObserved: boolean
    onBeforeRendering(): void;
    visibleColumns: any
    _noDataDisplayed: boolean
    visibleColumnsCount: any
    onAfterRendering(): void;
    onEnterDOM(): void;
    growingIntersectionObserver: any
    onExitDOM(): void;
    onRowFocused(event: any): void;
    _onColumnHeaderClick(event: any): void;
    _onLoadMoreKeydown(event: any): void;
    _loadMoreActive: boolean
    _onLoadMoreKeyup(event: any): void;
    _onLoadMoreClick(): void;
    observeTableEnd(): void;
    onInteresection(entries: any): void;
    loadMore(): void;
    _handleSingleSelect(event: any): void;
    _handleMultiSelect(event: any): void;
    _allRowsSelected: any
    _handleSelect(event: any): void;
    _selectAll(event: any): void;
    getRowParent(child: any): any;
    getColumnHeader(): any;
    handleResize(event: any): void;
    checkTableInViewport(): void;
    _inViewport: any
    popinContent(_event: any): void;
    _hiddenColumns: any[]
    /**
     * Gets settings to be propagated from columns to rows.
     *
     * @returns {object}
     * @memberof Table
     */
    getColumnPropagationSettings(): object;
    getIntersectionObserver(): any;
    get styles(): {
        busy: {
            position: string;
        };
    };
    get growsWithButton(): boolean;
    get growsOnScroll(): boolean;
    get _growingButtonText(): any;
    get ariaLabelText(): string;
    get ariaLabelSelectAllText(): any;
    get loadMoreAriaLabelledBy(): string;
    get tableEndDOM(): any;
    get busyIndPosition(): "absolute" | "sticky";
    get isMultiSelect(): boolean;
    get selectedRows(): any;
}
