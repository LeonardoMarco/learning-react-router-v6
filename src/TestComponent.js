import React from 'react'
import { useLocation, useParams } from 'react-router'

// import { Container } from './styles';

function TestComponent(props) {
  let location = useLocation()
  let urlParams = useParams()

  console.log(location)
  console.log(urlParams)

  return (
    <>
      <h1>{urlParams.slug}</h1>
      <h1>{urlParams.destination}</h1>
      <h1>{urlParams.search}</h1>
    </>
  )
}

export default TestComponent
