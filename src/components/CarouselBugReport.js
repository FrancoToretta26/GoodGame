import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselBugReport() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                
                <img src="https://paraguaypferde.com/wp-content/uploads/2020/05/how-do-you-play-blackjack.jpg"/>
                </div>
                <div>
                    <img src="https://images-ext-2.discordapp.net/external/Kevj2F9J3P3NjFsqeEfLlZgolfiKvSedyvFY8OMQv2k/https/dotfilmfest.com/wp-content/uploads/2020/09/bovada-blackjack-review1.jpg"/>
                </div>
            </Carousel>
        </div>
    );
}
