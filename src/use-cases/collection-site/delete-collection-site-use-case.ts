import { CollectionSitesRepository } from '@/repositories/collection-sites-repository'

interface DeleteCollectionSiteUseCaseParams {
  collectionSiteId: number
}

export class DeleteCollectionSiteUseCase {
  constructor(private collectionSitesRepository: CollectionSitesRepository) {}

  async execute({ collectionSiteId }: DeleteCollectionSiteUseCaseParams) {
    await this.collectionSitesRepository.delete(collectionSiteId)
  }
}
