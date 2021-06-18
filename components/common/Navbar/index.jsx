import { Flex } from '../../Containers'
import { LogoIcon, NavContainer, NavItem, StyledNav, Triangle } from './styles'
import Link from 'next/link'

const Navbar = () => {
    return (
        <NavContainer>
            <StyledNav>
                <div>
                    <Link href='/'>
                        <LogoIcon src="/images/icone_vermelho.svg" alt="" />
                    </Link>
                </div>
                <Flex
                    margin='0 10px 0 0'
                >
                    <NavItem>
                        SEU CADASTRO
                    </NavItem>
                    /
                    <NavItem>
                        LEVANTAMENTO DE RECURSOS
                    </NavItem>
                    /
                    <NavItem>
                        MONTE SUA CASA
                    </NavItem>
                </Flex>
            </StyledNav>
            <Triangle />
        </NavContainer>
    )
}

export default Navbar