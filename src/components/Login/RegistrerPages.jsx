import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import "./login.css"
const RegistrerPages = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [errorMail, setErrorMail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [mensajePassword, setMenasjePassword] = useState("")
    const [errorPassword2, setErrorPassword2] = useState(false)
    const [mensajePassword2, setMenasjePassword2] = useState("")

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
    }
    const validaPassword2 = () => {
        if (password2 === "") {
            setErrorPassword2(true)
            setMenasjePassword2("Debes ingresar un password")
            return
        }

        if (password != password2) {
            setErrorPassword2(true)
            setMenasjePassword2("Los password no son inguales")
            return
        }

        setErrorPassword2(false)
        setMenasjePassword2("")
        if(errorMail ==false && errorPassword == false){
            alert("Todos los datos están correctos")
        }
    }

    const mensajeErroc = ()=>{
        
    }

    const validarInput = (e) => {
        e.preventDefault()
        validaMail()
        validaPassword()
        validaPassword2()
    }
    return (
        <>
            <div className="boxRegistrer">
                <div className="boxForm">
                    <Form onSubmit={validarInput}>
                        <p className="titulo">Registro</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="mail@dominio.com"
                                onChange={(e) => setMail(e.target.value)}
                            />
                            {errorMail ? <p className="error">Debes ingresar un mail</p> : null}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errorPassword ? <p className="error">{mensajePassword}</p> : null}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirmar Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="******"
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                            {errorPassword2 ? <p className="error">{mensajePassword2}</p> : null}

                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Registro
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default RegistrerPages