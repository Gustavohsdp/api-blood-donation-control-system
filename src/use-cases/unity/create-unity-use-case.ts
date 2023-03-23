import { UnitsRepository } from '@/repositories/units-repository'
import { Unity } from '@prisma/client'

interface CreateUnityUseCaseRequest {
  name: string
  number: string
  complement: string
  cityId: number
}

interface CreateUnityUseCaseResponse {
  unity: Unity
}

export class CreateUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute({
    name,
    number,
    complement,
    cityId,
  }: CreateUnityUseCaseRequest): Promise<CreateUnityUseCaseResponse> {
    const unity = await this.unitsRepository.create({
      cityId,
      complement,
      name,
      number,
    })

    return { unity }
  }
}
