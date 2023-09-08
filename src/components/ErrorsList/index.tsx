import { useContext } from 'react';

import context from 'src/context/context';

import Message from '../Message';

export default function ErrorsList() {
  const { errorList } = useContext(context);
  return (
    <>
      {
        !!errorList.length && (
          <ul>
            { errorList.map((e, i) => (
              <li key={ e.productCode + i }>
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
