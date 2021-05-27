import Navbar from "../components/common/Navbar"
import StatusBox from "../components/common/StatusBox"
import Stepper from "../components/common/StepperBackground"
import { Flex, Layout } from "../components/Containers"
import StepContent from '../components/common/StepContent'
import { CarouselButton, CarouselButtonContainer } from '../components/common/Carousel/styles'


const Simular = () => {
    return (
        <Flex
            // alignItems='center'
            justifyContent='flex-end'
        >
        {/* <Flex
            column
            alignItems='flex-start'
            justifyContent='flex-start'
            fullHeight
            // minHeight='100vh'
            > */}
            <Navbar />
            <Stepper />
        {/* </Flex> */}
        <StepContent />
        <CarouselButtonContainer left>
            <CarouselButton>
                
            </CarouselButton>
            VOLTAR
        </CarouselButtonContainer>
        <CarouselButtonContainer right>
            AVANÇAR
            <CarouselButton>

            </CarouselButton>
        </CarouselButtonContainer>
        </Flex>
    )
}

export default Simular



























// import { useState } from "react"
// import CustomizedSteppers from "../components/common/Assistent"
// import { Flex, Layout } from "../components/Containers"
// import { H2 } from "../components/Text"


// export const Simulation = () => {

//     const [area, setArea] = useState('')
//     const [estilo, setEstilo] = useState(null);
//     const [pavimentos, setPavimentos] = useState(null);


//     const data = [
//         {
//             type: 'input',
//             inputs: [
//                 {
//                     value: area,
//                     label: 'Área',
//                     onChange: setArea
//                 }
//             ]
//         },
//         {
//             type: 'options',
//             title: 'Qual o estilo da casa?',
//             options: [
//                 {
//                     value: 'classica',
//                     label: 'Clássica',
//                     image: {
//                         src: '/images/classica.jpg',
//                         alt: 'Casa Clássica'
//                     }
//                 },
//                 {
//                     value: 'neoClassica',
//                     label: 'Neo-Clássica',
//                     image: {
//                         src: '/images/neoClassica.jpg',
//                         alt: 'Casa Neo-Clássica'
//                     }
//                 },
//                 {
//                     value: 'mediterranea',
//                     label: 'Mediterrânea',
//                     image: {
//                         src: '/images/mediterranea.jpg',
//                         alt: 'Casa Mediterrânea'
//                     }
//                 },
//                 {
//                     value: 'brasileira',
//                     label: 'Brasileira',
//                     image: {
//                         src: '/images/brasileira.png',
//                         alt: 'Casa Brasileira'
//                     }
//                 },
//                 {
//                     value: 'minimalista',
//                     label: 'Minimalista',
//                     image: {
//                         src: '/images/minimalista.jpg',
//                         alt: 'Casa Minimalista'
//                     }
//                 },
//                 {
//                     value: 'contemporanea',
//                     label: 'Contemporânea',
//                     image: {
//                         src: '/images/contemporanea.png',
//                         alt: 'Casa Contemporânea'
//                     }
//                 },
//                 {
//                     value: 'americana',
//                     label: 'Americana',
//                     image: {
//                         src: '/images/americana.jpg',
//                         alt: 'Casa Americana'
//                     }
//                 },
//                 {
//                     value: 'europeia',
//                     label: 'Europeia',
//                     image: {
//                         src: '/images/europeia.jpg',
//                         alt: 'Casa Europeia'
//                     }
//                 },
//             ],
//             value: estilo,
//             setValue: setEstilo,
//         },
//         {
//             type: 'both',
//             title: 'Qual o estilo de escada?',
//             options: [
//                 {
//                     value: '1',
//                     label: '1',
//                     image: {
//                         src: '/images/escadas/1.jpg',
//                         alt: 'Escada 1'
//                     }
//                 },
//                 {
//                     value: '2',
//                     label: '2',
//                     image: {
//                         src: '/images/escadas/2.jpg',
//                         alt: 'Escada 2'
//                     }
//                 },
//                 {
//                     value: '3',
//                     label: '3',
//                     image: {
//                         src: '/images/escadas/3.jpg',
//                         alt: 'Escada 3'
//                     }
//                 },
//                 {
//                     value: '4',
//                     label: '4',
//                     image: {
//                         src: '/images/escadas/4.jpg',
//                         alt: 'Escada 4'
//                     }
//                 },
//             ],
//             inputs: [
//                 {
//                     value: pavimentos,
//                     label: 'Pavimentos',
//                     onChange: setPavimentos
//                 }
//             ],
//             value: estilo,
//             setValue: setEstilo,
//         },
//     ]



//     return (
//         <Layout>
//             <Flex
//                 column
//                 width='100%'
//             >
//                 <H2>
//                     Quero fazer o orçamento da minha casa
//                 </H2>
//                 <CustomizedSteppers data={data} />
//             </Flex>
//         </Layout>
//     )
// }

// export default Simulation