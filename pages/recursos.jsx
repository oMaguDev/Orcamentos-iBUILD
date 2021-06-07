import { useState } from "react"
import RadioIconButtons from "../components/common/RadioIconButtons"
import RadioButtons from "../components/common/RadioButtons"
import { Box, Flex, Layout, TitleContainer } from "../components/Containers"
import { ExplainingP } from "../components/Text"
import Carousel from "../components/common/Carousel"
import First from "../components/specific/simular/recursos/First"
import Second from "../components/specific/simular/recursos/Second"
import { useRouter } from 'next/router'


const Resources = () => {

    const carouselItems = [
        <First key='resources_slide_1' />,
        <Second key='fist_2' />,
    ]

    const router = useRouter()

    return (
        <Layout>
            <Carousel
                fullScreen
                items={carouselItems}
                lastSlideAction={() => router.push('/levantamento')}
            />
        </Layout>
    )
}

export default Resources