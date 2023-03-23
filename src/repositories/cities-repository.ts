import { City } from '@prisma/client'

export interface CitiesRepositoryProps {
  name: string
  stateId: number
}

export interface UpdateCitiesRepositoryProps {
  cityId: number
  name: string
  stateId: number
}

export interface CitiesRepository {
  create(data: CitiesRepositoryProps): Promise<City>
  update({
    cityId,
    name,
    stateId,
  }: UpdateCitiesRepositoryProps): Promise<City | undefined>
  delete(cityId: number): Promise<void>
  findById(cityId: number): Promise<City | null>
  findManyCities(): Promise<City[]>
}
