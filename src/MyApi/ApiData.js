const axios = require('axios')

export default function ApiData(meth = "") {

    const baseUrl = "http://localhost:8080/users"

    switch (meth) {
        case 'post':
            axios.post(baseUrl)
            break;

        default:
            break;
    }

    const myfun = async () => {
        try {
            const response = axios.get("http://localhost:8080/users")
            return response.data
        }
        catch {

        }
    }

    return myfun()


}