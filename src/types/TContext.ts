import { Dispatch, SetStateAction } from 'react';
import { FileWithPath } from 'react-dropzone';

import TInvalidPrices from './TInvalidPrice';

type TContext = {
  file: FileWithPath | null,
  setFile: Dispatch<SetStateAction<FileWithPath | null>>,
  errorList: TInvalidPrices[], 
  setErrorList: Dispatch<SetStateAction<TInvalidPrices[]>>,
  isUpdateEnabled: boolean,
  setIsUpdateEnabled: Dispatch<SetStateAction<boolean>>,
}

export default TContext;
