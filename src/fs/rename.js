import { rename as renameAsync } from 'fs/promises';
import { join } from 'path';

const rename = async () => {
    const folder = join(process.cwd(), 'files');
    const wrongFile = join(folder, 'wrongFilename.txt');
    const properFile = join(folder, 'properFilename.md');

    try {
        await renameAsync(wrongFile, properFile);
    } catch (error) {
        throw new Error('FS operation failed');
    }    
};

await rename();