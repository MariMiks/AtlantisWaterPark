import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/carousel.css";

import ocean from "../assets/imgs/ocean-adobe.jpg"

export default function CarouselAcomodacao(props: any) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div className="img-container">
                <img src={props.img[0]} style={{width: "90%", height: "auto"}}/>
            </div>
            <div className="img-container">
                <img src={props.img[1]} style={{width: "90%", height: "auto"}}/>
            </div>
            <div className="img-container">
                <img src={props.img[2]} style={{width: "90%", height: "auto"}}/>
            </div>
        </Carousel>
    )
}

