import { City } from '@prisma/client'
import { randomInt } from 'node:crypto'
import {
  CitiesRepository,
  CitiesRepositoryProps,
  FindByIdOrNameCitiesRepositoryProps,
  UpdateCitiesRepositoryProps
} from './../cities-repository'
export class InMemororyCitiesRepository implements CitiesRepository {
  public items: City[] = []

  async create(data: CitiesRepositoryProps) {
    const City = {
      id: randomInt(1000),
      name: data.name,
      stateId: data.stateId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.items.push(City)

    return City
  }

  async update({ cityId, name, stateId }: UpdateCitiesRepositoryProps) {
    const cityIndex = this.items.findIndex((item) => item.id === cityId)

    if (cityIndex >= 0) {
      this.items[cityIndex] = {
        id: cityId,
        name,
        stateId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      const city = this.items.find((item) => item.id === cityId)

      return city
    }
  }

  async delete(cityId: number) {
    const cityIndex = this.items.findIndex((item) => item.id === cityId)

    if (cityIndex >= 0) {
      this.items.splice(cityIndex, 1)
    }
  }

  async findByIdOrName({
    name,
    cityId,
  }: FindByIdOrNameCitiesRepositoryProps): Promise<City | null> {
    const city = this.items.find(
      (item) => item.id === cityId || item.name === name,
    )

    if (!city) {
      return null
    }

    return city
  }

  async findManyCities(): Promise<City[]> {
    return this.items
  }
}
