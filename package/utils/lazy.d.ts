export function getIndexesOfParticlesWithoutClonesInPage({ pageIndex, particlesToShow, particlesToScroll, particlesCount, }: {
    pageIndex: any;
    particlesToShow: any;
    particlesToScroll: any;
    particlesCount: any;
}): number[];
export function getAdjacentIndexes({ infinite, pageIndex, pagesCount, particlesCount, particlesToShow, particlesToScroll, }: {
    infinite: any;
    pageIndex: any;
    pagesCount: any;
    particlesCount: any;
    particlesToShow: any;
    particlesToScroll: any;
}): {
    pageIndexes: any[];
    particleIndexes: any[];
};
