import { Flex } from '../../Containers'
import { LogoIcon, NavContainer, NavItem, StyledNav, Triangle } from './styles'

const Navbar = () => {
    return (
        <NavContainer>
            <StyledNav>
                <div>
                <LogoIcon src="/images/icone_vermelho.svg" alt="" />
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