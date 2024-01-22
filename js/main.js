
window.addEventListener('load', function () {
    // Erstelle ein Panorama-Objekt

    // Aula
    const aula1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/aula1.JPG');
    const aula2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/aula2.jpg');
    const aula3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/aula3.jpg');
    const aula4 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/aula4.jpg');
    const aula5 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/aula5.jpg');
    // Eingang B Gebäude
    const eingang3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/eingang3.jpg');
    const eingang2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/eingang2.jpg');
    const eingang1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/eingang1.jpg');
    // Bibliothek
    const bibliothek1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/bibliothek1.jpg');
    const bibliothek2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/bibliothek2.jpg');
    const bibliothek3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/bibliothek3.jpg');
    const bibliothek4 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/bibliothek4.jpg');
    const bibliothek5 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/bibliothek5.jpg');
    // 1. Etage
    const flur1_1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/1-flur1.jpg');
    const flur1_2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/1-flur2.jpg');
    const flur1_3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/1-flur3.jpg');
    const flur1_4 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/1-flur4.jpg');
    const flur1_5 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/1-flur5.jpg');
    const flur1_6 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/1-flur6.jpg');
    // Räume
    const computerraum= new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/computerraum.jpg');
    const fachraum= new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/fachraum.jpg');
    const greenscreen= new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/greenscreen.jpg');
    const tonstudio1= new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/tonstudio1.jpg');
    const tonstudio2= new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/tonstudio2.jpg');
    // 2. Etage
    const flur2_1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/2-flur1.jpg');
    const flur2_2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/2-flur2.jpg');
    const flur2_3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/2-flur3.jpg');
    // Treppenhaus
    const treppenhaus1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/treppenhaus1.jpg');
    const treppenhaus2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/treppenhaus2.jpg');
    const treppenhaus3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/treppenhaus3.jpg');
    const treppenhaus4 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/treppenhaus4.jpg');
    const treppenhaus5 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/treppenhaus5.jpg');
    // Dach
    const dach1 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/dach1.jpg');
    const dach2 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/dach2.jpg');
    const dach3 = new PANOLENS.ImagePanorama('https://github.com/TravikSkoot/bm-street-view/assets/images/dach3.jpg');

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