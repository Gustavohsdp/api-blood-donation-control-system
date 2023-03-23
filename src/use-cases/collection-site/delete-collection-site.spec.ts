import { beforeEach, describe, expect, it } from 'vitest'

import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { InMemoryCollectionSites } from './../../repositories/in-memory/in-memory-collection-sites-repository'
import { CreateCollectionSiteUseCase } from './create-collection-site-use-case'
import { DeleteCollectionSiteUseCase } from './delete-collection-site-use-case'
import { FindByIdCollectionSiteUseCase } from './find-by-id-collection-site-use-case'

let colletionSitesRepository: InMemoryCollectionSites
let createCollectionSite: CreateCollectionSiteUseCase
let findByIdCollectionSiteUseCase: FindByIdCollectionSiteUseCase
let sut: DeleteCollectionSiteUseCase

describe('Delete Collection Site Use Case', () => {
  beforeEach(() => {
    colletionSitesRepository = new InMemoryCollectionSites()
    createCollectionSite = new CreateCollectionSiteUseCase(
      colletionSitesRepository,
    )
    findByIdCollectionSiteUseCase = new FindByIdCollectionSiteUseCase(
      colletionSitesRepository,
    )
    sut = new DeleteCollectionSiteUseCase(colletionSitesRepository)
  })

  it('should be able delete collection site', async () => {
    const { collectionSite } = await createCollectionSite.execute({
      name: 'UPA Pampulha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
      street: 'Av. Antônio Abrahão Caram',
    })

    await sut.execute({
      collectionSiteId: collectionSite.id,
    })

    await expect(() =>
      findByIdCollectionSiteUseCase.execute({
        collectionSiteId: collectionSite.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
