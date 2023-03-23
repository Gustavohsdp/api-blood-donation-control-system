import { StatesRepository } from '@/repositories/states-repository';
import { State } from '@prisma/client';

interface FindManyStateUseCaseResponse {
  states: State[];
}

export class FindManyStateUseCase {
  constructor(private statesRepository: StatesRepository) {}

  async execute(): Promise<FindManyStateUseCaseResponse> {
    const states = await this.statesRepository.findMany();

    return { states };
  }
}
