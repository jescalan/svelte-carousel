/** @typedef {typeof __propDef.props}  DotsViewProps */
/** @typedef {typeof __propDef.events}  DotsViewEvents */
/** @typedef {typeof __propDef.slots}  DotsViewSlots */
export default class DotsView extends SvelteComponentTyped<{
    pagesCount?: number;
    currentPageIndex?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotsViewProps = typeof __propDef.props;
export type DotsViewEvents = typeof __propDef.events;
export type DotsViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        pagesCount?: number;
        currentPageIndex?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
