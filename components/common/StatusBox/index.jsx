import { Flex } from "../../Containers"
import { Status, StatusBoxContainer, StatusNumbers, StatusNumbersLabel, ValueBoxes } from "./styles"

const StatusBox = () => {
    return (
        <StatusBoxContainer>
            <Flex>
                <StatusNumbersLabel>
                    VALORES
                </StatusNumbersLabel>
                <StatusNumbers>
                    <ValueBoxes>
                        <div className='valueTag'>
                            VALOR DISPONÍVEL
                        </div>
                        <div className='value'>
                            R$1.000.000,00
                        </div>
                    </ValueBoxes>
                    <ValueBoxes>
                        <div className='valueTag'>
                            CUSTO DO IMÓVEL
                        </div>
                        <div className='value'>
                            R$1.000.000,00
                        </div>
                    </ValueBoxes>
                    <ValueBoxes last green>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            R$1.000.000,00
                        </div>
                    </ValueBoxes>
                </StatusNumbers>
            </Flex>
            <Flex>
                <StatusNumbersLabel>
                    METROS
                </StatusNumbersLabel>
                <StatusNumbers>
                    <ValueBoxes>
                        <div className='valueTag'>
                            TAMANHO DISPONÍVEL
                        </div>
                        <div className='value'>
                            450 m²
                        </div>
                    </ValueBoxes>
                    <ValueBoxes>
                        <div className='valueTag'>
                            TOTAL ATÉ AGORA
                        </div>
                        <div className='value'>
                            450 m²
                        </div>
                    </ValueBoxes>
                    <ValueBoxes last pink>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            0 m²
                        </div>
                    </ValueBoxes>

                </StatusNumbers>
            </Flex>
            {/* <Status>
                SUA CASA ESTÁ DENTRO DO SEU CUSTO
            </Status> */}
        </StatusBoxContainer>
    )
}

export default StatusBox