import { spawn } from 'child_process';
import { stdin } from 'process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('close', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
