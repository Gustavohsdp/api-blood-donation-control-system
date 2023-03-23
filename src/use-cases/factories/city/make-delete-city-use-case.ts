import { PrismaCitiesRepository } from '../../../repositories/prisma/prisma-cities-repository';
import { DeleteCityUseCase } from '../../city/delete-city-use-case';

export function makeDeleteCityUseCase() {
  const prismaCitiesRepository = new PrismaCitiesRepository();

  const useCase = new DeleteCityUseCase(prismaCitiesRepository);

  return useCase;
}
