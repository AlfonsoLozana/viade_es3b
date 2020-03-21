import styled from 'styled-components';
import { Map } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


export const MapSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding: 30px 30px;
`;

export const InformationSection = styled.section`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  background:#a4d1d1;
  background-repeat: repeat;
  padding: 30px 30px;
`;



export const Column = styled.div`
        width: 25vw;
        min-width: 400 px !important; 
        float:right;
`;

export const Up = styled.div`
        height: 80vh;   
        width: 100vw;
        float:up;
       
`;

export const Down = styled.div`
        height: 30vh;      
        float:down;
`;



export const H2Format = styled.h2`
      text-align:center;
      font-size: 3rem;
`;

export const H3Format = styled.h3`
      text-align:center;
      font-size: 2rem;
`;

export const MapaStyle = styled(Map)`
        width: 75% !important; 
        height: 80vh !important; 
        float: left;
  `;

export const UlStyle = styled.ul`
        margin-left:15%;
  `;

export const LiStyle = styled.li`
        
        margin:0px;
        padding:3px;
        max-width: 80%;
        border:1px solid#CCCCCC;
        text-align:center;
        border-radius: 2px;
        background: #DED8D0;
        :hover {
                cursor: pointer;
                background: #B8B0A5;
        }   
`;

export const PStyle = styled.p`
margin:10%;
`;

export const ImgSytle = styled.img`
height: 30vh !important; 
`
export const ImgPopupSytle = styled.img`
max-height: 150px; 
max-width: 250px; 
`
export const H1FormatPopup = styled.h1`
      text-align:center;
      font-size: 1rem;
`;

