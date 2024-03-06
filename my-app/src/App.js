import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResult";

export const BASE_URL = "http://localhost:9200";
function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdData, setFilterdData] = useState();
  const [selectbtn, setSelectbtn] = useState("");
  const [initialValue, setUpdatedValue] = useState(0);
  const [cartItems, setCartItems] = useState({});

  const toggleCart = (itemName) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[itemName]) {
        delete updatedItems[itemName];
        setUpdatedValue((prevValue) => prevValue - 1);
      } else {
        updatedItems[itemName] = true;
        setUpdatedValue((prevValue) => prevValue + 1);
      }
      return updatedItems;
    });
  };

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const respone = await fetch(BASE_URL);
        const json = await respone.json();
        setData(json);
        setFilterdData(json);
        setLoading(false);
      } catch (error) {
        setError("404 error fetch data");
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);
  console.log(selectbtn);

  const selectButton = (type) => {
    if (type === "all") {
      setFilterdData(data);
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterdData(filter);
    setSelectbtn(type);
  };

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") {
      setFilterdData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterdData(filter);
  };

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <h1>
            <font style={{ color: "black" }}>F</font>
            <font style={{ color: "red" }}>oo</font>
            <font style={{ color: "black" }}>dy Z</font>
            <font style={{ color: "red" }}>o</font>
            <font style={{ color: "red" }}>ne</font>
          </h1>
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="search food" />
        </div>
        <div className="image-container">
          <button>{initialValue}</button>
          <Image src="/images/shopping.png" alt="Logo" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((value) => (
          <Button key={value.name} onClick={() => selectButton(value.type)}>
            {value.name}
          </Button>
        ))}
      </FilterContainer>
      <SearchResult
        props={filterdData}
        cartItems={cartItems}
        toggleCart={toggleCart}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  display: flex;
  padding: 16px;

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
  }

  .logo h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    color: white;
    margin-right: 20px;
  }

  .search,
  .image-container {
    display: flex;
    align-items: center;
  }

  .search input {
    border-radius: 5px;
    height: 7vh;
    background-color: transparent;
    border: 3px solid red;
    font-size: 16px;
    padding: 0 10px;
    color: white;
    &::placeholder {
      color: black;
    }
    margin-right: 20px;
  }

  .image-container {
    position: relative;
  }

  .image-container button {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(
      -65%,
      -30%
    );
    background: none;
    border: none;
    font-size: 22px;
    color: white;
    cursor: pointer;
    z-index: 1;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 30px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  margin-top: 12px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;
