import { City } from '@prisma/client';

export interface CreateProps {
  name: string;
  stateId: number;
}

export interface UpdateProps {
  cityId: number;
  name: string;
  stateId: number;
}

export interface CitiesRepository {
  create(data: CreateProps): Promise<City>;
  update({ cityId, name, stateId }: UpdateProps): Promise<City | undefined>;
  delete(cityId: number): Promise<void>;
  findById(cityId: number): Promise<City | null>;
  findMany(): Promise<City[]>;
}
