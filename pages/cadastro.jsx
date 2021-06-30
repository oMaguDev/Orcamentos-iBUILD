import { useContext, useState } from "react"
import Button from "../components/common/Button"
import Navbar from "../components/common/Navbar"
import { Box, Flex, LogoMedium, TitleContainer } from "../components/Containers"
import Input from "../components/form/Input"
import Select from "../components/form/Select"
import { ExplainingP } from "../components/Text"
import { useRouter } from 'next/router'
import { SimulationDataContext } from "../contexts/SimulationData"

const Cadastro = () => {

    const router = useRouter()

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [cpf, setCpf] = useState('')
    // const [phone, setPhone] = useState('')
    // const [state, setState] = useState('')
    // const [city, setCity] = useState('')

    const { userData, setUserData } = useContext(SimulationDataContext)

    return (
        <Flex
            // alignItems='center'
            justifyContent='space-evenly'
            height='100%'
            width='100%'
        // position='absolute'
        // top='50px'
        >
            <Navbar />
            <Box
                width='100%'
                maxWidth='700px'
                // height='100%'
                padding='20px'
            >
                <img src="/images/Pessoas/Pessoas 3.svg" width='100%' height='100%' alt="" />
            </Box>
            <Flex
                column
                textAlign='left'
                width='100%'
                maxWidth='600px'
                margin='0'
                alignItems='flex-start'
                padding='20px'
                justifyContent='flex-start'
            >
                <TitleContainer>
                    <h4>
                        QUER SIMULAR COMO A SUA CASA VAI FICAR?
                        </h4>
                    <h1>
                        Monte a sua casa do seu jeito e veja em tempo real quanto ela pode custar
                        </h1>
                </TitleContainer>
                <Flex
                    column
                    width='calc(100% - 50px)'
                    margin='25px'
                >
                    <Input
                        label='NOME COMPLETO'
                        placeholder='Insira o seu nome completo'
                        value={userData.name}
                        onChange={newValue => setUserData({
                            ...userData,
                            name: newValue.target.value
                        })}
                        key='nome_completo'
                        small
                        margin='10px 0'
                    />
                    <Input
                        label='E-MAIL'
                        placeholder='Insira o seu email'
                        value={userData.email}
                        onChange={newValue => setUserData({
                            ...userData,
                            email: newValue.target.value
                        })}
                        key='email_input'
                        small
                        margin='10px 0'
                    />
                    <Flex
                        width='100%'
                        justifyContent='space-evenly'
                    >
                        <Input
                            label='CPF'
                            placeholder='Insira o seu cpf'
                            value={userData.cpf}
                            onChange={newValue => setUserData({
                                ...userData,
                                cpf: newValue.target.value
                            })}
                            key='cpf_input'
                            small
                            margin='10px 10px 10px 0'
                            mask='cpf'
                        />
                        <Input
                            label='TELEFONE'
                            placeholder='Insira o telefone com DDD'
                            value={userData.phone}
                            onChange={newValue => setUserData({
                                ...userData,
                                phone: newValue.target.value
                            })}
                            key='phone_input'
                            small
                            margin='10px 0 10px 10px'
                            mask='phone'
                        />
                    </Flex>
                    <Flex
                        width='100%'
                        justifyContent='space-evenly'
                    >
                        <Select
                            label='UF'
                            placeholder='Insira o seu telefone com DDD'
                            value={userData.uf}
                            onChange={newValue => setUserData({
                                ...userData,
                                uf: newValue.target.value
                            })}
                            key='uf_input'
                            small
                            margin='10px 10px 10px 0'
                            width='20%'
                        />
                        <Select
                            label='CIDADE'
                            placeholder='Insira o telefone com DDD'
                            value={userData.city}
                            onChange={newValue => setUserData({
                                ...userData,
                                city: newValue.target.value
                            })}
                            key='city_input'
                            small
                            margin='10px 0 10px 10px'
                            width='80%'
                        />
                    </Flex>
                </Flex>
                <Flex
                    width='100%'
                    height='50px'
                    margin='15px 0 0'
                    justifyContent='space-evenly'
                >
                    <Button
                        onClick={() => router.push('/simular')}
                        margin='10px'
                        fontSize='0.8rem'
                    >
                        FAZER CADASTRO
                    </Button>
                    <Button
                        secondary
                        margin='10px'
                        fontSize='0.8rem'
                        // onClick={() => router.push('/recursos')}
                    >
                        JÁ SOU CADASTRADO
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cadastro