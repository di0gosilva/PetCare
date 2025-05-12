import axios from 'axios'

const API_URL = "https://681b99d717018fe5057c284c.mockapi.io/users"

/*
user = usuario 1
password = password 1
*/

export const loginRequest = async (username, password) => {
  try {
    const res = await axios.get(API_URL)
    const users = res.data

    const user = users.find((user) => user.username === username && user.password === password)

    return user ? { success: true, user } : { sucess: false }
  } catch (error) {
    console.log("Erro de autenticação", error)
    return { success: false }
  }
}