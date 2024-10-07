import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, String(chunk).split('').reverse().join(''));
        }
    });

    stdin.setEncoding('utf8');
    stdin.pipe(transform).pipe(stdout);
    
    transform.on('error', (err) => {
        console.error('Error in transforming stream:', err.message);
    });

    console.log("Hi! Enter smth and press 'Enter'");
};

await transform();