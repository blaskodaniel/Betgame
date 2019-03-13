module.exports = {
    'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
        serverUrl: "http://mokasfoci.hu",
        version: "0.1"
    } : {
        serverUrl: "http://mokasfoci.hu",
        version: "0.1"
    })
};