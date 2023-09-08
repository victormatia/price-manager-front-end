import axios from 'axios';

async function requestFunction(path: string, body: any): Promise<{status: number, data?: any, message?:string}> {
  try {
    const { status, data } = await axios.post(path, body);

    return { status, data };

  } catch(e: any) {
    return { status: e.response.status, message: e.response.data.message };
  }
}

export default requestFunction;
