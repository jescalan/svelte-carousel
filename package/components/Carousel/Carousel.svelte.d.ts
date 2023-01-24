/** @typedef {typeof __propDef.props}  CarouselProps */
/** @typedef {typeof __propDef.events}  CarouselEvents */
/** @typedef {typeof __propDef.slots}  CarouselSlots */
export default class Carousel extends SvelteComponentTyped<{
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
    goTo?: (pageIndex: any, options: any) => Promise<void>;
    goToPrev?: (options: any) => Promise<void>;
    goToNext?: (options: any) => Promise<void>;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    prev: {
        showPrevPage: any;
    };
    default: {
        loaded: any[];
        currentPageIndex: any;
    };
    next: {
        showNextPage: any;
    };
    dots: {
        currentPageIndex: any;
        pagesCount: number;
        showPage: (pageIndex: any) => Promise<void>;
    };
}> {
    get goTo(): (pageIndex: any, options: any) => Promise<void>;
    get goToPrev(): (options: any) => Promise<void>;
    get goToNext(): (options: any) => Promise<void>;
}
export type CarouselProps = typeof __propDef.props;
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
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
        goTo?: (pageIndex: any, options: any) => Promise<void>;
        goToPrev?: (options: any) => Promise<void>;
        goToNext?: (options: any) => Promise<void>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        prev: {
            showPrevPage: any;
        };
        default: {
            loaded: any[];
            currentPageIndex: any;
        };
        next: {
            showNextPage: any;
        };
        dots: {
            currentPageIndex: any;
            pagesCount: number;
            showPage: (pageIndex: any) => Promise<void>;
        };
    };
};
export {};
