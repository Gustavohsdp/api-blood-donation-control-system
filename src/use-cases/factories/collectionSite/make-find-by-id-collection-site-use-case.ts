import { PrismaCollectionSitesRepository } from '@/repositories/prisma/prisma-collection-sites-repository';
import { FindByIdCollectionSiteUseCase } from '@/use-cases/collection-site/find-by-id-collection-site-use-case';

export function makeFindByIdCollectionSiteUseCase() {
  const prismaCollectionSiteRepository = new PrismaCollectionSitesRepository();

  const useCase = new FindByIdCollectionSiteUseCase(
    prismaCollectionSiteRepository,
  );

  return useCase;
}
