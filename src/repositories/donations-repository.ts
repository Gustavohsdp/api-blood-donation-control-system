import { Donation } from '@prisma/client'

export interface CreateProps {
  date: Date
  collectionSiteId: number
  peopleId: number
}

export interface UpdateProps {
  id: number

  date: Date
  collectionSiteId: number
  peopleId: number
}

export interface DonationsRepository {
  create(data: CreateProps): Promise<Donation>
  update({
    id,
    collectionSiteId,
    peopleId,
    date,
  }: UpdateProps): Promise<Donation | undefined>
  delete(id: number): Promise<void>
  findById(id: number): Promise<Donation | null>
  findMany(): Promise<Donation[]>
}
