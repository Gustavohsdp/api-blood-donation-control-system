import { PrismaStatesRepository } from '@/repositories/prisma/prisma-states-repository';
import { UpdateStateUseCase } from '@/use-cases/state/update-state-use-case';

export function makeUpdateStateUseCase() {
  const prismaStatesRepository = new PrismaStatesRepository();

  const useCase = new UpdateStateUseCase(prismaStatesRepository);

  return useCase;
}
