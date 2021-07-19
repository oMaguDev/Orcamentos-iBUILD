import { useContext, useEffect } from "react"
import { SimulationDataContext } from "../../../contexts/SimulationData"
import { SimulationStatusContext } from "../../../contexts/SimulationStatus"
import { formatMoney } from "../../../utils/format"
import { Flex } from "../../Containers"
import { Status, StatusBoxContainer, StatusNumbers, StatusNumbersLabel, ValueBoxes } from "./styles"

const StatusBox = () => {

    const { simStatus, setSimStatus } = useContext(SimulationStatusContext)


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
                            {formatMoney(simStatus.funds.total)}
                        </div>
                    </ValueBoxes>
                    <ValueBoxes>
                        <div className='valueTag'>
                            CUSTO DO IMÓVEL
                        </div>
                        <div className='value'>
                            {formatMoney(simStatus.funds.current)}
                        </div>
                    </ValueBoxes>
                    <ValueBoxes last green>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            {formatMoney(simStatus.funds.available)}
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
                            {(simStatus.area.total)} m²
                        </div>
                    </ValueBoxes>
                    <ValueBoxes>
                        <div className='valueTag'>
                            TOTAL ATÉ AGORA
                        </div>
                        <div className='value'>
                            {(simStatus.area.current)} m²
                        </div>
                    </ValueBoxes>
                    <ValueBoxes last pink>
                        <div className='valueTag'>
                            VOCÊ AINDA PODE USAR
                        </div>
                        <div className='value'>
                            {(simStatus.area.available)} m²
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