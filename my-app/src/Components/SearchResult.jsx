import React from 'react'
import styled from 'styled-components'

function SearchResult({data}) {
  return (
    <div>
       <FoodCardContainer>
        <FoodCards>
        {
            data?.map((food)=>(
                <FoodCard key={food.name}>
                    {food.text}
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
height:calc(100vh - 168px);
margin-top:10px;
border-radius:10px; 
`
const FoodCards=styled.div`
`
const FoodCard=styled.div`

`