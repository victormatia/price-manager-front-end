import { ReactNode, useMemo, useState } from 'react';
import { FileWithPath } from 'react-dropzone';

import context from './context';

export default function Provider({ children }: { children: ReactNode }) {
  const [file, setFile] = useState<FileWithPath | null>(null);

  const states = useMemo(() => ({
    file, setFile,
  }), [file]);

  return (
    <context.Provider value={states}>
      { children }
    </context.Provider>
  );
}

