/// dev.js don't commit this!!!
module.exports = {
    database: {
        mlab: {
            URI: process.env.MLAB_URI
        }
    },
    login: {
        google: {
            ClientId: process.env.GOOGLE_CLIENT_ID,
            ClientSecret: process.env.GOOGLE_CLIENT_SECRET,
            CallBackURL: "https://leslyemaily.herokuapp.com"
        }
    },
    server: {
        cookieKey: process.env.COOKIE_KEY
    }  
   
}

