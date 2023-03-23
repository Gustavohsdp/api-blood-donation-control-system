import { CollectionSitesRepository } from '@/repositories/collection-sites-repository'
import { CollectionSite } from '@prisma/client'

interface FindManyCollectionSiteUseCaseResponse {
  colletionSites: CollectionSite[]
}

export class FindManyCollectionSiteUseCase {
  constructor(private collectionSitesRepository: CollectionSitesRepository) {}

  async execute(): Promise<FindManyCollectionSiteUseCaseResponse> {
    const colletionSites = await this.collectionSitesRepository.findMany()

    return { colletionSites }
  }
}
