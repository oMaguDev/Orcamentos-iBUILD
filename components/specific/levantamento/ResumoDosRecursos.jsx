import { Box, Flex, TitleContainer } from "../../Containers"
import { ResourcesIndexColumn } from "./styles"
import DataDisplay from '../../common/DataDisplay'


const ResourcesIndex = () => {
    return (
        <Flex column>
            <TitleContainer>
                <h4>RESUMO DOS</h4>
                <h1>RECURSOS PARA CONSTRUÇÃO</h1>
            </TitleContainer>
            <Flex
                width='100%'
                maxWidth='1050px'
                margin='30px 0'
            >
                <ResourcesIndexColumn>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Renda bruta mensal'
                            value='R$ 10.000,00'
                            key='Renda bruta mensal'
                        />
                        <DataDisplay
                            key='Valor limite da parcela'
                            label='Valor limite da parcela'
                            value='R$ 3.000,00'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor da entrada'
                            key='Valor da entrada'
                            value='R$ 100.000,00'
                        />
                        <DataDisplay
                            label='Valor da FGTS'
                            key='Valor da FGTS'
                            value='R$ 45.000,00'
                        />
                        <DataDisplay
                            label='Valor da entrada + FGTS'
                            key='Valor da entrada + FGTS'
                            value='R$ 145.000,00'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor do terreno'
                            value='R$ 120.000,00'
                            key='Valor do terreno'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Tamanho estimado do imóvel'
                            value='150m²'
                            key='Tamanho estimado do imóvel'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Crédito disponível para financiamento'
                            value='R$ 1.500.000,00'
                            key='Crédito disponível para financiamento'
                        />
                    </Box>
                </ResourcesIndexColumn>

                <ResourcesIndexColumn>
                <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Taxa de juros a.a (efetivo)'
                            value='8%'
                            key='Taxa de juros a.a (efetivo)'
                        />
                        <DataDisplay
                            key='Taxa a.m'
                            label='Taxa a.m'
                            value='0,64%'
                        />
                        <DataDisplay
                            label='Quantidade de parcelas'
                            key='Quantidade de parcelas'
                            value='360 meses'
                        />
                        <DataDisplay
                            label='Seguros prestamista'
                            key='Seguros prestamista'
                            value='0,0381%'
                        />
                        <DataDisplay
                            label='Taxa de administração'
                            key='Taxa de administração'
                            value='R$ 25,00'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor da parcela (price)'
                            value='R$ 3.336,67'
                            key='Valor da parcela (price)'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor inicial da prestação (SAC)'
                            value='R$ 4.439,21'
                            key='Valor inicial da prestação (SAC)'
                        />
                        <DataDisplay
                            label='Valor final da prestação (SAC)'
                            value='R$ 1.175,65'
                            key='Valor final da prestação (SAC)'
                        />
                        <DataDisplay
                            label='Amortização mensal'
                            value='R$ 1.142,80'
                            key='Amortização mensal'
                        />
                    </Box>
                </ResourcesIndexColumn>
            </Flex>
        </Flex>
    )
}

export default ResourcesIndex