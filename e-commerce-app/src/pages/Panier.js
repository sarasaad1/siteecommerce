import React from 'react'
import styled from 'styled-components'
import Announcement from '../composants/Announcement'
import Footer from '../composants/Footer'
import Navbar from '../composants/Navbar'
import { Add, FavoriteRounded, Remove, ShoppingCartRounded } from '@material-ui/icons'
import mobile from '../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
   padding: 20px;   
   ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
   font-weight: 600;
   text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;   

`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;border-radius: 20px;
  border: ${(props) => props.type === "check" && "none"};
  background-color: ${(props) =>props.type === "check" ? "black" : "transparent"};
  color: ${(props) => props.type === "check" && "white"};
  border-radius: 20px;
  &:hover{
    background-color: ${(props) =>props.type === "check" ? "#282828" : "#E0E0E0"};
    }     
`
const TopTexts = styled.div`
     ${mobile({ display: "none" })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F8F8F8	;
  ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;  
  margin-left: 110 px;
  
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;  
  ${mobile({ marginTop:"20px" })}
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 222px;
`

const Hr = styled.hr`
  background-color: white;
  border: none;
  height: 3px;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  background-color: white;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #101010;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  &:hover{
    background-color: #282828;
    }
`;


export default function Panier() {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
         <Title> Ur BAG </Title>
         <Top>
             <TopButton> Continue Shopping</TopButton>
             <TopTexts>
                <ShoppingCartRounded />           
                <TopText>Shopping Bag(4)</TopText>
                <FavoriteRounded style={{marginLeft: "20px"}}/>
                <TopText>Your Wishlist (2)</TopText>
             </TopTexts>
             <TopButton type="check"> Check out</TopButton>
         </Top>
         <Bottom>
         <Info>
            <Product>
              <ProductDetail>
                <Image src="2.jfif" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Capuche JORDAN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> S
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <Remove style={{cursor: "pointer"}} />
                  <ProductAmount>2</ProductAmount>
                <Add style={{cursor: "pointer"}}/>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="1.jfif" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Pantalon JORDAN
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <Remove style={{cursor: "pointer"}}/>
                  <ProductAmount>1</ProductAmount>
                  <Add style={{cursor: "pointer"}}/>
                </ProductAmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
         </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}
