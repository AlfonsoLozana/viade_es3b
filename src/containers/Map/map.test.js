import React from 'react';
import { render, cleanup,fireEvent, waitForDomChange } from 'react-testing-library';
import { HashRouter as Router } from 'react-router-dom';
import Map from './map.container';
import MapaComponent from './map.component';
import Slider from './multimedia'
import Rutas from './../../components/Ruta/rutas';
import getJsonRoute from './../../utils/defaultJsonRoute'
import getJsonComments from './../../utils/defaultJsonComments'
import { Point,WayPoint } from './../../components/Ruta/point';

describe('Map', () => {
  afterAll(cleanup);
  const media = ['https://fotografias.lasexta.com/clipping/cmsimages02/2019/11/14/66C024AF-E20B-49A5-8BC3-A21DD22B96E6/58.jpg'];
  const user = "https://viadees3b.solid.community/profile/card#me";
  let point = new Point(42.317773, -5.463091,4);
  let wayPoint = new WayPoint("Way point","Descripción",point);
  let aux = [];
  aux.push([43.317773,-3.6])
  aux.push([43.317773-3,6])
  let ruta2 = getJsonRoute('ruta2','descripcion ruta 2','Alfonso Lozana',aux,["multimedia2"],[new WayPoint("Way point","Descripción",wayPoint)])
  let ruta1 = getJsonRoute('ruta1','descripcion ruta 1','Alfonso Lozana',aux,media,[new WayPoint("Way point","Descripción",wayPoint)])
  let rutas = new Rutas([ruta1,ruta2],[JSON.parse(getJsonComments()),JSON.parse(getJsonComments())],['ruta1','ruta2'],false,null);
  

  const { container } = render(
    <Router>
      <Map {... {user}} />
    </Router>
  );

  const { component } = render(
    <Router>
      <MapaComponent {...{rutas}}></MapaComponent> 
    </Router>
  );

  const { multimedia } = render(
    <Router>
      <Slider {...{media}}></Slider> 
    </Router>
  );



  test('Map container renders without crashing', () => {
    //getByTestId("name").value = 'route1';
  });

  /*test('Multimedia container renders without crashing', () => {
    expect(multimedia).toBeTruthy();
  });*/
});
