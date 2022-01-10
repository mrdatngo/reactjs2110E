
import axios from "axios"

const BASE_API = "http://localhost:8000"

const UserApi = {
    signIn: () => {
        return axios.post(`${BASE_API}/signin`, {
            "email": "admin@gmail.com",
            "password": "123456"
        })
    }
}

export { UserApi }