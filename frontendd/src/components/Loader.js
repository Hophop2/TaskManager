import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import { Container } from '../styles/loginPageStyle'


const Loader = () => {
  return (
    <Container><ThreeCircles
    height="100"
    width="100"
    color="#9816DC"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  /></Container>
  )
}

export default Loader