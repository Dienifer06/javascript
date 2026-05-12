import { useState } from "react"
import { loginUsuario } from "../../services/api"
import { useNavigate } from "react-router-dom"

export default function Login({setRole, setToken}){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    function decodeJWT(token){
        const base64 = token.split('.')[1]
        return JSON.parse(atob(base64.replace(/-/g, "+").replace(/_/g,"/"))) 
    }

    const handleLogin = async (e) =>{
        e.preventDefault()   //ação é cancelada antes de acontecer 

        const data = await loginUsuario(email,senha);

        if(data.access_token){
            try{
                setToken(data.access_token)
                localStorage.setItem("acess_token", data.access_token)

                
                const payload64 = decodeJWT(data.access_token)
                setRole(payload.role)
                localStorage.setItem("user_role", payload.role)
                setError("")
                useNavigate("/")


            }catch(err){
                console.error(err)
                setError("Erro ao processar token")
            }
        }else{
            setError(data.error || "Error np login")
        }

    };


    

    return(
        <main>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                placeholder="Digite seu emaill..."
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} required
                />

                <label htmlFor="senha">Senha:</label>
                <input type="password" 
                placeholder="Digite sua senha..."
                name="senha"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)} required
                />

                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}