module.exports = {
    'Config': JSON.stringify(process.env.NODE_ENV === 'production' ? {
        serverUrl: "https://mokasfoci.hu",
        version: "0.1"
    } : {
        serverUrl: "https://mokasfoci.hu",
        version: "0.1"
    })
};