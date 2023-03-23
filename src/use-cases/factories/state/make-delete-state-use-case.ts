import { PrismaStatesRepository } from '@/repositories/prisma/prisma-states-repository';
import { DeleteStateUseCase } from '@/use-cases/state/delete-state-use-case';

export function makeDeleteStateUseCase() {
  const prismaStatesRepository = new PrismaStatesRepository();

  const useCase = new DeleteStateUseCase(prismaStatesRepository);

  return useCase;
}
