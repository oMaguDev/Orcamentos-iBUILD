import { Status, StatusBoxContainer, StatusNumbers, ValueBoxes } from "./styles"

const StatusBox = () => {
    return (
        <StatusBoxContainer>
            <StatusNumbers>
                <ValueBoxes>
                    <div className='valueTag'>
                        Valor disponível
                    </div>
                    <div className='value'>
                        R$1.000.000,00
                    </div>
                </ValueBoxes>
                <ValueBoxes>
                    <div className='valueTag'>
                        Custo do Imóvel
                    </div>
                    <div className='value'>
                        R$1.000.000,00
                    </div>
                </ValueBoxes>
                <ValueBoxes last>
                    <div className='valueTag'>
                        Saldo
                    </div>
                    <div className='value'>
                        R$1.000.000,00
                    </div>
                </ValueBoxes>

            </StatusNumbers>
            <Status>
                SUA CASA ESTÁ DENTRO DO SEU CUSTO
            </Status>
        </StatusBoxContainer>
    )
}

export default StatusBox