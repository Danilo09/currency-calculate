import Container  from '../Container'
import React from 'react'
import Logo from './Logo'
import Info from './Info'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav>
        <Container>
            <Logo />
            <Info />
        </Container>
    </nav>
  )
}

export default Navbar