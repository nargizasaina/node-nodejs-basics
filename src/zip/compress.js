import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'util';
import { join } from 'path';

const compress = async () => {
    const folderPath = join(process.cwd(), 'files');
    const file = join(folderPath, 'fileToCompress.txt'); 
    const pipe = promisify(pipeline);
    
    const gzip = createGzip();
    const source = createReadStream(file);
    const destination = createWriteStream(join(folderPath, 'archive.gz'));

    try {
        await pipe(source, gzip, destination);
        console.log('File is compressed into archive.gz');
    } catch (err) {
        console.error('Error while compressing:', err.message);
    }
};

await compress();