import { unlink } from 'fs/promises';
import { join } from 'path';

const remove = async () => {
    const folder = join(process.cwd(), 'files');
    const file = join(folder, 'fileToRemove.txt');

    try {
        await unlink(file);
    } catch (error) {
        throw new Error('FS operation failed');
    }    
};

await remove();