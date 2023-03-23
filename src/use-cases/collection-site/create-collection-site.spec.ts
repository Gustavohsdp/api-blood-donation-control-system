import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryCollectionSites } from './../../repositories/in-memory/in-memory-collection-sites-repository'
import { CreateCollectionSiteUseCase } from './create-collection-site-use-case'

let colletionSitesRepository: InMemoryCollectionSites
let sut: CreateCollectionSiteUseCase

describe('Create Collection Site Use Case', () => {
  beforeEach(() => {
    colletionSitesRepository = new InMemoryCollectionSites()
    sut = new CreateCollectionSiteUseCase(colletionSitesRepository)
  })

  it('should be able create collection site', async () => {
    const { collectionSite } = await sut.execute({
      name: 'UPA Pampulha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
      street: 'Av. Antônio Abrahão Caram',
    })

    expect(collectionSite.id).toEqual(expect.any(Number))
    expect(collectionSite.name).toEqual('UPA Pampulha')
  })
})
