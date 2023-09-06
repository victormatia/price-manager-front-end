import { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { AiOutlineFileSearch } from 'react-icons/ai';

import style from './style.module.css';

export default function Upload() {
  const [file, setFile] = useState<FileWithPath | undefined>(undefined);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div { ...getRootProps() } className={ style['upload__container'] }>
      { file ? <span>{ file?.name }</span> : <span>Click aqui para importar um novo arquivo</span>}
      <input {...getInputProps()} type='file' />
      <AiOutlineFileSearch className={ style['upload__container__icon'] } />
    </div>
  );
}
