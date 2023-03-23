import { PrismaCollectionSitesRepository } from '@/repositories/prisma/prisma-collection-sites-repository'
import { CreateCollectionSiteUseCase } from './../../collection-site/create-collection-site-use-case'

export function makeCreateCollectionSiteUseCase() {
  const prismaCollectionSiteRepository = new PrismaCollectionSitesRepository()

  const useCase = new CreateCollectionSiteUseCase(
    prismaCollectionSiteRepository,
  )

  return useCase
}
