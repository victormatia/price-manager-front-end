import { createContext } from 'react';

import TContext from 'src/types/TContext';

const defaultValues = {} as TContext;

const context = createContext(defaultValues);

export default context;
