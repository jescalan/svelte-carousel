/** @typedef {typeof __propDef.props}  DotViewProps */
/** @typedef {typeof __propDef.events}  DotViewEvents */
/** @typedef {typeof __propDef.slots}  DotViewSlots */
export default class DotView extends SvelteComponentTyped<{
    active?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotViewProps = typeof __propDef.props;
export type DotViewEvents = typeof __propDef.events;
export type DotViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        active?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
