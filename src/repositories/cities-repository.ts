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

export interface FindByIdOrNameCitiesRepositoryProps {
  cityId: number
  name: string
}

export interface CitiesRepository {
  create(data: CitiesRepositoryProps): Promise<City>
  update({
    cityId,
    name,
    stateId,
  }: UpdateCitiesRepositoryProps): Promise<City | undefined>
  delete(cityId: number): Promise<void>
  findByIdOrName({
    name,
    cityId,
  }: FindByIdOrNameCitiesRepositoryProps): Promise<City | null>
  findManyCities(): Promise<City[]>
}
