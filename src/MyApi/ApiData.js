import axios from "axios"

export default function ApiData(meth, data, userParam) {

    console.log('in ApiData');
    console.log('meth is: ', meth);
    console.log('data is: ', data);

    const baseUrl = "http://localhost:8080/users"

    switch (meth) {
        case 'post':
            console.log('in post');
            axios.post(baseUrl, data)
                .then((res) => (console.log('res data: ', res.data)))
                .catch((err) => console.log('ERROR: ', err.message))

            return "User added successfully"

        case 'put':
            console.log('in put');
            console.log('base + username: ', baseUrl);
            axios.put(baseUrl + "/" + userParam, data)
                .then((res) => (console.log('res data: ', res.data)))
                .catch((err) => console.log('ERROR: ', err.message))

            return "User updated successfully"

        case 'delete':
            console.log('in delete');
            axios.delete(baseUrl + "/" + userParam, data)
                .then((res) => (console.log('res data: ', res.data)))
                .catch((err) => console.log('ERROR: ', err.message))

            return "User deleted successfully"

        default:
            break;
    }



    return "Some Error Occurred"


}