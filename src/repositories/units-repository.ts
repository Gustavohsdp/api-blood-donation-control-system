import { Unity } from '@prisma/client'

export interface CreateProps {
  name: string
  number: string
  complement: string
  cityId: number
}

export interface UpdateProps {
  id: number

  name: string
  number: string
  complement: string
  cityId: number
}

export interface UnitsRepository {
  create(data: CreateProps): Promise<Unity>
  update({
    id,
    name,
    cityId,
    complement,
    number,
  }: UpdateProps): Promise<Unity | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<Unity | null>
  findMany(): Promise<Unity[]>
}
