import styled from "styled-components";

export const NavbarStyle = styled.nav`
padding: .5em 10em;
display: flex;
justify-content: space-between;
align-items: center ;
box-shadow: 0 1px 1px grey;
  h1{
    font-size: 2em;
    color: #2FA4FF;
  }
  ul{
    list-style: none;
    display: flex;
    align-items: center;
    li{
      &:not(:last-child){
        margin-right: 3em;
      }
      a{
        &:link, &:visited{
          text-decoration:none ;
          color: #0E185F;
        }
      }
    }
  }
`