export function _getCurrentPageIndexByCurrentParticleIndexInfinite({ currentParticleIndex, particlesCount, clonesCountHead, clonesCountTotal, particlesToScroll, }: {
    currentParticleIndex: any;
    particlesCount: any;
    clonesCountHead: any;
    clonesCountTotal: any;
    particlesToScroll: any;
}): number;
export function _getCurrentPageIndexByCurrentParticleIndexLimited({ currentParticleIndex, particlesToScroll, }: {
    currentParticleIndex: any;
    particlesToScroll: any;
}): number;
export function getCurrentPageIndexByCurrentParticleIndex({ currentParticleIndex, particlesCount, clonesCountHead, clonesCountTotal, infinite, particlesToScroll, }: {
    currentParticleIndex: any;
    particlesCount: any;
    clonesCountHead: any;
    clonesCountTotal: any;
    infinite: any;
    particlesToScroll: any;
}): number;
export function _getPagesCountByParticlesCountInfinite({ particlesCountWithoutClones, particlesToScroll, }: {
    particlesCountWithoutClones: any;
    particlesToScroll: any;
}): number;
export function _getPagesCountByParticlesCountLimited({ particlesCountWithoutClones, particlesToScroll, particlesToShow, }: {
    particlesCountWithoutClones: any;
    particlesToScroll: any;
    particlesToShow: any;
}): number;
export function getPagesCountByParticlesCount({ infinite, particlesCountWithoutClones, particlesToScroll, particlesToShow, }: {
    infinite: any;
    particlesCountWithoutClones: any;
    particlesToScroll: any;
    particlesToShow: any;
}): number;
export function _getParticleIndexByPageIndexInfinite({ pageIndex, clonesCountHead, clonesCountTail, particlesToScroll, particlesCount, }: {
    pageIndex: any;
    clonesCountHead: any;
    clonesCountTail: any;
    particlesToScroll: any;
    particlesCount: any;
}): number;
export function _getParticleIndexByPageIndexLimited({ pageIndex, particlesToScroll, particlesCount, particlesToShow, }: {
    pageIndex: any;
    particlesToScroll: any;
    particlesCount: any;
    particlesToShow: any;
}): number;
export function getParticleIndexByPageIndex({ infinite, pageIndex, clonesCountHead, clonesCountTail, particlesToScroll, particlesCount, particlesToShow, }: {
    infinite: any;
    pageIndex: any;
    clonesCountHead: any;
    clonesCountTail: any;
    particlesToScroll: any;
    particlesCount: any;
    particlesToShow: any;
}): number;
export function applyParticleSizes({ particlesContainerChildren, particleWidth, }: {
    particlesContainerChildren: any;
    particleWidth: any;
}): void;
export function getPartialPageSize({ particlesToScroll, particlesToShow, particlesCountWithoutClones, }: {
    particlesToScroll: any;
    particlesToShow: any;
    particlesCountWithoutClones: any;
}): number;
export function createResizeObserver(onResize: any): ResizeObserver;
