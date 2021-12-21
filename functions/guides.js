exports.handler = async (event,context) => {
    const guides = [
        { title: 'Beat All Zelda Bosses Like a Boss', author: 'mario' },
        { title: 'Mario Kart Shortcuts', author: 'luigi' },
        { title: 'Ultimate Street Fighter Guide', author: 'chun-li' },
    ]

    if(context.clientContext.user){
        return {
            statusCode: 200,
            body: JSON.stringify(guides)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({ msg: 'ah,ah,ah, you must be logged in to see this!' })
    }
    
}