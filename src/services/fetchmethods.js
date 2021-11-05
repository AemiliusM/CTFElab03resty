//this will have all the methods get, post, put, patch, delete.
export const fetchMethods = async (method, url, body = null) => {
    const response = await fetch(url, 
        { method,
            [body ? 'headers' : {
                'Content-Type': 'application/json',
            }]: null,
            [body ? body : body] : null,
        });
        console.log('METHOD', response.json)
    return response.json()
}