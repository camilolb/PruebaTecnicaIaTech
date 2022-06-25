import { iInfrastructures } from '../infrastructure/interfaces/iInfrastrcutures';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Create instance of infrastructures
 */
export default (): iInfrastructures => ({
  storage: AsyncStorage
});
