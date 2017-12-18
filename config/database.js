if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: 'mongodb://al:kn5659@ds159926.mlab.com:59926/vidjot-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}