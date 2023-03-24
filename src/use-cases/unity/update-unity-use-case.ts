import { UnitsRepository } from '@/repositories/units-repository'
import { Unity } from '@prisma/client'

interface UpdateUnityUseCaseRequest {
  unityId: number

  name: string
  number: string
  complement: string
  cityId: number
}

interface UpdateUnityUseCaseResponse {
  unity: Unity | undefined
}

export class UpdateUnityUseCase {
  constructor(private unitsRepository: UnitsRepository) {}

  async execute({
    name,
    cityId,
    complement,
    unityId,
    number,
  }: UpdateUnityUseCaseRequest): Promise<UpdateUnityUseCaseResponse> {
    const unity = await this.unitsRepository.update({
      name,
      cityId,
      complement,
      id: unityId,
      number,
    })

    return { unity }
  }
}
