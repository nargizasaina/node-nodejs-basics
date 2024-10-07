const parseArgs = () => {
    const args = process.argv.slice(2);

    const array = [];
    for (let i = 0; i < args.length; i++) {
        array.push(`${args[i].slice(2)} is ${args[i+1]}`);
        i++;
    }
    console.log(array.join(', '));
};

parseArgs();