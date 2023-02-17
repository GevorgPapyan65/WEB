import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import Register from "../pages/Register.js"
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Product from './Product'



const Conatainer = styled.div`
`


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: '10px 0px'})}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`
const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})}
    
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fotnSize: '24px'})}
    
`


const Center = styled.div`
   flex: 1;
   text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: 'center'})}
`



const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px', marginLeft: '10px'})}
`

const Navbar = () => {
  return (
    <Conatainer>
        <Wrapper>
           
            <Left>
                <Language>EN</Language>
                 <SearchContainer>
                    <Input placeholder='Search' />
                    <Search style={{color:"grey", fontSize:"16px"}} />
                </SearchContainer>
            </Left>

            <Center><Logo><Link to='/Home'>Lama.</Link></Logo></Center>
            <Right>
                <MenuItem><Link to='/REGISTER'>REGISTER</Link></MenuItem>
                <MenuItem ><Link to='/SIGN IN'>SIGN IN</Link></MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <Link to='/Product'><ShoppingCartOutlined /></Link>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Conatainer>
  )
}

export default Navbar

