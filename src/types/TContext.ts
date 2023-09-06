import { Dispatch, SetStateAction } from 'react';
import { FileWithPath } from 'react-dropzone';

type TContext = {
  file: FileWithPath | null
  setFile: Dispatch<SetStateAction<FileWithPath | null>>
}

export default TContext;
