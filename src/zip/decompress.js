import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'util';
import { join } from 'path';

const decompress = async () => {
    const folderPath = join(process.cwd(), 'files');
    const file = join(folderPath, 'fileToCompress.txt'); 
    const pipe = promisify(pipeline);
    
    const gunzip = createGunzip();
    const destination = createWriteStream(file);
    const archive = createReadStream(join(folderPath, 'archive.gz'));

    try {
        await pipe(archive, gunzip, destination);
        console.log('File is decompressed');
    } catch (err) {
        console.error('Error while decompressing:', err.message);
    }
};

await decompress();