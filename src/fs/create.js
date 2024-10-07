import { writeFile, stat } from 'fs/promises';
import { join } from 'path';

const create = async () => {
    const folderPath = join(process.cwd(), 'files');
    const name = join(folderPath, 'fresh.txt');

    try {
        await stat(name);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(name, 'I am fresh and young', 'utf-8');
        } else {
            throw new Error('FS operation failed');
        }
    }    
};

await create();