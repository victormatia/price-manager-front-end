import { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineFileSearch, AiOutlineFileDone } from 'react-icons/ai';

import context from 'src/context/context';

import style from './style.module.css';

export default function Upload() {
  const { file, setFile, setErrorList, setIsUpdateEnabled, setUpdatesProducts } = useContext(context);

  const onDrop = useCallback((acceptedFiles: any) => {
    setErrorList([]);
    setIsUpdateEnabled(false);
    setUpdatesProducts([]);
    setFile(acceptedFiles[0]);
    
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div { ...getRootProps() } className={ style['upload__container'] }>
      <input {...getInputProps()} type='file' />
      { file ? (
        <>
          <span>{ file?.name }</span>
          <AiOutlineFileDone className={ style['upload__container__icon'] } />
        </>
      ) : (
        <>
          <span>Click ou arraste até aqui para importar um novo arquivo</span>
          <AiOutlineFileSearch className={ style['upload__container__icon'] } />
        </>
      ) 
      }
    </div>
  );
}
