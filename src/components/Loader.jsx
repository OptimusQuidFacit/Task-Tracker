import React from 'react'
import styled from 'styled-components'


const Wrapper=styled.div`
    align-items: center;
    justify-content:center;
    font-weight:bold;
    text-align:center;
`

const Loader = () => {
  return (
   <Wrapper>
   Loading Tasks...
   </Wrapper>
  )
}

export default Loader