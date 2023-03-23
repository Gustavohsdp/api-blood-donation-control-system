import { PrismaStatesRepository } from '@/repositories/prisma/prisma-states-repository';
import { FindByIdStateUseCase } from '@/use-cases/state/find-by-id-state-use-case';

export function makeFindByIdStateUseCase() {
  const prismaStatesRepository = new PrismaStatesRepository();

  const useCase = new FindByIdStateUseCase(prismaStatesRepository);

  return useCase;
}
