import { useContext } from 'react';

import context from 'src/context/context';

import Message from '../Message';
import style from './style.module.css';

export default function ErrorsList() {
  const { errorList } = useContext(context);
  return (
    <>
      {
        !!errorList.length && (
          <ul className={ style['error-list'] }>
            { errorList.map((e, i) => (
              <li className={ style['error-list__item'] } key={ e.productCode + i }>
                <Message  message={
                  `Product code: ${e.productCode} - Error Message: ${e.message}`
                } />
              </li>
            )) }
          </ul>
        )
      }
    </>
  );
}
