import axios from "axios"

export default async function ApiData(meth, data, userParam = "") {

    const baseUrl = "http://localhost:8080/users"

    switch (meth) {
        case 'post':
            try {
                const reso = await axios.post(baseUrl, data);
                const message = reso.data.message !== undefined ? "User alredy exists" : "User added successfully";
                return message;

            }
            catch (err) {
                return "Some error occured";
            }

        case 'put':
            console.log('in put');
            console.log('base + username: ', baseUrl);
            axios.put(baseUrl + "/" + userParam, data)
                .then((res) => (console.log('res data: ', res.data)))
                .catch((err) => console.log('ERROR: ', err.message))

            return "User updated successfully"

        case 'delete':
            console.log('in delete');
            try {
                await axios.delete(baseUrl + "/" + userParam, data)
                    .then((res) => (console.log('res data: ', res.data)))
                    .catch((err) => console.log('ERROR: ', err.message))

                return "User deleted successfully"
            }
            catch (err) {
                return err.message
            }

        default:
            break;
    }

    return "Some Error Occurred"
}