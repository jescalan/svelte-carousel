/** @typedef {typeof __propDef.props}  CarouselViewProps */
/** @typedef {typeof __propDef.events}  CarouselViewEvents */
/** @typedef {typeof __propDef.slots}  CarouselViewSlots */
export default class CarouselView extends SvelteComponentTyped<{
    particlesToScroll?: number;
    infinite?: boolean;
    particlesToShow?: number;
    pauseOnFocus?: boolean;
    timingFunction?: string;
    arrows?: boolean;
    initialPageIndex?: number;
    duration?: number;
    autoplay?: boolean;
    autoplayDuration?: number;
    autoplayDirection?: string;
    autoplayProgressVisible?: boolean;
    dots?: boolean;
    swiping?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CarouselViewProps = typeof __propDef.props;
export type CarouselViewEvents = typeof __propDef.events;
export type CarouselViewSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        particlesToScroll?: number;
        infinite?: boolean;
        particlesToShow?: number;
        pauseOnFocus?: boolean;
        timingFunction?: string;
        arrows?: boolean;
        initialPageIndex?: number;
        duration?: number;
        autoplay?: boolean;
        autoplayDuration?: number;
        autoplayDirection?: string;
        autoplayProgressVisible?: boolean;
        dots?: boolean;
        swiping?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
