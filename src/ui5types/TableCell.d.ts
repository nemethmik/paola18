export default TableCell
/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-table-cell</code> component defines the structure of the data in a single <code>ui5-table</code> cell.
 *
 * <h3>CSS Shadow Parts</h3>
 *
 * <ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.
 * <br>
 * The <code>ui5-table-cell</code> exposes the following CSS Shadow Parts:
 * <ul>
 * <li>cell - Used to style the native <code>td</code> element</li>
 * </ul>
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.TableCell
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-table-cell
 * @implements sap.ui.webcomponents.main.ITableCell
 * @public
 */
declare class TableCell /*implements sap.ui.webcomponents.main.ITableCell*/ extends HTMLElement {
    static get metadata(): {
        tag: string;
        slots: {
            /**
             * Specifies the content of the component.
             *
             * @type {Node[]}
             * @slot
             * @public
             */
            default: Node[];
        };
        properties: {
            /**
             * @private
             */
            lastInRow: {
                type: BooleanConstructor;
            };
            /**
             * @private
             */
            popined: {
                type: BooleanConstructor;
            };
        };
        events: {};
    };
    static get styles(): any;
    static get render(): any;
    static get template(): any;
}
