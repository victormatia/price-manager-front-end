import { ReactNode, useMemo, useState } from 'react';
import { FileWithPath } from 'react-dropzone';

import TInvalidPrices from 'src/types/TInvalidPrice';
import TProduct from 'src/types/TProduct';

import context from './context';

export default function Provider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<FileWithPath | null>(null);
  const [errorList, setErrorList] = useState<TInvalidPrices[]>([]);
  const [isUpdateEnabled, setIsUpdateEnabled] = useState<boolean>(false);
  const [updatedProducts, setUpdatesProducts] = useState<TProduct[]>([]);

  const states = useMemo(() => ({
    file, setFile,
    errorList, setErrorList,
    isUpdateEnabled, setIsUpdateEnabled,
    updatedProducts, setUpdatesProducts,
  }), [file, errorList, isUpdateEnabled, updatedProducts]);

  return (
    <context.Provider value={states}>
      { children }
    </context.Provider>
  );
}

