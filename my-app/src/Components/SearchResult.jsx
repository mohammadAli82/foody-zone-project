import React from 'react'
import styled from 'styled-components'
import { BASE_URL, Button } from '../App'

function SearchResult({props}) {
  return (
    <div>
       <FoodCardContainer>
        <FoodCards>
        {
            props?.map(({image,name,text,price})=>(
                <FoodCard key={name}>
                <div className='food_Image'>
                  <img src={BASE_URL + image}/>
                </div>
                <div className='foo_info'>
                  <div className='info'>
                    <h3>{name}</h3>
                    <p>{text}</p>
                  </div>
                <Button>${price.toFixed(2)}</Button>
                </div>
                </FoodCard>
            ))
        }
        </FoodCards>
      </FoodCardContainer>
    </div>
  )
}

export default SearchResult

const FoodCardContainer=styled.section`
background-image: url("/images/food.jpg");
background-size: cover;
height:250vh;
border-radius:20px;

`
const FoodCards=styled.div`
display:flex;
flex-wrap:wrap;
row-gap:32px;
column-gap:32px;
justify-content:center;
padding-top:30px;
`
const FoodCard=styled.div`
color:white;
border:5px solid white;
border-radius:25px;
width:30%;
display:flex;
flex-wrap: wrap;
padding: 10px;
${'' /* justify-content: space-around; */}

.foo_info{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:end;
  h3{
  margin-top:10px;
  font-family: 'Josefin Sans', sans-serif;
  }
  p{
  margin-top:15px;
  font-family: 'Josefin Sans', sans-serif;
  }
}

`