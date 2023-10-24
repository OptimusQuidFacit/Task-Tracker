import React from 'react'
import styled from 'styled-components'


const Wrapper= styled.div`
display: flex;
justify-content:space-around;
align-items:center;
width: 100%;
`
;
const Title= styled.h1`
color: teal;
`;
const Usertitle= styled.h3`
color:teal`

const Header = ({name}) => {
  return (
    <>
      <Wrapper>
      <Title>Task Tracker</Title>
      <Usertitle>Hello, {name}</Usertitle>
      </Wrapper>
    </>
  )
}

export default Header
