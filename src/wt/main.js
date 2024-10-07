import { Worker } from 'worker_threads';
import os from 'os';

const cpus = os.cpus().length;

const performCalculations = async () => {
    const workers = [];
    const results = [];
    for (let i = 0; i < cpus; i++) {
        const n =  10 + i;
        workers.push(
            new Promise((resolve) => {
                const worker = new Worker('./worker.js', {
                  workerData: n,
                });
                worker.on('message', (result) => {
                    results[i] = {status: 'resolved', data: result};
                    resolve();
                });
                worker.on('error', () => {
                    results[i] = {status: 'error', data: null};
                    resolve();
                });
                worker.on('exit', (code) => {
                    if (code !== 0)
                    results[i] = {status: 'error', data: null};
                    resolve();
                });
            })
        )
    }

    Promise.all(workers).then(() => {
        console.log(results);
    });
};

await performCalculations();