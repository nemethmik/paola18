export default BusyIndicator
declare class BusyIndicator extends HTMLElement {
    text: string
    size: "Medium" | "Small" | "Large"
    active: boolean
    delay: number
    _isBusy: boolean
}
