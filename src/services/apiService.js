const url = 'https://jsonplaceholder.typicode.com'

export const getTodos = async () => {
    try {
        const response = await fetch(`${url}/todos`);
        return response.json()
    } catch (err) {
        throw new Error('Data Missing :(');
    }
}

