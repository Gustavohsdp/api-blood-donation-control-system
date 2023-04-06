import { BlodyType } from '@prisma/client'

export interface CreateProps {
  type: string
  factor: string
}

export interface UpdateProps {
  id: number

  type: string
  factor: string
}

export interface BlodyTypesRepository {
  create(data: CreateProps): Promise<BlodyType>
  update({ id, factor, type }: UpdateProps): Promise<BlodyType | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<BlodyType | null>
  findMany(): Promise<BlodyType[]>
}
