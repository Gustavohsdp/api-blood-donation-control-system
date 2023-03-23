import { randomInt } from 'node:crypto';

import { City } from '@prisma/client';

import {
  CitiesRepository,
  CreateProps,
  UpdateProps,
} from './../cities-repository';
export class InMemororyCitiesRepository implements CitiesRepository {
  public items: City[] = [];

  async create(data: CreateProps) {
    const city = {
      id: randomInt(1000),
      name: data.name,
      stateId: data.stateId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.items.push(city);

    return city;
  }

  async update({ cityId, name, stateId }: UpdateProps) {
    const cityIndex = this.items.findIndex(item => item.id === cityId);

    if (cityIndex >= 0) {
      this.items[cityIndex] = {
        id: cityId,
        name,
        stateId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const city = this.items.find(item => item.id === cityId);

      return city;
    }
  }

  async delete(cityId: number) {
    const cityIndex = this.items.findIndex(item => item.id === cityId);

    if (cityIndex >= 0) {
      this.items.splice(cityIndex, 1);
    }
  }

  async findById(cityId: number) {
    const city = this.items.find(item => item.id === cityId);

    if (!city) {
      return null;
    }

    return city;
  }

  async findMany() {
    return this.items;
  }
}
