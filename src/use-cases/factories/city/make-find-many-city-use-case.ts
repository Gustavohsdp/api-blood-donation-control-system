import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository';
import { FindManyCityUseCase } from '../../city/find-many-city-use-case';

export function makeFindManyCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository();

  const useCase = new FindManyCityUseCase(prismaCitiesRepository);

  return useCase;
}
