import { readdir, mkdir, copyFile } from 'fs/promises';
import { join } from 'path';

const copy = async () => {
    const folderPath = join(process.cwd(), 'files');
    const copyPath = join(process.cwd(), 'files_copy'); 

    const copyRecursive = async (src, dest) => {
        const entries = await readdir(src, {withFileTypes: true});

        for (const entry of entries) {
            const srcPath = join(src, entry.name);
            const destPath = join(dest, entry.name);

            if (entry.isDirectory()) {
                await mkdir(destPath);
                await copyRecursive(srcPath, destPath);
            } else {
                await copyFile(srcPath, destPath);
            }
        };
    };

    try {
        await mkdir(copyPath);
        await copyRecursive(folderPath, copyPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
    
};

await copy();
