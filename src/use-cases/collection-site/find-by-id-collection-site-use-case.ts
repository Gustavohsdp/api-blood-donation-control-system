import { CollectionSitesRepository } from '@/repositories/collection-sites-repository'
import { CollectionSite } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface FindByIdCollectionSiteUseCaseRequest {
  collectionSiteId: number
}

interface FindByIdCollectionSiteUseCaseResponse {
  collectionSite: CollectionSite
}

export class FindByIdCollectionSiteUseCase {
  constructor(private collectionSitesRepository: CollectionSitesRepository) { }

  async execute({
    collectionSiteId,
  }: FindByIdCollectionSiteUseCaseRequest): Promise<FindByIdCollectionSiteUseCaseResponse> {
    const collectionSite = await this.collectionSitesRepository.findById(
      collectionSiteId,
    )

    if (!collectionSite) {
      throw new ResourceNotFoundError()
    }

    return { collectionSite }
  }
}
