import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthContextAPI = (props) => {
    const { children } = props
    const [Auth, setAuth] = useState(false)
    useEffect(() => {
        let token = localStorage.getItem("token")
        //console.log(token)
        if (token) {
            setAuth(true)
        }

    }, [])

    return (
        <AuthContext.Provider value={{ Auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )


}
export default AuthContextAPI