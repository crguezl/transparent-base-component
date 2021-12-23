module.exports = { // set env var
    publicPath: process.env.NODE_ENV === 'production'
    ? '/transparent-base-component/'
    : '/' 
}