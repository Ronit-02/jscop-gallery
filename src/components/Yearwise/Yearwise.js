import React from 'react';
import "./Yearwise.css";
// import Image from "../Image/Image";

function Yearwise(props) {
    return (
    
    <div className='web-gallery'>
        <div className='button'>
            <div class='year-btn flex-center'>
                <span>2018</span>
            </div>

            <div class='year-btn flex-center'>
                <span>2019</span>
            </div>

            <div class='year-btn flex-center'>
                <span>2020</span>
            </div>
        </div>
  
        <div class="gallery">
            <div className='gallery__column1'>
                <div class="gallery__column">
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>

                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" width = "50px" height = "480px" alt="" class="gallery__image"/>
                    </figure>

                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>
                </div>
                
                <div class="gallery__column">
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/AR7aumwKr2s/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>
                
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>

                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/tV_1sC603zA/300x500" width = "50px" height = "480px" alt="" class="gallery__image"/>
                    </figure>
                </div>
            </div>
            <div className='gallery__column1'>
                <div class="gallery__column">
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" width = "50px" height = "480px" alt="" class="gallery__image"/>
                    </figure>
                
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>

                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/2JH8d3ChNec/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>
                </div>
                
                <div class="gallery__column">
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/FQhLLehm4dk/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>

                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/OQd9zONSx7s/300x300" width = "50px" height = "300px" alt="" class="gallery__image"/>
                    </figure>
                
                    <figure class="gallery__thumb">
                    <img src="https://source.unsplash.com/XZkEhowjx8k/300x500" width = "50px" height = "480px" alt="" class="gallery__image"/>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Yearwise;
