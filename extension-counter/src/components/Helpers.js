export const getRepository = (owner, repository) => {
    return fetch(`https://api.github.com/repos/${owner}/${repository}/git/trees/master`)
        .then((res) => res.json())
        .then((json) => {
            return json
            console.log('json', json);
        })
}