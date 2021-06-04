import { useState } from "react"
import RadioIconButtons from "../components/common/RadioIconButtons"
import RadioButtons from "../components/common/RadioButtons"
import { Box, Flex, Layout, TitleContainer } from "../components/Containers"
import { ExplainingP } from "../components/Text"
import Carousel from "../components/common/Carousel"
import First from "../components/specific/simular/recursos/First"


const Resource = () => {

    const carouselItems = [
        <First />,
        <First />,
    ]

    return (
        <Layout>
            <Carousel
                fullScreen
                items={carouselItems}
            />
        </Layout>
    )
}

export default Resource