import { CollectionSitesRepository } from '@/repositories/collection-sites-repository';
import { CollectionSite } from '@prisma/client';

interface UpdateCollectionSiteUseCaseRequest {
  collectionSiteId: number;

  name: string;
  street: string;
  number: string;
  complement: string;
  cityId: number;
}

interface UpdateCollectionSiteUseCaseResponse {
  collectionSite: CollectionSite | undefined;
}

export class UpdateCollectionSiteUseCase {
  constructor(private collectionSitesRepository: CollectionSitesRepository) {}

  async execute({
    cityId,
    collectionSiteId,
    complement,
    name,
    number,
    street,
  }: UpdateCollectionSiteUseCaseRequest): Promise<UpdateCollectionSiteUseCaseResponse> {
    const collectionSite = await this.collectionSitesRepository.update({
      cityId,
      collectionSiteId,
      complement,
      name,
      number,
      street,
    });

    return { collectionSite };
  }
}
