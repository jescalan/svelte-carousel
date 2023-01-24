/** @typedef {typeof __propDef.props}  DotsProps */
/** @typedef {typeof __propDef.events}  DotsEvents */
/** @typedef {typeof __propDef.slots}  DotsSlots */
export default class Dots extends SvelteComponentTyped<{
    pagesCount?: number;
    currentPageIndex?: number;
}, {
    pageChange: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotsProps = typeof __propDef.props;
export type DotsEvents = typeof __propDef.events;
export type DotsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        pagesCount?: number;
        currentPageIndex?: number;
    };
    events: {
        pageChange: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
