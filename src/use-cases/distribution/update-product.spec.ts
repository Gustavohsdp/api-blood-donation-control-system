import { InMemororyDistributionRepository } from '@/repositories/in-memory/in-memory-distributions-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateDistributionUseCase } from './create-distribution-use-case'
import { UpdateDistributionUseCase } from './update-distribution-use-case'

let distributionsRepository: InMemororyDistributionRepository
let createDistribution: CreateDistributionUseCase
let sut: UpdateDistributionUseCase

describe('Update Distribution Use Case', () => {
  beforeEach(() => {
    distributionsRepository = new InMemororyDistributionRepository()
    createDistribution = new CreateDistributionUseCase(distributionsRepository)
    sut = new UpdateDistributionUseCase(distributionsRepository)
  })

  it('should be able update distribution', async () => {
    const { distribution: created } = await createDistribution.execute({
      date: new Date(),
      productId: 1,
      unityId: 1,
    })

    const { distribution } = await sut.execute({
      date: new Date(),
      productId: 2,
      unityId: 1,
      distributionId: created.id,
    })

    expect(distribution?.productId).toEqual(2)
  })
})
