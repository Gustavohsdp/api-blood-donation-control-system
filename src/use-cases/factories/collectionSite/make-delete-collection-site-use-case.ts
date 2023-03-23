import { PrismaCollectionSitesRepository } from '@/repositories/prisma/prisma-collection-sites-repository'
import { DeleteCollectionSiteUseCase } from './../../collection-site/delete-collection-site-use-case'

export function makeDeleteCollectionSiteUseCase() {
  const prismaCollectionSiteRepository = new PrismaCollectionSitesRepository()

  const useCase = new DeleteCollectionSiteUseCase(
    prismaCollectionSiteRepository,
  )

  return useCase
}
