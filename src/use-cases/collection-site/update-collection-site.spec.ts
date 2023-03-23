import { beforeEach, describe, expect, it } from 'vitest';

import { InMemoryCollectionSites } from './../../repositories/in-memory/in-memory-collection-sites-repository';
import { CreateCollectionSiteUseCase } from './create-collection-site-use-case';
import { UpdateCollectionSiteUseCase } from './update-collection-site-use-case';

let colletionSitesRepository: InMemoryCollectionSites;
let createCollectionSite: CreateCollectionSiteUseCase;
let sut: UpdateCollectionSiteUseCase;

describe('Update Colletion Site Use Case', () => {
  beforeEach(() => {
    colletionSitesRepository = new InMemoryCollectionSites();
    createCollectionSite = new CreateCollectionSiteUseCase(
      colletionSitesRepository,
    );
    sut = new UpdateCollectionSiteUseCase(colletionSitesRepository);
  });

  it('should be able update collection site', async () => {
    const { collectionSite: created } = await createCollectionSite.execute({
      name: 'UPA Pampulha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
      street: 'Av. Antônio Abrahão Caram',
    });

    const { collectionSite } = await sut.execute({
      cityId: created.cityId,
      collectionSiteId: created.id,
      complement: created.complement,
      name: 'UPA Savassi',
      number: created.number,
      street: created.street,
    });

    expect(collectionSite?.name).toEqual('UPA Savassi');
  });
});
