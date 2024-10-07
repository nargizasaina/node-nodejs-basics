import { readdir } from 'fs/promises';
import { join } from 'path';

const list = async () => {
    const folder = join(process.cwd(), 'files');

    try {
        const files = await readdir(folder);
        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();