import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResult";

export const BASE_URL = "https://express-server-4hto.onrender.com";
function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdData, setFilterdData] = useState();
  const [selectbtn, setSelectbtn] = useState("");

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
            F<font style={{ color: "red" }}>oo</font>dy Z
            <font style={{ color: "red" }}>o</font>ne
          </h1>
        </div>
        <div className="search">
          <input onChange={searchFood} placeholder="search food" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((value) => (
          <Button key={value.name} onClick={() => selectButton(value.type)}>
            {value.name}
          </Button>
        ))}
      </FilterContainer>
      <SearchResult props={filterdData} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  ${"" /* background:gray; */}
  display:flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    color: white;
    letter-spacing: ;
  }

  .search {
    input {
      border-radius: 5px;
      height: 7vh;
      background-color: transparent;
      border: 3px solid red;
      font-size: 16px;
      padding: 0 10px;
      color: white;
      &::placeholder {
        color: white;
      }
    }
  }
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 30px;
`;
export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  margin-top: 15px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;
