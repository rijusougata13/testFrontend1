import React, { useState } from 'react';
import styled from 'styled-components';

const Matrix=()=>{
    const [ans,setAns]=useState("Ans Will Be Displayed Here");
    const ListofInput=["Gym","Office","Resturant","Store","Hospital"];
    const [arr,setArr]=useState([
        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [],        [],
        [], 
        [],        [],
        [],        [],
        [], 
       [],
       [], 
       [],
    ])
    const [housePos,setHousePos]=useState([{}])
    const addValue=(index)=>{
        const val = prompt('Type House:id/Gym/Office/Resturant/Store');
        setArr(arr=>{
            if(val){
            if(val.startsWith("House")){
                setHousePos(prev=>[
                    ...prev,
                    {
                        "x":Math.floor(index/5),
                        "y":index%5,
                        "name":val,
                        "Gym":100000,
                        "Office":10000,
                        "Resturant":10000,
                        "Store":10000,
                        "Hospital":10000,
                    }
                ])
                arr[index]=[...arr[index],val];
                arr[index]=[...new Set(arr[index])]
            }
            else if(ListofInput.indexOf(val)==-1){
                alert("You can only add House:id/Gym/Office/Resturant/Store/Hospital in each box")
            }
            else{
            arr[index]=[...arr[index],val];
            arr[index]=[...new Set(arr[index])]
             }
            }
              return [...arr];
        })  
    }
    const findDistance=(x1,y1,x2,y2)=>{
    const val=Math.floor(Math.hypot(x2-x1,y2-y1));
        return val;
}
    const findSol=()=>{
        setAns("Loading...")
        arr.map((value,index)=>{
            value.map(val=>{
                housePos.map((house,ind)=>{
                    setHousePos(prev=>{
                        prev[ind][val]=Math.min(house[val],findDistance(Math.floor(index/5),index%5,house.x,house.y))
                        return [...prev];
                    })
                })
            })
        });
        const finalArr=[];
        var sz=0;
        housePos.map(val=>{
            var tot=0;
            if(val.Gym)tot+=val.Gym;
            if(val.Office)tot+=val.Office;
            if(val.Resturant)tot+=val.Resturant;
            if(val.Store)tot+=val.Store;
            if(val.Hospital)tot+=val.Hospital;
            finalArr.push([val.name,tot]);
            sz+=1;
        })
        var mn=100000000;
        for(var p=1;p<sz;p++){
            if(finalArr[p][1]<mn){
                setAns(finalArr[p][0]);
                mn=finalArr[p][1];
            }
        }
    }
    return(
        <>
            <Wrapper> 
                <>
                {
                    arr.map((val,index)=>(
                        <Card onClick={e=>addValue(index)}>
                            {
                                val.map(value=>(
                                    <p>{value},</p>
                                ))
                            }
                        </Card>
                    ))
                }
                </>
               
            </Wrapper>
            <AnsWrapper>
                <p>{ans}</p>
                <button onClick={findSol}>Recommend!</button>
                </AnsWrapper>
        </>
    )
}
const AnsWrapper=styled.div`
    display:flex;
    justify-content:space-around;
    background:#78a37f;
    width:100%;
    padding:2rem 0;
`;
const Wrapper=styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:10px 10px;
    padding:2rem;
    width:70%;
`;

const Card=styled.div`
    width:150px;
    height:100px;
    background:rgba(134, 126, 126, 0.226);
    display:flex;
    justify-content:center;
    align-items:center;
    text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
`;
export default Matrix;