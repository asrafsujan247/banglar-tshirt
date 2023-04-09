import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>Grandpa Money : {money}</p>
      <button onClick={() => setMoney(money + 1000)}>Send 1000tk</button>
      <Cousin>Ali</Cousin>
    </div>
  );
};

export default Uncle;
