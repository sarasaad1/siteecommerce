import React from 'react'
import styled from 'styled-components'
import Announcement from '../composants/Announcement'
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import Nouveautes from '../composants/Nouveautes'
import Products from '../composants/Products'
import { useLocation } from "react-router";
import { useState } from "react";
import mobile from '../responsive';


const Container = styled.div`
  
`
const Title = styled.h2`
   margin: 20px;
`
const FiltreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filtre = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 10px", display:"flex",flexDirection:"column" })}
`
const FiltreText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px", fontSize: "15px"})}
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px"})}  
`
const Option = styled.option`
`

export default function ListeProduits() {
  const Lieu = useLocation();
  const categorie = Lieu.pathname.split("/")[2];
  const [sort, setSort] = useState("les plus récents");
  const [filtre, setFiltres] = useState({});
 console.log(filtre);
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{categorie}</Title>
        <FiltreContainer>
            <Filtre>
               <Select name="color" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Color </Option>
                  <Option>Blanc</Option>
                  <Option>Noir</Option>
                  <Option>Rouge</Option>
                  <Option>Bleu</Option>
                  <Option>Jaune</Option>
                  <Option>Vert</Option>
                </Select>
               <Select name="size" onChange={(e) => setFiltres({...filtre,[e.target.name]: e.target.value})}> 
                  <Option disabled selected> Size</Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                </Select>
            </Filtre>
            <Filtre>
            
               <Select onChange={(e) => setSort(e.target.value)}> 
                  <Option value="plusrecent">les plus récents</Option>
                  <Option value="Pbe">Pris bas à élevé</Option>
                  <Option value="Pe">Pris élevé à bas</Option>
               </Select>
            </Filtre>
        </FiltreContainer>
        <Products cat={categorie} filtre={filtre} sort={sort}/>
        <Nouveautes/>
        <Footer/>
    </Container>
  )
}
