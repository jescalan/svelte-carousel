export function getClones({ clonesCountHead, clonesCountTail, particlesContainerChildren, }: {
    clonesCountHead: any;
    clonesCountTail: any;
    particlesContainerChildren: any;
}): {
    clonesToAppend: any[];
    clonesToPrepend: any[];
};
export function applyClones({ particlesContainer, clonesToAppend, clonesToPrepend, }: {
    particlesContainer: any;
    clonesToAppend: any;
    clonesToPrepend: any;
}): void;
export function getClonesCount({ infinite, particlesToShow, partialPageSize, }: {
    infinite: any;
    particlesToShow: any;
    partialPageSize: any;
}): {
    total: number;
    head: number;
    tail: number;
};
