import { useContext } from 'react';

import requestFunction from '@/utils/resquestFunction';

import context from 'src/context/context';

import Button from '../Button';

const VALIDATE_URL = 'http://localhost:3001/validate';

export default function ActionSection() {
  const { file, setErrorList, isUpdateEnabled, setIsUpdateEnabled } = useContext(context);

  const onSubmit = async () => {
    const csvData = new FormData();

    csvData.append('file', file as Blob);

    const { message, data } = await requestFunction(VALIDATE_URL, csvData);

    if(message) {
      return setErrorList([{ isValid: false, message, productCode: 0 }]);
    }

    data.forEach((e: any) => {
      if (!e.isValid) setErrorList((prev) => [...prev, e]);
    });

    setIsUpdateEnabled(data.every((e: any) => e.isValid));
  };
  
  return (
    <section>
      <Button title='Validar' type='button' action={ onSubmit } isDisabled={ false } />
      <Button title='Atualizar' type='button' action={ () => {} } isDisabled={ !isUpdateEnabled } />
    </section>
  );
}
