import {createWriteStream} from 'fs';
import { join } from 'path';
import { stdin } from 'node:process';

const write = async () => {
    const folderPath = join(process.cwd(), 'files');
    const file = join(folderPath, 'fileToWrite.txt'); 

    const writable = createWriteStream(file, {encoding: 'utf-8'});
    stdin.setEncoding('utf8');
    stdin.pipe(writable);
    
    writable.on('error', (err) => {
        console.error('Ошибка при записи в файл:', err.message);
    });

    console.log("Hi! Enter smth and press 'Enter'");
};

await write();