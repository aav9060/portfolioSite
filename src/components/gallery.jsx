import React from 'react';
import ReactDOM from 'react-dom/client';
import GalleryAnimation from './galleryAnimation';

// images
import Bunny from '../assets/images/bunny.webp'
import Bunny2 from '../assets/images/bunny2.webm'
import Ana from '../assets/images/ana.webp'
import Ana2 from '../assets/images/ana2.webm'
import Lyn from '../assets/images/lyn.webp'
import Lyn2 from '../assets/images/lyn2.webm'
import Mina from '../assets/images/mina.webp'
import Mina2 from '../assets/images/mina2.webm'
import Paradise from '../assets/images/paradise.webp'
import Paradise2 from '../assets/images/paradise2.webm'
import Sit from '../assets/images/sit.webp'
import Sit2 from '../assets/images/sit2.webm'



export default class GalleryComp extends React.Component{
    render(){
        return(
            <>
        <div className="gallery">
        <div className="main-container">
        <div className="image-preview">
            <img src={Ana} alt="char"/>
            <video paused loop muted playsinline aria-hidden="true">
                <source src={Ana2} type="video/webm"/>
            </video>
            <span className="overlay">
                <div className="desc">
                    <h1>Title</h1>
                    <p className="descText">Description</p>
                </div>
            </span>
        </div>
        <div className="image-preview">
            <img src={Bunny} alt="char"/>
            <video paused loop muted playsinline aria-hidden="true">
                <source src={Bunny2} type="video/webm"/>
            </video>
            <span className="overlay">
                <div className="desc">
                    <h1>Title</h1>
                    <p className="descText">Description</p>
                </div>
            </span>
        </div>
        <div className="image-preview">
            <img src={Lyn} alt="char"/>
            <video paused loop muted playsinline aria-hidden="true">
                <source src={Lyn2} type="video/webm"/>
            </video>
            <span className="overlay">
                <div className="desc">
                    <h1>Title</h1>
                    <p className="descText">Description</p>
                </div>
            </span>
        </div>
        <div className="image-preview">
            <img src={Mina} alt="char"/>
            <video paused loop muted playsinline aria-hidden="true">
                <source src={Mina2} type="video/webm"/>
            </video>
            <span className="overlay">
                <div className="desc">
                    <h1>Title</h1>
                    <p className="descText">Description</p>
                </div>
            </span>
        </div> <div className="image-preview">
            <img src={Paradise} alt="char"/>
            <video paused loop muted playsinline aria-hidden="true">
                <source src={Paradise2} type="video/webm"/>
            </video>
            <span className="overlay">
                <div className="desc">
                    <h1>Title</h1>
                    <p className="descText">Description</p>
                </div>
            </span>
        </div>
    </div>
    </div>
    <script src="./galleryAnimation.js"></script>
            </>
        )
    }
}