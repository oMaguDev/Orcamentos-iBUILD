import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import { CarouselButton, CarouselButtonContainer, CarouselItem, Dots } from "./styles";
import Button from '../Button'
import { Box, Flex } from "../../Containers";
import { CaretRight, CaretLeft } from 'phosphor-react'

const responsive = {
    0: { items: 1 },
    // 568: { items: 2 },
    // 1024: { items: 3 },
};

const defaultItems = [
    <CarouselItem data-value="1">1</CarouselItem>,
    <CarouselItem data-value="2">2</CarouselItem>,
    <CarouselItem data-value="3">3</CarouselItem>,
    <CarouselItem data-value="4">4</CarouselItem>,
    <CarouselItem data-value="5">5</CarouselItem>,
];

const DotsItem = ({ isActive }) => {
    return (
        <Dots isActive={isActive === "__active"} />
    )
}

const Carousel = ({ items }) => { //, stepper, stepperSubmit, autoPlay = true, infinite

    const [activeIndex, setActiveIndex] = useState(0);
    // const [items] = useState(createItems(5, [setActiveIndex]));

    const slidePrev = () => {
        console.log('slidePrev')
        if (activeIndex > 0) {
            return setActiveIndex(activeIndex - 1);
        }
    }
    const slideNext = () => {
        console.log('slideNext')
        if (items) {
            if (activeIndex < items.length - 1) {
                return setActiveIndex(activeIndex + 1);
            }
        } else {
            if (activeIndex < defaultItems.length - 1) {
                return setActiveIndex(activeIndex + 1);
            }
        }
    }
    // const syncActiveIndex = ({ item }) => setActiveIndex(item);

    useEffect(() => {
        console.log('activeIndex: ', activeIndex)
    }, [activeIndex])

    const carouselItems = items ? items : defaultItems

    return (
        <Flex
            width='calc(100% - 250px)'
            // height='100%'
            style={{
                alignSelf: 'normal'
            }}
        >
            <AliceCarousel
                // mouseTracking
                items={carouselItems}
                responsive={responsive}
                disableButtonsControls
                disableDotsControls //={disableDotsControls}
                // autoPlay={autoPlay}
                // autoPlayInterval={4000}
                // infinite={infinite}
                // touchMoveDefaultEvents={false}
                activeIndex={activeIndex}
                swipeDelta={2000}
            />
            <CarouselButtonContainer left>
                <CarouselButton onClick={slidePrev}>
                    <CaretLeft size={18} />
                </CarouselButton>
                        VOLTAR
                    </CarouselButtonContainer>
            <CarouselButtonContainer right>
                AVANÇAR
                <CarouselButton onClick={slideNext}>
                    <CaretRight size={18} />
                </CarouselButton>
            </CarouselButtonContainer>
        </Flex>
    )
}

export default Carousel