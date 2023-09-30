import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWQ4YzgxMjcwZWE4MTg2YTE3OWM2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTMzNjMwOCwiZXhwIjoxNjgxNTk1NTA4fQ.QuTZJJ5x-dZGd6ztt0DoB5HrtaMipWs__yXu7sVil44"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
    
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` }
})