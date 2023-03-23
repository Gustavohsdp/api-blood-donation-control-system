import { beforeEach, describe, expect, it } from 'vitest';

import { InMemororyStatesRepository } from './../../repositories/in-memory/in-memory-states-repository';
import { CreateStateUseCase } from './create-state-use-case';
import { UpdateStateUseCase } from './update-state-use-case';

let statesRepository: InMemororyStatesRepository;
let createState: CreateStateUseCase;
let sut: UpdateStateUseCase;

describe('Update State Use Case', () => {
  beforeEach(() => {
    statesRepository = new InMemororyStatesRepository();
    createState = new CreateStateUseCase(statesRepository);
    sut = new UpdateStateUseCase(statesRepository);
  });

  it('should be able update state', async () => {
    const { state: created } = await createState.execute({
      name: 'São Paulo',
      abbreviation: 'SP',
    });

    const { state } = await sut.execute({
      id: created.id,
      name: 'Rio de Janeiro',
      abbreviation: 'RJ',
    });

    expect(state.name).toEqual('Rio de Janeiro');
    expect(state.abbreviation).toEqual('RJ');
  });
});
