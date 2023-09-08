import { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineFileSearch } from 'react-icons/ai';

import context from 'src/context/context';

import style from './style.module.css';

export default function Upload() {
  const { file, setFile, setErrorList } = useContext(context);

  const onDrop = useCallback((acceptedFiles: any) => {
    setErrorList([]);
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
