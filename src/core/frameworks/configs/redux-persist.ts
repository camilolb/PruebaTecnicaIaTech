import { cInfrastructures } from '../../di';

export const moviePersistConfig = {
  key: 'movie',
  storage: cInfrastructures.storage,
  blacklist: []
};
