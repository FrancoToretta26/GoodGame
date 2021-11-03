import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselBugReport() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                
                <img src="https://www.doublegames.com/images/screenshots/clblackjack_1_big.jpg"/>
                </div>
                <div>
                    <img src="https://todoiure.com.ar/imagenes/blackjack-casino.gif"/>
                </div>
            </Carousel>
        </div>
    );
}
