import React, { useState } from "react";
// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {  green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import { Player } from 'video-react';



const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile, m}) => {
    function getMedia(){
        var slide = []
        for (var i = 0; i < m.media.length ; i++) {
            slide.push(<Slide
                media={ 
                    getMediaComponent(m.media[i])
                }
                mediaBackgroundStyle={{ backgroundColor: green[400] }}
                style={{ backgroundColor: green[600] }}
                título = "Multimedia"
              />)
        }
        return slide;
      }
    
    
    const getMediaComponent = (url) => {
        if (url.includes('.mp4')) {
          return (<Player
            playsInline
            poster="/assets/poster.png"
            src={url}
            fluid={false}
            width={640}
            height={360}
          />)
        } else {
          return <img src={url} alt="alt"/>
        }
      }

  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Cerrar"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        landscape={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        {getMedia()}
      </AutoRotatingCarousel>
    </div>
  );
};

function Prueba(media) {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Button onClick={handleClick}>Multimedia</Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
        m ={media}
      />
    </>
  );
}

export default Prueba;