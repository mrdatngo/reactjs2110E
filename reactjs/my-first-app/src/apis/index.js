
import axios from "axios"

const BASE_API = "http://localhost:8000"

const UserApi = {
    signIn: (data) => {
        return axios.post(`${BASE_API}/signin`, data).then(res => {
            return res.data
        })
    }
}


const StudentsApi = {
    listStudents: (params) => {
        return axios.get(`${BASE_API}/students?_page=${params._page}&_limit=${params._limit}&q=${params.q}`).then(res => {
            return { list: res.data, total: res.headers["x-total-count"] }
        })
    },
    addStudent: (params) => {
        return axios.post(`${BASE_API}/students`, params).then(res => {
            return res.data
        })
    }
}

export { UserApi, StudentsApi }