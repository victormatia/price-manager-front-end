import { ReactNode } from 'react';

type TGenericButton = {
  title: string,
  type: 'submit' | 'button',
  icon?: ReactNode,
  action: (params: unknown) => unknown,
  isDisabled: boolean,
}

export default TGenericButton;
