
import { promises as fs, read } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd()+'/src/app/api/data.json');

const readFile = async () => {
  const fileContent = await fs.readFile(dataFilePath, 'utf8');
  const data = JSON.parse(fileContent);
  return data;
};

const writeFile = async (data) => {
  await fs.writeFile(dataFilePath, JSON.stringify(data));
}

export async function GET(req) {
  const data = await readFile();

  return Response.json(data)
}

export async function PUT(req) {
  try {
    const res = await req.json();

    const data = await readFile();
    
    const index = data.medias.findIndex((item) => item.id === res.id);
    if (index === -1) {
      return Response.error({message: 'NotFound'})
    }
    data.medias[index] = res;
    await writeFile(data);
    return Response.json({data});
  } catch (error) {
    return Response.error({message: error.message})

  }
}