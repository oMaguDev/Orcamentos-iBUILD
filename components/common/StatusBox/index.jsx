import { Flex } from "../../Containers"
import { Status, StatusBoxContainer, StatusNumbers, StatusNumbersLabel, ValueBoxes } from "./styles"

const StatusBox = () => {
    return (
        <StatusBoxContainer>
            <Flex>
                {/* <StatusNumbersLabel>
                        top
                </StatusNumbersLabel> */}
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
                    <ValueBoxes last>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            R$1.000.000,00
                        </div>
                    </ValueBoxes>
                </StatusNumbers>
            </Flex>
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
                <ValueBoxes last>
                    <div className='valueTag'>
                        VOCÊ AINDA PODE USAR
                    </div>
                    <div className='value'>
                        R$1.000.000,00
                    </div>
                </ValueBoxes>

            </StatusNumbers>
            {/* <Status>
                SUA CASA ESTÁ DENTRO DO SEU CUSTO
            </Status> */}
        </StatusBoxContainer>
    )
}

export default StatusBox