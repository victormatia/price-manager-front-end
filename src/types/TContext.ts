import { Dispatch, SetStateAction } from 'react';
import { FileWithPath } from 'react-dropzone';

import TInvalidPrices from './TInvalidPrice';
import TProduct from './TProduct';

type TContext = {
  file: FileWithPath | null,
  setFile: Dispatch<SetStateAction<FileWithPath | null>>,
  errorList: TInvalidPrices[], 
  setErrorList: Dispatch<SetStateAction<TInvalidPrices[]>>,
  isUpdateEnabled: boolean,
  setIsUpdateEnabled: Dispatch<SetStateAction<boolean>>,
  updatedProducts: TProduct[],
  setUpdatesProducts: Dispatch<SetStateAction<TProduct[]>>
}

export default TContext;
