import axios from 'axios';

export default async function requestFunction(path: string, data: any) {
  try {
    const response = await axios.post(path, data);

    return response.data;

  } catch(e) {
    console.error(e);
  }
}