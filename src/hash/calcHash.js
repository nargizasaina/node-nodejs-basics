import {createReadStream} from 'fs';
import { createHash } from 'node:crypto';
import { join } from 'path';
  
const calculateHash = async () => {
    const folderPath = join(process.cwd(), 'files');
    const file = join(folderPath, 'fileToCalculateHashFor.txt'); 
    const hash = createHash('sha256');

    const input = createReadStream(file);

    input.on('readable', () => {
        const data = input.read();
        if (data)
            hash.update(data);
        else {
            console.log(`${hash.digest('hex')} ${file}`);
        }
    });
};

await calculateHash();