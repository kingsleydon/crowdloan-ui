import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  position: fixed;
  height: 60px;
  width: 100%;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.bl01};
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1);
`

const Navbar: React.FC = () => {
  return <NavbarWrapper>1</NavbarWrapper>
}

export default Navbar
