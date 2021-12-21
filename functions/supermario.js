exports.handler = async () => {
    console.log('fun ran')

    const data = { name: 'mario',age: 25, job: 'plumber' }

    //return response to browser

    return{
        statusCode: 200,
        body: JSON.stringify(data)
    }
}