import { createContext, useState } from "react";
import { loginRequest } from "../services/AuthService";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    const { success, user } = await loginRequest(username, password)
    setUser(success ? user : null)

    return success
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext