import axios from "axios";


const send_post_query = async (queryString) => {
    const baseURL = "http://localhost:7200/repositories/Ldac"
    const params = new URLSearchParams()
    params.append('query', queryString)
    const config = {
        "headers": {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': 'http://localhost:7200',
            'Accept': 'application/sparql-results+json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    await axios.post(baseURL, params, config).then((result) => {console.log(result)}).catch((err) => {console.log(err)})
}

export default {send_post_query}


