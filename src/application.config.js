module.exports = {
    'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
        serverUrl: "http://mokasfoci.hu"
    } : {
        serverUrl: "http://localhost:3000"
    })
}