import { CollectionSitesRepository } from '@/repositories/collection-sites-repository';
import { CollectionSite } from '@prisma/client';

interface CreateCollectionSiteUseCaseRequest {
  name: string;
  street: string;
  number: string;
  complement: string;
  cityId: number;
}

interface CreateCollectionSiteUseCaseResponse {
  collectionSite: CollectionSite;
}

export class CreateCollectionSiteUseCase {
  constructor(private collectionSitesRepository: CollectionSitesRepository) {}

  async execute({
    cityId,
    complement,
    name,
    number,
    street,
  }: CreateCollectionSiteUseCaseRequest): Promise<CreateCollectionSiteUseCaseResponse> {
    const collectionSite = await this.collectionSitesRepository.create({
      cityId,
      complement,
      name,
      number,
      street,
    });

    return { collectionSite };
  }
}
