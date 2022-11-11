import {ListGroup} from 'react-bootstrap';
import "../BakeryItem.css"; 

export default function BakeryCart(props) {
    const createEntry = (cartObject) => {
        return (
            <ListGroup.Item>
                {cartObject.count}x {cartObject.name}
            </ListGroup.Item>
        )
    }
    return <ListGroup>{props.cartList.map(createEntry)}</ListGroup>
}