import { CollectionSite } from '@prisma/client'

export interface CreateProps {
  name: string
  street: string
  number: string
  complement: string
  cityId: number
}

export interface UpdateProps {
  collectionSiteId: number

  name: string
  street: string
  number: string
  complement: string
  cityId: number
}

export interface CollectionSitesRepository {
  create(data: CreateProps): Promise<CollectionSite>
  update({
    name,
    cityId,
    collectionSiteId,
    complement,
    number,
    street,
  }: UpdateProps): Promise<CollectionSite | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<CollectionSite | null>
  findMany(): Promise<CollectionSite[]>
}
