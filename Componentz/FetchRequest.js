

export const apiFetchRequest = (url) => {
    return fetch(input = url)
        .then((Response) => Response.json())
        .catch((eror) => 'error')
}