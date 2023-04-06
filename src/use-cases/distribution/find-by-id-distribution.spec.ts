import { InMemororyDistributionRepository } from '@/repositories/in-memory/in-memory-distributions-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateDistributionUseCase } from './create-distribution-use-case'
import { FindByIdDistributionUseCase } from './find-by-id-distribution-use-case'

let distributionsRepository: InMemororyDistributionRepository
let createDistribution: CreateDistributionUseCase
let sut: FindByIdDistributionUseCase

describe('Find By Id Distribution Use Case', () => {
  beforeEach(() => {
    distributionsRepository = new InMemororyDistributionRepository()
    createDistribution = new CreateDistributionUseCase(distributionsRepository)
    sut = new FindByIdDistributionUseCase(distributionsRepository)
  })

  it('should be able distribution find by id', async () => {
    const { distribution: created } = await createDistribution.execute({
      date: new Date(),
      productId: 1,
      unityId: 1,
    })

    const { distribution } = await sut.execute({
      distributionId: created.id,
    })

    expect(distribution.id).toEqual(expect.any(Number))
  })
})
