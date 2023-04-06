import { InMemororyDistributionRepository } from '@/repositories/in-memory/in-memory-distributions-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateDistributionUseCase } from './create-distribution-use-case'

let distributionsRepository: InMemororyDistributionRepository
let sut: CreateDistributionUseCase

describe('Create Distribution Use Case', () => {
  beforeEach(() => {
    distributionsRepository = new InMemororyDistributionRepository()
    sut = new CreateDistributionUseCase(distributionsRepository)
  })

  it('should be able create distribution', async () => {
    const { distribution } = await sut.execute({
      date: new Date(),
      productId: 1,
      unityId: 1,
    })

    expect(distribution.id).toEqual(expect.any(Number))
  })
})
