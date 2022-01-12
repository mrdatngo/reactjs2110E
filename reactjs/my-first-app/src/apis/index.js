
import axios from "axios"

const BASE_API = "http://localhost:8000"

const UserApi = {
    signIn: (data) => {
        return axios.post(`${BASE_API}/signin`, data).then(res => {
            console.log(res)
            return res.data
        })
    }
}


const StudentsApi = {
    listStudents: () => {
        return axios.get(`${BASE_API}/students`).then(res => {
            return res.data
        })
    }
}

export { UserApi, StudentsApi }