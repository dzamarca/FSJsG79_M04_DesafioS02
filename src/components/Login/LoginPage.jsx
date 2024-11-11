import { Button, Form } from "react-bootstrap"
import "./login.css"

const LoginPage = () => {
    return (
        <>
            <div className="boxRegistrer">
                <div className="boxForm">
                    <Form>
                        <p className="titulo">Login</p>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="mail@dominio.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
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