import { readFile } from 'fs/promises';
import { join } from 'path';

const read = async () => {
    const folder = join(process.cwd(), 'files');
    const file = join(folder, 'fileToRead.txt');
    
    try {
        const fileContent  = await readFile(file, 'utf-8');
        console.log(fileContent);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();