/** @typedef {typeof __propDef.props}  CarouselViewCustomArrowsProps */
/** @typedef {typeof __propDef.events}  CarouselViewCustomArrowsEvents */
/** @typedef {typeof __propDef.slots}  CarouselViewCustomArrowsSlots */
export default class CarouselViewCustomArrows extends SvelteComponentTyped<{
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
export type CarouselViewCustomArrowsProps = typeof __propDef.props;
export type CarouselViewCustomArrowsEvents = typeof __propDef.events;
export type CarouselViewCustomArrowsSlots = typeof __propDef.slots;
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
