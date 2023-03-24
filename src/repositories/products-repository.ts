import { Product } from '@prisma/client'

export interface CreateProps {
  label: string
  validity: Date
  donationId: number
}

export interface UpdateProps {
  id: number

  label: string
  validity: Date
  donationId: number
}

export interface ProductsRepository {
  create(data: CreateProps): Promise<Product>
  update({
    id,
    donationId,
    label,
    validity,
  }: UpdateProps): Promise<Product | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<Product | null>
  findMany(): Promise<Product[]>
}
