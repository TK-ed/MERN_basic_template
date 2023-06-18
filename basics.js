// importing core modules
import http from 'http'
import os from 'os'
import axios from 'axios'

// logs
console.log(os.version())
console.log(http.STATUS_CODES);

// http return codes
// 1** => Hold on
// 2** => Here you go ( Success )
// 3** => Go away ( Security involved )
// 4** => You fucked up
// 5** => I fucked up

// fetching public api's
// 1) using fetch
const link = "https://catfact.ninja/fact"
try {
    const response = await fetch(link)
    const result = await response.text()
    console.log(result);
} catch (err) {
    console.log(err);    
}

// 2) using axios
const url = 'https://www.boredapi.com/api/activity'
try {
    const response = await axios.get(url);
    // res.json(response);
    console.log(response.data);
} catch (error) {
    console.log(error);
}