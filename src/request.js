const getResponse = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(response.ok) {
        // console.log(response)
        const data = await response.json()
        return data
    }else {
        throw new Error('throw new error')
    }
}

const getSinglePost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(response.ok) {
        const data = await response.json()
        return data
    }else {
        throw new Error('an error occurred')
    }
}

const addPostRequest = async (data) => {
    // Default options are marked with *
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded'
        },        
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    if(response.ok) {
        const data = await response.json()
        return data
    }else {
        throw new Error('an error has taken place!')
    }
}

const deletePostRequest = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    });

    if(response.ok) {
        console.log(response)
        const data = await response.json()
        return data
    }else {
        throw new Error('an error has taken place!')
    }
}


export {getSinglePost, addPostRequest, deletePostRequest, getResponse as default}