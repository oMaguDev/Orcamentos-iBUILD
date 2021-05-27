import { Flex } from '../../Containers'
import { LogoIcon, NavContainer, NavItem, StyledNav, Triangle } from './styles'

const Navbar = () => {
    return (
        <NavContainer>
            <StyledNav>
                <LogoIcon src="/images/icone_vermelho.svg" alt="" />
                <NavItem>
                    Seu Cadastro
                </NavItem>
                /
                <NavItem>
                    Recurso Construção
                </NavItem>
                /
                <NavItem>
                    Monte Sua Casa
                </NavItem>
                /
                <NavItem>
                    Resumo
                </NavItem>
            </StyledNav>
            <Triangle />
        </NavContainer>
    )
}

export default Navbar