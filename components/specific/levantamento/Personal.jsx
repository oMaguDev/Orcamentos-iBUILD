import { Box, Flex, TitleContainer } from "../../Containers";
import Select from "../../form/Select";
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "../../common/StepContent/styles";
import Input from '../../form/Input';
import { useContext, useEffect, useState } from "react";
import { SimulationDataContext } from "../../../contexts/SimulationData";
import { UserContext } from "../../../contexts/UserContext";
import { getCityByUF, getUFs } from "../../../services/geoClient";
import { FinancialSimContext } from "../../../contexts/FinancialSim";

const Personal = ({ small }) => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const { resources, setResources } = useContext(FinancialSimContext);
    const { user, setUser } = useContext(UserContext);

    const estado_civil_options = [
        {
            value: 'SOLTEIRO',
            label: 'SOLTEIRO(A)'
        },
        {
            value: 'CASADO',
            label: 'CASADO(A)',
        },
        {
            value: 'VIÚVO',
            label: 'VIÚVO(A)'
        },
    ];

    const data = {
        caption: 'Informações',
        title: 'Pessoais',
        imageSrc: '/images/Ambientes/Ambientes1.svg',
        value: resources?.renda,
        onChange: newValue => setResources({
            ...resources,
            renda: newValue
        }),
        inputs: [
            {
                value: resources?.renda,
                onChange: newValue => setResources({
                    ...resources,
                    renda: newValue
                }),
                label: 'Renda Bruta Familiar (mensal comprovada)',
                placeholder: 'Insira a renda mensal em reais',
                type: 'number',
                id: 'renda_mensal'
            },
            {
                value: resources?.dob,
                onChange: newValue => setResources({
                    ...resources,
                    dob: newValue
                }),
                label: 'Data de nascimento (proponente mais velho)',
                placeholder: 'DD/MM/AAAA',
                type: 'text',
                mask: 'date',
                id: 'dob'
            }
        ]
    };

    useEffect(() => {
        getUFs().then(res => {
            if (res && res.data) {
                const data = [...res.data];
                const newOptions = data.map((e, i) => ({
                    label: e.sigla,
                    value: e.sigla
                }));
                setStates(newOptions);
            }
        });
    }, []);

    useEffect(() => {
        if (user && user?.uf !== 'placeholder') {
            getCityByUF(user.uf).then(res => {
                if (res && res.data) {
                    const data = [...res.data];
                    const newOptions = data.map((e, i) => ({
                        label: e.nome,
                        value: e.nome
                    }));
                    setCities(newOptions);
                }
            });
        }
    }, [user.uf]);

    if (small) {
        return (
            <SlideContainer small key={data.title}>
                <StepContentContainer small key={`${data.title}_step_content_container`}>
                    <TitleContainer key={`${data.title}_title_container`}>
                        <h4>{data.caption.toUpperCase()}</h4>
                        <h2>{data.title.toUpperCase()}</h2>
                        <p>{data.subtitle}</p>
                    </TitleContainer>
                    <MiddleContainer key={`${data.title}_middle_container`}>
                        {data.inputs && data.inputs.map((e, i) => (
                            <Input
                                value={e.value}
                                onChange={(event) => e.onChange(event.target.value)}
                                label={e.label}
                                placeholder={e.placeholder}
                                type={e.type ? e.type : 'text'}
                                margin='10px 0'
                                width={e.width ? e.width : '100%'}
                                mask={e.mask}
                                small
                                key={e.id}
                                id={e.id}
                            />
                        ))}
                        <Select
                            value={resources.estado_civil}
                            onChange={newValue => setResources({
                                ...resources,
                                estado_civil: newValue.target.value
                            })}
                            label='ESTADO CIVIL'
                            placeholder='Selecione o estado civil'
                            key='uf_input'
                            small
                            margin='10px 10px 10px 0'
                            options={estado_civil_options}
                        />
                        <Box margin='10px 0 0'>
                            {('Local de construção').toUpperCase()}
                        </Box>
                        <Flex width='100%' justifyContent='space-evenly'>
                            <Select
                                value={user.uf}
                                onChange={newValue => setUser({
                                    ...user,
                                    uf: newValue.target.value
                                })}
                                options={states}
                                key='uf_input'
                                placeholder='UF'
                                small
                                margin='10px 10px 10px 0'
                                width='25%'
                            />
                            <Select
                                placeholder='CIDADE'
                                value={user.city}
                                onChange={newValue => setUser({
                                    ...user,
                                    city: newValue.target.value
                                })}
                                options={cities}
                                key='city_input'
                                small
                                margin='10px 0 10px 10px'
                                width='75%'
                            />
                        </Flex>
                    </MiddleContainer>
                </StepContentContainer>
            </SlideContainer>
        );
    }

    return (
        <SlideContainer key={data.title}>
            <StepImageContainer key={`${data.title}_step_image_container`}>
                <img style={{ height: '100%' }} src={data.imageSrc ? data.imageSrc : "/images/americana.jpg"} alt="" />
            </StepImageContainer>
            <StepContentContainer key={`${data.title}_step_content_container`}>
                <TitleContainer key={`${data.title}_title_container`}>
                    <h4>{data.caption.toUpperCase()}</h4>
                    <h2>{data.title.toUpperCase()}</h2>
                    <p>{data.subtitle}</p>
                </TitleContainer>
                <MiddleContainer key={`${data.title}_middle_container`}>
                    {data.inputs && data.inputs.map((e, i) => (
                        <Input
                            value={e.value}
                            onChange={(event) => e.onChange(event.target.value)}
                            label={e.label}
                            placeholder={e.placeholder}
                            type={e.type ? e.type : 'text'}
                            margin='10px 0'
                            width={e.width ? e.width : '100%'}
                            mask={e.mask}
                            small
                            key={e.id}
                            id={e.id}
                        />
                    ))}
                    <Select
                        value={resources.estado_civil}
                        onChange={newValue => setResources({
                            ...resources,
                            estado_civil: newValue.target.value
                        })}
                        label='ESTADO CIVIL'
                        placeholder='Selecione o estado civil'
                        key='uf_input'
                        small
                        margin='10px 10px 10px 0'
                        options={estado_civil_options}
                    />
                    <Box margin='10px 0 0'>
                        {('Local de construção').toUpperCase()}
                    </Box>
                    <Flex width='100%' justifyContent='space-evenly'>
                        <Select
                            value={user.uf}
                            onChange={newValue => setUser({
                                ...user,
                                uf: newValue.target.value
                            })}
                            options={states}
                            key='uf_input'
                            placeholder='UF'
                            small
                            margin='10px 10px 10px 0'
                            width='25%'
                        />
                        <Select
                            placeholder='CIDADE'
                            value={user.city}
                            onChange={newValue => setUser({
                                ...user,
                                city: newValue.target.value
                            })}
                            options={cities}
                            key='city_input'
                            small
                            margin='10px 0 10px 10px'
                            width='75%'
                        />
                    </Flex>
                </MiddleContainer>
            </StepContentContainer>
        </SlideContainer>
    );
};

export default Personal;
