import {createReadStream} from 'fs';
import { join } from 'path';
import { stdout } from 'node:process';

const read = async () => {
    const folderPath = join(process.cwd(), 'files');
    const file = join(folderPath, 'fileToRead.txt'); 

    const readable = createReadStream(file, {encoding: 'utf-8'});
    readable.pipe(stdout);
};

await read();