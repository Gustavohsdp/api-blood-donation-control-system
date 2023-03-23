import { PrismaCollectionSitesRepository } from '@/repositories/prisma/prisma-collection-sites-repository';

import { FindManyCollectionSiteUseCase } from './../../collection-site/find-many-collection-site-use-case';

export function makeFindManyCollectionSiteUseCase() {
  const prismaCollectionSiteRepository = new PrismaCollectionSitesRepository();

  const useCase = new FindManyCollectionSiteUseCase(
    prismaCollectionSiteRepository,
  );

  return useCase;
}
