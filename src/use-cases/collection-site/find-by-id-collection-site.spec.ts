import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryCollectionSites } from './../../repositories/in-memory/in-memory-collection-sites-repository'
import { CreateCollectionSiteUseCase } from './create-collection-site-use-case'
import { FindByIdCollectionSiteUseCase } from './find-by-id-collection-site-use-case'

let colletionSitesRepository: InMemoryCollectionSites
let createCollectionSite: CreateCollectionSiteUseCase
let sut: FindByIdCollectionSiteUseCase

describe('Find By Id Collection Site Use Case', () => {
  beforeEach(() => {
    colletionSitesRepository = new InMemoryCollectionSites()
    createCollectionSite = new CreateCollectionSiteUseCase(
      colletionSitesRepository,
    )
    sut = new FindByIdCollectionSiteUseCase(colletionSitesRepository)
  })

  it('should be able collection site find by id', async () => {
    const { collectionSite: created } = await createCollectionSite.execute({
      name: 'UPA Pampulha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
      street: 'Av. Antônio Abrahão Caram',
    })

    const { collectionSite } = await sut.execute({
      collectionSiteId: created.id,
    })

    expect(collectionSite.id).toEqual(expect.any(Number))
    expect(collectionSite.cityId).toEqual(1)
  })
})
