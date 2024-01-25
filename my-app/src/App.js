import styled from "styled-components";
import "./App.css";
import { useEffect, useState } from "react";
import SearchResult from "./Components/SearchResult";


export const BASE_URL="http://localhost:9200"

function App() {
  const [data,setData]=useState();
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const  fetchFoodData=async()=>{
      setLoading(true)
      try {
        const respone=await fetch(BASE_URL)
        const json=await respone.json();
        setData(json);
        setLoading(false)
      } catch (error) {
        setError("404 error fetch data");
      }
    }
    fetchFoodData();  
  },[])

  console.log(data)

  if(error) return <div>{error}</div>
  if(loading) return <div>Loading</div>

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <h1>F<font style={{color:"red"}}>oo</font>dy
          Z<font style={{color:"red"}}>o</font>ne
          </h1>
        </div>
        <div className="search">
          <input 
            placeholder="search food"
          />
        </div>
      </TopContainer>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <SearchResult props={data}/>
    </Container>
  );
}

export default App;

const Container=styled.div`
max-width:1200px;
margin:0 auto;


`
const TopContainer=styled.div`
${'' /* background:gray; */}
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;

h1{
  font-family: 'Bebas Neue', sans-serif;
  font-size:40px;
  color:white;
  letter-spacing:
}

.search{
  
input{
  border-radius:5px;
  height:7vh;
  background-color:transparent;
  border: 3px solid red;
  font-size:16px;
  padding: 0 10px;
  color:white;
}
}
`
const FilterContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:12px;
padding-bottom:30px;
`
export const Button=styled.button`
background: #ff4343;
border-radius:5px;
padding:6px 12px;
margin-top:15px;
border:none;
color:white;
`

