import { Distribution } from '@prisma/client'

export interface CreateProps {
  date: Date
  productId: number
  unityId: number
}

export interface UpdateProps {
  id: number

  date: Date
  productId: number
  unityId: number
}

export interface DistributionsRepository {
  create(data: CreateProps): Promise<Distribution>
  update({
    date,
    id,
    productId,
    unityId,
  }: UpdateProps): Promise<Distribution | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<Distribution | null>
  findMany(): Promise<Distribution[]>
}
