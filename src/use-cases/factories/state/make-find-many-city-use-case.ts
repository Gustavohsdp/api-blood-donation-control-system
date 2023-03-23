import { PrismaStatesRepository } from '@/repositories/prisma/prisma-states-repository';
import { FindManyStateUseCase } from '@/use-cases/state/find-many-state-use-case';

export function makeFindManyStateUseCase() {
  const prismaStatesRepository = new PrismaStatesRepository();

  const useCase = new FindManyStateUseCase(prismaStatesRepository);

  return useCase;
}
