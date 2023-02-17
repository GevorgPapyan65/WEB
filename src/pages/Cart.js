import { Add, Remove } from '@material-ui/icons'
import { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: '15px'})}

`

const Title = styled.h1`
    text-align: center;
    font-weight: 300;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background-color: ${(props)=>
        props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props)=>props.type === 'filled' && 'white'};
`

 const TopTexts = styled.div`
        ${mobile({display: 'none'})}
 `
 const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
 `

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}

`
const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span`

`

const ProductId = styled.span``

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`

const ProductSize = styled.span``
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`


const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount= styled.span`
    font-size: 20px;
    margin: 5px;
    ${mobile({margin: '5px 15px'})}

`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: '20px'})}
`


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '500'};
    font-size: ${props=>props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Cart = () => {

        
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>

            <TopTexts>
                <TopText>Shoping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>

            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4="/>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                            <ProductId><b>ID:</b> 93813718293</ProductId>
                            <ProductColor color='blue'/>
                            <ProductSize><b>SIZE:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Remove onClick={()=>{ 
                                if(counter > 0)
                                    setCounter(counter - 1)
                            }}/>
                            <ProductAmount>{counter}</ProductAmount>
                            <Add  onClick={()=> setCounter(counter + 1)}/>
                        </ProductAmountContainer>
                         <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                    
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://s.yimg.com/uu/api/res/1.2/0iEoxSPfvpekuYT_Vsx4IQ--~B/aD01MDA7dz01MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2022-06/759655b0-f7e9-11ec-bfba-8f68c11da809"/>
                        <Details>
                            <ProductName><b>Product:</b>AKK walking shoes</ProductName>
                            <ProductId><b>ID:</b> 62839103628</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>SIZE:</b> 40</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Remove onClick={()=>{
                                 if(counter2 > 0)
                                    setCounter2(counter2 - 1)
                            }}/>
                            <ProductAmount>{counter2}</ProductAmount>
                            <Add onClick={()=> setCounter2(counter2 + 1)}/>
                        </ProductAmountContainer>
                         <ProductPrice>$100</ProductPrice>
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
                <SummaryItem  type="total">
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

export default Cart
