const parseEnv = () => {
    const prefix = 'RSS_';
    const variables = Object
            .keys(process.env)
            .filter(key => key.startsWith(prefix))
            .map(variable => `${variable}=${process.env[variable]}`);
    console.log(variables.join('; '));
};

parseEnv();