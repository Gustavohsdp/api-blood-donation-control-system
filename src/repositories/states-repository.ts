import { State } from '@prisma/client'

export interface StatesRepositoryProps {
  name: string
  abbreviation: string
}

export interface UpdateStateRepositoryProps {
  id: number
  name: string
  abbreviation: string
}

export interface StatesRepository {
  create(data: StatesRepositoryProps): Promise<State>
  update({
    id,
    name,
    abbreviation,
  }: UpdateStateRepositoryProps): Promise<State | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<State | null>
  findManyStates(): Promise<State[]>
}
