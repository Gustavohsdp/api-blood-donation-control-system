import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryCollectionSites } from './../../repositories/in-memory/in-memory-collection-sites-repository'
import { CreateCollectionSiteUseCase } from './create-collection-site-use-case'
import { FindManyCollectionSiteUseCase } from './find-many-collection-site-use-case'

let colletionSitesRepository: InMemoryCollectionSites
let createCollectionSite: CreateCollectionSiteUseCase
let sut: FindManyCollectionSiteUseCase

describe('Find Many Collection Site Use Case', () => {
  beforeEach(() => {
    colletionSitesRepository = new InMemoryCollectionSites()
    createCollectionSite = new CreateCollectionSiteUseCase(
      colletionSitesRepository,
    )
    sut = new FindManyCollectionSiteUseCase(colletionSitesRepository)
  })

  it('should be able find many collection sites', async () => {
    await createCollectionSite.execute({
      name: 'UPA Pampulha',
      cityId: 1,
      complement: 'near the mineirão',
      number: '1001',
      street: 'Av. Antônio Abrahão Caram',
    })

    await createCollectionSite.execute({
      name: 'UPA Savassi',
      cityId: 1,
      complement: 'near the hotel',
      number: '939',
      street: 'Rua Sergipe',
    })

    const { colletionSites } = await sut.execute()

    expect(colletionSites).toHaveLength(2)
    expect(colletionSites).toEqual([
      expect.objectContaining({
        name: 'UPA Pampulha',
      }),
      expect.objectContaining({
        name: 'UPA Savassi',
      }),
    ])
  })
})
