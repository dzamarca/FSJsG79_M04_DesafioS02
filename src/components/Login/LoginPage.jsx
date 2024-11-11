import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./login.css"

const LoginPage = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMail, setErrorMail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [mensajePassword, setMenasjePassword] = useState("")

    const validaMail = () => {
        if (mail === "") {
            setErrorMail(true)
            return
        }
        setErrorMail(false)
    }
    const validaPassword = () => {
        if (password === "") {
            setErrorPassword(true)
            setMenasjePassword("Debes ingresar un password")
            return
        }
        
        if (password.length < 6) {
            setErrorPassword(true)
            setMenasjePassword("Password debe tener 6 caracteres o más")
            return
        }
        setErrorPassword(false)
        setMenasjePassword("")
        if(errorMail ==false && errorPassword == false){
            alert("Todos los datos están correctos")
        }

    }

    const validarInput = (e) => {
        e.preventDefault()
        validaMail()
        validaPassword()
    }

    return (
        <>
            <div className="boxRegistrer">
                <div className="boxForm">
                    <Form onSubmit={validarInput}>
                        <p className="titulo">Login</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="mail@dominio.com"
                                onChange={(e) => setMail(e.target.value)}
                            />
                            {errorMail?<p className="error">Debes ingresar un mail</p>:null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errorPassword?<p className="error">{mensajePassword}</p>:null}
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default LoginPage