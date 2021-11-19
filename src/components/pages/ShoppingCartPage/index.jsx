import { useEffect, useState, useContext } from "react";
import "./styles.css";
import PetsOrderContext from "../../../context/petsOrderContext";
import { OrderItem } from "../../OrderItem";
import { Button } from "../../Button";

export const ShoppingCartPage = () => {


  const [order, setOrder] = useState([]);

  const globalState = useContext(PetsOrderContext);

  useEffect(
    () => {
      setOrder(globalState.order);
    }, [globalState]
  )

  return (
    <div className="pets-page">
      <h1 className="pets-title">my Shopping cart</h1>
      <div className="order"> {
        order.map ((item) => <OrderItem image={item.image} id={item.id} name={item.name} age={item.age}/>)
      }
      {
        order.length === 0 && <p> Nothing is here yet</p>
      }

      </div>
      <Button text="checkout" type="primary"/>
    </div>
  );
};
