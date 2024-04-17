import React from "react";
import styled from "styled-components";
import { BASE_URL, Button, ButtonWrapper } from "../App";

function SearchResult({ props, cartItems, toggleCart }) {
  console.log(props);

  return (
    <div>
      <FoodCardContainer>
        <FoodCards>
          {props?.map(({ image, name, text, price }) => (
            <FoodCard key={name}>
              <div className="food_Image">
                <img src={BASE_URL + image} alt="lg" />
              </div>
              <div className="foo_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <ButtonWrapper>
                  <Button>${price.toFixed(2)}</Button>
                  <Button onClick={() => toggleCart(name)}>
                    {cartItems[name] ? "Remove Cart" : "Add to Cart"}
                  </Button>
                </ButtonWrapper>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </FoodCardContainer>
      <Footer>
        <h3>©2024 Mohammad Ali All Rights Reserved</h3>
      </Footer>
    </div>
  );
}

export default SearchResult;

const FoodCardContainer = styled.section`
  background-image: url("/images/food.jpg");
  background-size: cover;
  height: 150vh;
  border-radius: 20px;
`;
const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 32px;
  justify-content: center;
  padding-top: 30px;
`;
const FoodCard = styled.div`
  color: white;
  border: 5px solid white;
  border-radius: 25px;
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  ${"" /* justify-content: space-around; */}

  .foo_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
    p {
      margin-top: 15px;
      font-family: "Josefin Sans", sans-serif;
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 10vh;
  color: white;
  h3 {
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    line-height: 65px;
  }
`;
