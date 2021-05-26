import { Flex } from '../../Containers'
import { LogoIcon, NavItem, StyledNav, Triangle } from './styles'

const Navbar = () => {
    return (
        <Flex>
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
        </Flex>
    )
}

export default Navbar