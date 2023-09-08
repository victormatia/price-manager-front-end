import { useContext } from 'react';

import requestFunction from '@/utils/resquestFunction';

import context from 'src/context/context';

import Button from '../Button';

const VALIDATE_URL = 'http://localhost:3001/validate';

export default function ActionSection() {
  const { file, setErrorList, isUpdateEnabled, setIsUpdateEnabled } = useContext(context);

  const onSubmit = async () => {
    const data = new FormData();

    data.append('file', file as Blob);

    const areInvalidPrices = await requestFunction(VALIDATE_URL, data);

    areInvalidPrices.forEach((e: any) => {
      if (!e.isValid) setErrorList((prev) => [...prev, e]);
    });

    setIsUpdateEnabled(areInvalidPrices.every((e: any) => e.isValid));
  };
  
  return (
    <section>
      <Button title='Validar' type='button' action={ onSubmit } isDisabled={ false } />
      <Button title='Atualizar' type='button' action={ () => {} } isDisabled={ !isUpdateEnabled } />
    </section>
  );
}
