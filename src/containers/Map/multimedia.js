import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AutoRotatingCarousel} from "material-auto-rotating-carousel";
import { Player } from 'video-react';
import {ImgPopupSytle, DivPrueba} from './map.style';
import { useTranslation } from 'react-i18next';

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile, m}) => {
  const { t } = useTranslation();
  
    function getMedia(t){
        var slide = []
        if(m.media.length === 0){
          slide.push( <DivPrueba><h2>{t('route.nomedia')}</h2></DivPrueba>)
        }
        for (var i = 0; i < m.media.length ; i++) {
              slide.push( <DivPrueba>{getMediaComponent(m.media[i])}</DivPrueba>)
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
          return <ImgPopupSytle src={url}  alt="alt"/>
        }
      }

  return (
    <div>
      {}
      <AutoRotatingCarousel
        label={t('route.close')}
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        landscape={false}
        mobile={isMobile}
        style={{ width: "center"}}
        containerStyle={{margin: "auto"}}>
        {getMedia(t)}
      </AutoRotatingCarousel>
    </div>
  );
};

function Slider(media) {
  const { t } = useTranslation();
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  media = (media === undefined)? [] : media;
  return (
    <>
      <Button onClick={handleClick}>{t('route.multimedia')}</Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
        m ={media}
      />
    </>
  );
}
export default Slider;