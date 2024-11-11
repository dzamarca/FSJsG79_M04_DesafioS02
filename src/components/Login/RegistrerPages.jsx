import { Button, Form } from "react-bootstrap"
import "./login.css"
const RegistrerPages = () => {
  return (
    <>
            <div className="boxRegistrer">
                <div className="boxForm">
                    <Form>
                        <p className="titulo">Registro</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="mail@dominio.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirmar Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
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