import axios from "axios";
import http from 'https'

const server = http.createServer(requestHandler);
const HOSTNAME = 'localhost';
const PORT = '400';

server.listen(PORT, HOSTNAME, () => console.log("server is running"))
async function requestHandler(req, res) {
    if (req.url === '/short') {
        const url = await getShortened();
        console.log(url)
    }
}

// const url = ref('');
async function getShortened() {
    const params = new URLSearchParams();
params.append('url', 'https://www.google.com');
    try {
        const response = await axios.post(`https://cleanuri.com/api/v1/shorten`, params)
        const data = await response.data
        return data.result_url;
    } catch (error) {
        // console.error('Error occurred:', error);
        return error;
    }
    
      
        // url.value = response.data.result_url; // Assuming result_url is the property containing the shortened URL
  }
//   (async() => {
//     // const result_url =  
//     const url = await getShortened();
//     console.log(url);
//   })()
export default getShortened;