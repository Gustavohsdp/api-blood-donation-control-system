import { State } from '@prisma/client';

export interface CreateProps {
  name: string;
  abbreviation: string;
}

export interface UpdateProps {
  id: number;
  name: string;
  abbreviation: string;
}

export interface StatesRepository {
  create(data: CreateProps): Promise<State>;
  update({ id, name, abbreviation }: UpdateProps): Promise<State | undefined>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<State | null>;
  findMany(): Promise<State[]>;
}
