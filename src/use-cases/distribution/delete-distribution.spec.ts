import { beforeEach, describe, expect, it } from 'vitest'

import { InMemororyDistributionRepository } from '@/repositories/in-memory/in-memory-distributions-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { CreateDistributionUseCase } from './create-distribution-use-case'
import { DeleteDistributionUseCase } from './delete-distribution-use-case'
import { FindByIdDistributionUseCase } from './find-by-id-distribution-use-case'

let distributionsRepository: InMemororyDistributionRepository
let createDistribution: CreateDistributionUseCase
let findByIdDistributionUseCase: FindByIdDistributionUseCase
let sut: DeleteDistributionUseCase

describe('Delete Distribution Use Case', () => {
  beforeEach(() => {
    distributionsRepository = new InMemororyDistributionRepository()
    createDistribution = new CreateDistributionUseCase(distributionsRepository)
    findByIdDistributionUseCase = new FindByIdDistributionUseCase(
      distributionsRepository,
    )
    sut = new DeleteDistributionUseCase(distributionsRepository)
  })

  it('should be able delete distribution', async () => {
    const { distribution } = await createDistribution.execute({
      date: new Date(),
      productId: 1,
      unityId: 1,
    })

    await sut.execute({
      distributionId: distribution.id,
    })

    await expect(() =>
      findByIdDistributionUseCase.execute({
        distributionId: distribution.id,
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
