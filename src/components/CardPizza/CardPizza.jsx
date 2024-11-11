import { Card, Button } from "react-bootstrap"
import { setearValor } from '../../assets/utils/funciones.js'
import './CardPizza.css'

const CardPizza = ({ name, price, ingredients, img }) => {

  const ingredientes = ingredients.join(", ");

  return (
    <Card className="card mt-3"  bg="light">
      <Card.Header>
        <Card.Img variant="top" src={img} />
        <p className="tituloCard mb-0">Pizza {name}</p>
      </Card.Header>
      <Card.Body >
        <p className="mb-2">Ingredientes:</p>
        <p className="m-0">🍕{ingredientes}</p>
      </Card.Body>
      <Card.Footer>
        <p className="precio">Precio ${setearValor(price)}</p>
        <div className="d-flex justify-content-evenly">
          <Button variant="outline-dark">Ver Más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default CardPizza