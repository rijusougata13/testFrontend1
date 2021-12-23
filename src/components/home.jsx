import React, { useState } from 'react';
import styled from 'styled-components';
import Matrix from './matrix';

const Home=()=>{
    const [ans,setAns]=useState("Loading...")
    return(
        <>
        <Wrapper>
            <h2>House Recommendation</h2>
            <p>You can only add House:id/Gym/Office/Resturant/Store/Hospital in each box</p>
            <Matrix/>
           
        </Wrapper>
        </>
    )
}


const Wrapper=styled.div`
    height:100vh;
    padding:5rem 1rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-direction:column;
`;
export default Home;