/** @typedef {typeof __propDef.props}  ProgressProps */
/** @typedef {typeof __propDef.events}  ProgressEvents */
/** @typedef {typeof __propDef.slots}  ProgressSlots */
export default class Progress extends SvelteComponentTyped<{
    value?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ProgressProps = typeof __propDef.props;
export type ProgressEvents = typeof __propDef.events;
export type ProgressSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
