import { PrismaCollectionSitesRepository } from './../../../repositories/prisma/prisma-collection-sites-repository';
import { UpdateCollectionSiteUseCase } from './../../collection-site/update-collection-site-use-case';

export function makeUpdateCollectionSiteUseCase() {
  const prismaCollectionSiteRepository = new PrismaCollectionSitesRepository();

  const useCase = new UpdateCollectionSiteUseCase(
    prismaCollectionSiteRepository,
  );

  return useCase;
}
