    /*

    An interactive, visual representation of the bm Cologne in 360°
    Copyright © 2024 Thiemo Küpper

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

    */

window.addEventListener('load', function () {

    let progressElement = document.getElementById('progress');
    function onEnter () {

        progressElement.style.width = 0;
        progressElement.classList.remove( 'finish' );

    }

    function onProgress ( event ) {

        let progress = event.progress.loaded / event.progress.total * 100;
        progressElement.style.width = progress + '%';
        if ( progress === 100 ) {
            progressElement.classList.add( 'finish' );
        }

    }

    // Panoramen
    // Aula
    const aula1 = new PANOLENS.ImagePanorama('/assets/images/aula1.jpg');
    aula1.addEventListener( 'progress', onProgress );
    aula1.addEventListener( 'enter', onEnter );
    const aula2 = new PANOLENS.ImagePanorama('/assets/images/aula2.jpg');
    aula2.addEventListener( 'progress', onProgress );
    aula2.addEventListener( 'enter', onEnter );
    const aula3 = new PANOLENS.ImagePanorama('/assets/images/aula3.jpg');
    aula3.addEventListener( 'progress', onProgress );
    aula3.addEventListener( 'enter', onEnter );
    const aula4 = new PANOLENS.ImagePanorama('/assets/images/aula4.jpg');
    aula4.addEventListener( 'progress', onProgress );
    aula4.addEventListener( 'enter', onEnter );
    const aula5 = new PANOLENS.ImagePanorama('/assets/images/aula5.jpg');
    aula5.addEventListener( 'progress', onProgress );
    aula5.addEventListener( 'enter', onEnter );
    // Eingang B Gebäude
    const eingang3 = new PANOLENS.ImagePanorama('/assets/images/eingang3.jpg');
    eingang3.addEventListener( 'progress', onProgress );
    eingang3.addEventListener( 'enter', onEnter );
    const eingang4 = new PANOLENS.ImagePanorama('/assets/images/eingang4.jpg');
    eingang4.addEventListener( 'progress', onProgress );
    eingang4.addEventListener( 'enter', onEnter );
    const eingang2 = new PANOLENS.ImagePanorama('/assets/images/eingang2.jpg');
    eingang2.addEventListener( 'progress', onProgress );
    eingang2.addEventListener( 'enter', onEnter );
    const eingang1 = new PANOLENS.ImagePanorama('/assets/images/eingang1.jpg');
    eingang1.addEventListener( 'progress', onProgress );
    eingang1.addEventListener( 'enter', onEnter );
    // Bibliothek
    const bibliothek1 = new PANOLENS.ImagePanorama('/assets/images/bibliothek1.jpg');
    bibliothek1.addEventListener( 'progress', onProgress );
    bibliothek1.addEventListener( 'enter', onEnter );
    const bibliothek2 = new PANOLENS.ImagePanorama('/assets/images/bibliothek2.jpg');
    bibliothek2.addEventListener( 'progress', onProgress );
    bibliothek2.addEventListener( 'enter', onEnter );
    const bibliothek3 = new PANOLENS.ImagePanorama('/assets/images/bibliothek3.jpg');
    bibliothek3.addEventListener( 'progress', onProgress );
    bibliothek3.addEventListener( 'enter', onEnter );
    const bibliothek4 = new PANOLENS.ImagePanorama('/assets/images/bibliothek4.jpg');
    bibliothek4.addEventListener( 'progress', onProgress );
    bibliothek4.addEventListener( 'enter', onEnter );
    const bibliothek5 = new PANOLENS.ImagePanorama('/assets/images/bibliothek5.jpg');
    bibliothek5.addEventListener( 'progress', onProgress );
    bibliothek5.addEventListener( 'enter', onEnter );
    // 1. Etage
    const flur1_1 = new PANOLENS.ImagePanorama('/assets/images/1-flur1.jpg');
    flur1_1.addEventListener( 'progress', onProgress );
    flur1_1.addEventListener( 'enter', onEnter );
    const flur1_2 = new PANOLENS.ImagePanorama('/assets/images/1-flur2.jpg');
    flur1_2.addEventListener( 'progress', onProgress );
    flur1_2.addEventListener( 'enter', onEnter );
    const flur1_3 = new PANOLENS.ImagePanorama('/assets/images/1-flur3.jpg');
    flur1_3.addEventListener( 'progress', onProgress );
    flur1_3.addEventListener( 'enter', onEnter );
    const flur1_4 = new PANOLENS.ImagePanorama('/assets/images/1-flur4.jpg');
    flur1_4.addEventListener( 'progress', onProgress );
    flur1_4.addEventListener( 'enter', onEnter );
    const flur1_5 = new PANOLENS.ImagePanorama('/assets/images/1-flur5.jpg');
    flur1_5.addEventListener( 'progress', onProgress );
    flur1_5.addEventListener( 'enter', onEnter );
    const flur1_6 = new PANOLENS.ImagePanorama('/assets/images/1-flur6.jpg');
    flur1_6.addEventListener( 'progress', onProgress );
    flur1_6.addEventListener( 'enter', onEnter );
    // Räume
    const computerraum= new PANOLENS.ImagePanorama('/assets/images/computerraum.jpg');
    computerraum.addEventListener( 'progress', onProgress );
    computerraum.addEventListener( 'enter', onEnter );
    const fachraum= new PANOLENS.ImagePanorama('/assets/images/fachraum.jpg');
    fachraum.addEventListener( 'progress', onProgress );
    fachraum.addEventListener( 'enter', onEnter );
    const greenscreen= new PANOLENS.ImagePanorama('/assets/images/greenscreen.jpg');
    greenscreen.addEventListener( 'progress', onProgress );
    greenscreen.addEventListener( 'enter', onEnter );
    const tonstudio1= new PANOLENS.ImagePanorama('/assets/images/tonstudio1.jpg');
    tonstudio1.addEventListener( 'progress', onProgress );
    tonstudio1.addEventListener( 'enter', onEnter );
    const tonstudio2= new PANOLENS.ImagePanorama('/assets/images/tonstudio2.jpg');
    tonstudio2.addEventListener( 'progress', onProgress );
    tonstudio2.addEventListener( 'enter', onEnter );
    // 2. Etage
    const flur2_1 = new PANOLENS.ImagePanorama('/assets/images/2-flur1.jpg');
    flur2_1.addEventListener( 'progress', onProgress );
    flur2_1.addEventListener( 'enter', onEnter );
    const flur2_2 = new PANOLENS.ImagePanorama('/assets/images/2-flur2.jpg');
    flur2_2.addEventListener( 'progress', onProgress );
    flur2_2.addEventListener( 'enter', onEnter );
    const flur2_3 = new PANOLENS.ImagePanorama('/assets/images/2-flur3.jpg');
    flur2_3.addEventListener( 'progress', onProgress );
    flur2_3.addEventListener( 'enter', onEnter );
    // Treppenhaus
    const treppenhaus1 = new PANOLENS.ImagePanorama('/assets/images/treppenhaus1.jpg');
    treppenhaus1.addEventListener( 'progress', onProgress );
    treppenhaus1.addEventListener( 'enter', onEnter );
    const treppenhaus2 = new PANOLENS.ImagePanorama('/assets/images/treppenhaus2.jpg');
    treppenhaus2.addEventListener( 'progress', onProgress );
    treppenhaus2.addEventListener( 'enter', onEnter );
    const treppenhaus3 = new PANOLENS.ImagePanorama('/assets/images/treppenhaus3.jpg');
    treppenhaus3.addEventListener( 'progress', onProgress );
    treppenhaus3.addEventListener( 'enter', onEnter );
    const treppenhaus4 = new PANOLENS.ImagePanorama('/assets/images/treppenhaus4.jpg');
    treppenhaus4.addEventListener( 'progress', onProgress );
    treppenhaus4.addEventListener( 'enter', onEnter );
    const treppenhaus5 = new PANOLENS.ImagePanorama('/assets/images/treppenhaus5.jpg');
    treppenhaus5.addEventListener( 'progress', onProgress );
    treppenhaus5.addEventListener( 'enter', onEnter );
    // Dach
    const dach1 = new PANOLENS.ImagePanorama('/assets/images/dach1.jpg');
    dach1.addEventListener( 'progress', onProgress );
    dach1.addEventListener( 'enter', onEnter );
    const dach2 = new PANOLENS.ImagePanorama('/assets/images/dach2.jpg');
    dach2.addEventListener( 'progress', onProgress );
    dach2.addEventListener( 'enter', onEnter );
    const dach3 = new PANOLENS.ImagePanorama('/assets/images/dach3.jpg');
    dach3.addEventListener( 'progress', onProgress );
    dach3.addEventListener( 'enter', onEnter );

    // Erstelle einen Panolens-Viewer
    const viewer = new PANOLENS.Viewer({
        container: document.body,  // Setze den Container auf den Body für Vollbild
        autoHideInfospot: false,   // Infospots nicht automatisch verstecken
        autoRotate: true,          // Automatische Rotation
        autoRotateSpeed: 0.2,     // Automatische Rotationsgeschwindigkeit
        cameraFov: 75,             // Sichtfeld der Kamera einstellen
        controlBar: true         // Kontrollleiste anzeigen
    });
    // Füge die Panoramen zum Viewer hinzu
    viewer.add(aula1,aula2,aula3,aula4,aula5,
        eingang3,eingang2,eingang1,
        flur1_1,flur1_2,flur1_3,flur1_4,flur1_5,flur1_6,
        flur2_1,flur2_2,flur2_3,
        treppenhaus1,treppenhaus2,treppenhaus3,treppenhaus4,treppenhaus5,
        bibliothek1,bibliothek2,bibliothek3,bibliothek4,bibliothek5,
        dach1,dach2,dach3,
        tonstudio1,tonstudio2,
        fachraum,computerraum,greenscreen);

    // Ausrichtung der Kamera im Panorama
    aula1.addEventListener('enter-fade-start', function(){
        viewer.tweenControlCenter( new THREE.Vector3(15, 0, 0), 0 );
    });
    aula2.addEventListener('enter-fade-start', function(){
        viewer.tweenControlCenter( new THREE.Vector3(1, 0, 0), 0 );
    });
    aula3.addEventListener('enter-fade-start', function(){
        viewer.tweenControlCenter( new THREE.Vector3(0, 0, -2), 0 );
    });
    aula4.addEventListener('enter-fade-start', function(){
        viewer.tweenControlCenter( new THREE.Vector3(-2, 0, 0), 0 );
    });
    aula5.addEventListener('enter-fade-start', function(){
        viewer.tweenControlCenter( new THREE.Vector3(-3, 0, -3), 0 );
    });

    // Anklickbare Infospots
    aula1.link(aula2, new THREE.Vector3(2500, -400, 3000));
    aula1.link(aula5, new THREE.Vector3(5000, -400, -1500));

    aula2.link(aula1, new THREE.Vector3(-1750, -1000, -4000));
    aula2.link(aula3, new THREE.Vector3(4000, -1000, 500));

    aula3.link(aula2, new THREE.Vector3(-4000, -1000, 0));
    aula3.link(aula4, new THREE.Vector3(800, -1000, -3000));

    aula4.link(aula3, new THREE.Vector3(-500, -1000, 3500));
    aula4.link(aula5, new THREE.Vector3(0, -1000, -3500));

    aula5.link(aula4, new THREE.Vector3(-3500, -1000, 0));
    aula5.link(aula1, new THREE.Vector3(-1500, -1000, -6000));
    aula5.link(eingang3, new THREE.Vector3(0, -1000, 5000));

    eingang3.link(aula5, new THREE.Vector3(-1500, -1000, -4000));
    eingang3.link(eingang2, new THREE.Vector3(-1500, -1000, -4000));
    eingang3.link(flur1_1, new THREE.Vector3(-3000, 1000, 500));

    flur1_1.link(eingang3, new THREE.Vector3(3000, -2000, -250));
    flur1_1.link(eingang3, new THREE.Vector3(3000, -2000, -250));
    flur1_1.link(flur1_2, new THREE.Vector3(3000, 1000, 500));

    flur1_2.link(flur1_1, new THREE.Vector3(-3250, -2000, 250));
    flur1_2.link(flur1_3, new THREE.Vector3(500, -1000, 4000));

    flur1_3.link(flur1_2, new THREE.Vector3(-4000, -1000, 0));
    flur1_3.link(flur1_4, new THREE.Vector3(4000, -1000, 0));

    flur1_4.link(flur1_3, new THREE.Vector3(4000, -1000, 0));
    flur1_4.link(flur1_5, new THREE.Vector3(-4000, -1000, 0));

    flur1_5.link(flur1_4, new THREE.Vector3(1000, -1000, 4000));
    flur1_5.link(flur1_6, new THREE.Vector3(-3500, -2000, 500));

    flur1_6.link(flur1_5, new THREE.Vector3(-500, 200, -4000));
    flur1_6.link(computerraum, new THREE.Vector3(-4000, -1000, 1500));

    computerraum.link(flur1_6, new THREE.Vector3(-4000, -1000, 1000));

});