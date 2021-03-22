const listAll = async (signal) => {
    try {
        let response = await fetch('/api/products', {
            method: 'GET',
            signal: signal
        })
        return await response.json()
    } catch (err) {
        console.log(err.message);
    }
}

const read = async (params, signal) => {
    try {
        let response = await fetch('/api/products/' + params.id, {
            method: 'GET',
            signal: signal,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        return await response.json();
    } catch (err) {
        console.log(err.message)
    }
}