import { InMemororyDistributionRepository } from '@/repositories/in-memory/in-memory-distributions-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateDistributionUseCase } from './create-distribution-use-case'
import { FindManyDistributionUseCase } from './find-many-distribution-use-case'

let distributionsRepository: InMemororyDistributionRepository
let createDistribution: CreateDistributionUseCase
let sut: FindManyDistributionUseCase

describe('Find Many Distribution Use Case', () => {
  beforeEach(() => {
    distributionsRepository = new InMemororyDistributionRepository()
    createDistribution = new CreateDistributionUseCase(distributionsRepository)
    sut = new FindManyDistributionUseCase(distributionsRepository)
  })

  it('should be able find many distributions', async () => {
    await createDistribution.execute({
      date: new Date(),
      productId: 1,
      unityId: 1,
    })

    await createDistribution.execute({
      date: new Date(),
      productId: 2,
      unityId: 2,
    })

    const { distributions } = await sut.execute()

    expect(distributions).toHaveLength(2)
    expect(distributions).toEqual([
      expect.objectContaining({
        productId: 1,
        unityId: 1,
      }),
      expect.objectContaining({
        productId: 2,
        unityId: 2,
      }),
    ])
  })
})
