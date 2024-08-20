import http from 'http';
import corsAnywhere from 'cors-anywhere';

const host = '0.0.0.0';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [] // Allow all origins
}).listen(port, host, () => {
    console.log(`CORS Anywhere proxy running on ${host}:${port}`);
});