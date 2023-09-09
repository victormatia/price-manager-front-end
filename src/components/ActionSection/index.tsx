import { useContext } from 'react';

import * as requestFunction from '@/utils/resquestFunctions';

import context from 'src/context/context';

import Button from '../Button';
import style from './style.module.css';

const VALIDATE_URL = 'http://localhost:3001/validate';
const UPDATE_URL = 'http://localhost:3001/update';

export default function ActionSection() {
  const { file, setErrorList, isUpdateEnabled, setIsUpdateEnabled, setUpdatesProducts, setFile } = useContext(context);

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

    if (message) return setErrorList([{ isValid: false, message, productCode: 0 }]);

    setUpdatesProducts(data);
    setFile(null);
  };
  
  return (
    <section className={ style['actions-container'] }>
      <Button
        title='Validar'
        type='button'
        action={ onSubmit }
        isDisabled={ false }
        style={ style['actions-container__validate-button']}
      />
      <Button
        title='Atualizar'
        type='button'
        action={ update }
        isDisabled={ !isUpdateEnabled }
        style={ style['actions-container__update-button']} />
    </section>
  );
}
