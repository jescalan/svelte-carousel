/** @typedef {typeof __propDef.props}  CarouselViewCustomDotsProps */
/** @typedef {typeof __propDef.events}  CarouselViewCustomDotsEvents */
/** @typedef {typeof __propDef.slots}  CarouselViewCustomDotsSlots */
export default class CarouselViewCustomDots extends SvelteComponentTyped<{
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
export type CarouselViewCustomDotsProps = typeof __propDef.props;
export type CarouselViewCustomDotsEvents = typeof __propDef.events;
export type CarouselViewCustomDotsSlots = typeof __propDef.slots;
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
