import { Box, Flex, TitleContainer } from "../../Containers"
import { ResourcesIndexColumn } from "./styles"
import DataDisplay from '../../common/DataDisplay'
import { useContext, useEffect } from "react"
import { FinancialSimContext } from "../../../contexts/FinancialSim"
import { formatMoney } from "../../../utils/format"


const ResourcesIndex = ({ small }) => {


    const { summary, resources } = useContext(FinancialSimContext)

    // useEffect(() => {
    //     console.log('summary: ', summary)
    // }, [])

    if (small) {
        return (
            <Flex
                column
                width='100%'
                justifyContent='flex-start'
            >
                <TitleContainer>
                    <h4>RESUMO DOS</h4>
                    <h1>RECURSOS PARA CONSTRUÇÃO</h1>
                </TitleContainer>
                <Flex
                    width='100%'
                    maxWidth='1050px'
                // margin='30px 0'
                >
                    <div style={{ display: 'none' }}></div>
                    <ResourcesIndexColumn small>
                        <Box
                            margin='0 0 20px 0'
                            width='100%'
                        >
                            <DataDisplay
                                label='Renda bruta mensal'
                                value={resources.renda === '' ? formatMoney(0) : formatMoney(parseFloat(resources.renda))}
                                key='Renda bruta mensal'
                            />
                            <DataDisplay
                                key='Valor limite da parcela'
                                label='Valor limite da parcela'
                                value={resources.renda === '' ? formatMoney(0) : formatMoney(parseFloat(0.3 * resources.renda))}
                            />
                        </Box>
                        <Box
                            margin='0 0 20px 0'
                            width='100%'
                        >
                            <DataDisplay
                                label='Valor da entrada'
                                key='Valor da entrada'
                                value={resources.valor_entrada === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_entrada))}
                            />
                            <DataDisplay
                                label='Valor da FGTS'
                                key='Valor da FGTS'
                                value={resources.valor_fgts === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_fgts))}
                            />
                            <DataDisplay
                                label='Valor da entrada + FGTS'
                                key='Valor da entrada + FGTS'
                                value={resources.valor_entrada === '' || resources.valor_fgts === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_entrada) + parseFloat(resources.valor_fgts))}
                            />
                        </Box>
                        <Box
                            margin='0 0 20px 0'
                            width='100%'
                        >
                            <DataDisplay
                                label='Valor do terreno'
                                key='Valor do terreno'
                                value={resources.valor_terreno === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_terreno))}
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
                                value={summary.valorFinanciamento === '' ? formatMoney(0) : formatMoney(parseFloat(summary.valorFinanciamento))}
                                key='Crédito disponível para financiamento'
                            />
                        </Box>
                        <Box
                            margin='0 0 20px 0'
                            width='100%'
                        >
                            <DataDisplay
                                label='Taxa de juros a.a (efetivo)'
                                key='Taxa de juros a.a (efetivo)'
                                value={`${summary.jurosAA * 100}%`}
                            />
                            <DataDisplay
                                key='Taxa a.m'
                                label='Taxa a.m'
                                value={`${(summary.jurosAM * 100).toFixed(2)}%`}
                            />
                            <DataDisplay
                                label='Quantidade de parcelas'
                                key='Quantidade de parcelas'
                                value={resources.parcelas === '' ? '360 meses' : `${resources.parcelas} meses`}
                            />
                            <DataDisplay
                                label='Seguros prestamista'
                                key='Seguros prestamista'
                                value={`${(summary.prestamista * 100).toFixed(4)}%`}
                            />
                            <DataDisplay
                                label='Taxa de administração'
                                key='Taxa de administração'
                                value={formatMoney(summary.txAdm)}
                            />
                        </Box>
                        <Box
                            margin='0 0 20px 0'
                            width='100%'
                        >
                            <DataDisplay
                                label='Valor da parcela (price)'
                                value={summary.parcelaPrice === '' ? formatMoney(0) : formatMoney(parseFloat(summary.parcelaPrice))}
                                key='Valor da parcela (price)'
                            />
                        </Box>
                        <Box
                            margin='0 0 20px 0'
                            width='100%'
                        >
                            <DataDisplay
                                label='Valor inicial da prestação (SAC)'
                                value={summary.parcelaSAC[0] === '' ? formatMoney(0) : formatMoney(parseFloat(summary.parcelaSAC[0]))}
                                key='Valor inicial da prestação (SAC)'
                            />
                            <DataDisplay
                                label='Valor final da prestação (SAC)'
                                value={summary.parcelaSAC[1] === '' ? formatMoney(0) : formatMoney(parseFloat(summary.parcelaSAC[1]))}
                                key='Valor final da prestação (SAC)'
                            />
                            <DataDisplay
                                label='Amortização mensal'
                                value={summary.amortizacao === '' ? formatMoney(0) : formatMoney(parseFloat(summary.amortizacao))}
                                key='Amortização mensal'
                            />
                        </Box>
                    </ResourcesIndexColumn>
                </Flex>
            </Flex>
        )
    }

    return (
        <Flex
            column
            height='calc(100vh - 200px)'
            justifyContent='flex-start'
        >
            <TitleContainer>
                <h4>RESUMO DOS</h4>
                <h1>RECURSOS PARA CONSTRUÇÃO</h1>
            </TitleContainer>
            <Flex
                width='100%'
                maxWidth='1050px'
            // margin='30px 0'
            >
                <ResourcesIndexColumn>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Renda bruta mensal'
                            value={resources.renda === '' ? formatMoney(0) : formatMoney(parseFloat(resources.renda))}
                            key='Renda bruta mensal'
                        />
                        <DataDisplay
                            key='Valor limite da parcela'
                            label='Valor limite da parcela'
                            value={resources.renda === '' ? formatMoney(0) : formatMoney(parseFloat(0.3 * resources.renda))}
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor da entrada'
                            key='Valor da entrada'
                            value={resources.valor_entrada === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_entrada))}
                        />
                        <DataDisplay
                            label='Valor da FGTS'
                            key='Valor da FGTS'
                            value={resources.valor_fgts === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_fgts))}
                        />
                        <DataDisplay
                            label='Valor da entrada + FGTS'
                            key='Valor da entrada + FGTS'
                            value={resources.valor_entrada === '' || resources.valor_fgts === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_entrada) + parseFloat(resources.valor_fgts))}
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor do terreno'
                            key='Valor do terreno'
                            value={resources.valor_terreno === '' ? formatMoney(0) : formatMoney(parseFloat(resources.valor_terreno))}
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
                            value={summary.valorFinanciamento === '' ? formatMoney(0) : formatMoney(parseFloat(summary.valorFinanciamento))}
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
                            key='Taxa de juros a.a (efetivo)'
                            value={`${summary.jurosAA * 100}%`}
                        />
                        <DataDisplay
                            key='Taxa a.m'
                            label='Taxa a.m'
                            value={`${(summary.jurosAM * 100).toFixed(2)}%`}
                        />
                        <DataDisplay
                            label='Quantidade de parcelas'
                            key='Quantidade de parcelas'
                            value={resources.parcelas === '' ? '360 meses' : `${resources.parcelas} meses`}
                        />
                        <DataDisplay
                            label='Seguros prestamista'
                            key='Seguros prestamista'
                            value={`${(summary.prestamista * 100).toFixed(4)}%`}
                        />
                        <DataDisplay
                            label='Taxa de administração'
                            key='Taxa de administração'
                            value={formatMoney(summary.txAdm)}
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor da parcela (price)'
                            value={summary.parcelaPrice === '' ? formatMoney(0) : formatMoney(parseFloat(summary.parcelaPrice))}
                            key='Valor da parcela (price)'
                        />
                    </Box>
                    <Box
                        margin='0 0 20px 0'
                        width='100%'
                    >
                        <DataDisplay
                            label='Valor inicial da prestação (SAC)'
                            value={summary.parcelaSAC[0] === '' ? formatMoney(0) : formatMoney(parseFloat(summary.parcelaSAC[0]))}
                            key='Valor inicial da prestação (SAC)'
                        />
                        <DataDisplay
                            label='Valor final da prestação (SAC)'
                            value={summary.parcelaSAC[1] === '' ? formatMoney(0) : formatMoney(parseFloat(summary.parcelaSAC[1]))}
                            key='Valor final da prestação (SAC)'
                        />
                        <DataDisplay
                            label='Amortização mensal'
                            value={summary.amortizacao === '' ? formatMoney(0) : formatMoney(parseFloat(summary.amortizacao))}
                            key='Amortização mensal'
                        />
                    </Box>
                </ResourcesIndexColumn>
            </Flex>
        </Flex>
    )
}

export default ResourcesIndex