import { People } from '@prisma/client'

export interface CreateProps {
  name: string
  street: string
  number: string
  complement: string
  document: string
  cityId: number
  blodyTypeId: number
}

export interface UpdateProps {
  id: number

  name: string
  street: string
  number: string
  complement: string
  document: string
  cityId: number
  blodyTypeId: number
}

export interface PeoplesRepository {
  create(data: CreateProps): Promise<People>
  update({
    id,
    blodyTypeId,
    cityId,
    complement,
    document,
    name,
    street,
  }: UpdateProps): Promise<People | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<People | null>
  findMany(): Promise<People[]>
}
