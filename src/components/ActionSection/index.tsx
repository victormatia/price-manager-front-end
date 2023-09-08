import { useContext } from 'react';

import * as requestFunction from '@/utils/resquestFunctions';

import context from 'src/context/context';

import Button from '../Button';

const VALIDATE_URL = 'http://localhost:3001/validate';
const UPDATE_URL = 'http://localhost:3001/update';

export default function ActionSection() {
  const { file, setErrorList, isUpdateEnabled, setIsUpdateEnabled } = useContext(context);

  const onSubmit = async () => {
    const csvData = new FormData();

    csvData.append('file', file as Blob);

    const { message, data } = await requestFunction.post(VALIDATE_URL, csvData);

    if(message) {
      return setErrorList([{ isValid: false, message, productCode: 0 }]);
    }

    data.forEach((e: any) => {
      if (!e.isValid) setErrorList((prev) => [...prev, e]);
    });

    setIsUpdateEnabled(data.every((e: any) => e.isValid));
  };

  const update = async () => {
    const { message, data } = await requestFunction.update(UPDATE_URL, {});
    console.log(data, message);
  };
  
  return (
    <section>
      <Button title='Validar' type='button' action={ onSubmit } isDisabled={ false } />
      <Button title='Atualizar' type='button' action={ update } isDisabled={ !isUpdateEnabled } />
    </section>
  );
}
