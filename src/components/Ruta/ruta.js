import {Point} from "./point.js";
import { Video, Photo } from "./media.js";

export default class Ruta{
    constructor(file){
        this.points = [];
        file.itinerary.itemListElement.map(p => this.points.push(new Point(p.latitude,p.longitude,0,this.createPhoto(p),this.createVideo(p))));
        this.name = file.name;
        this.description = file.description;
        this.photos = [];
    }

     /** Devuelve un array lista con los archivos de tipo photo pertenecientes a un punto */
     createPhoto(p){
        let media = p.media;
        let exit = [];
        media.itemListElement.map(item  =>  {
            //console.log(item.'@type');
            //if(item.type == "PhotoObject")
        exit.push(new Photo(item.author,item.contentUrl,item.datePublished));
        }); 
        return exit;
    }

      /** Devuelve un array lista con los archivos de tipo viedo pertenecientes a un punto */
      createVideo(p){
        let media = p.media;
        let exit = [];
        media.itemListElement.map(item  =>  {if(item.type == "VideoObject")
        exit.push(new Video(item.author,item.contentUrl,item.datePublished));
        }); 
        return exit;
    }

    
}

