/** @typedef {typeof __propDef.props}  ProgressViewProps */
/** @typedef {typeof __propDef.events}  ProgressViewEvents */
/** @typedef {typeof __propDef.slots}  ProgressViewSlots */
export default class ProgressView extends SvelteComponentTyped<{
    value?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ProgressViewProps = typeof __propDef.props;
export type ProgressViewEvents = typeof __propDef.events;
export type ProgressViewSlots = typeof __propDef.slots;
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
