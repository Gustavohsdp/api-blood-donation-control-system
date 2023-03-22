import { State } from '@prisma/client'

export interface StatesRepositoryProps {
  name: string
  abbreviation: string
}

export interface StatesRepository {
  create(data: StatesRepositoryProps): Promise<State>
  update(id: number, data: StatesRepositoryProps): Promise<State>
  delete(id: number): Promise<void>
  findByIdOrName(id: number, name: string): Promise<State | null>
  findManyCities(): Promise<State[]>
}
