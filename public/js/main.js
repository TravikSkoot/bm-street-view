
window.addEventListener('load', function () {
    // Erstelle ein Panorama-Objekt
    const aula1 = new PANOLENS.ImagePanorama('../public/assets/images/aula1.JPG');
    const aula2 = new PANOLENS.ImagePanorama('../public/assets/images/aula2.jpg');
    const aula3 = new PANOLENS.ImagePanorama('../public/assets/images/aula3.jpg');
    const aula4 = new PANOLENS.ImagePanorama('../public/assets/images/aula4.jpg');
    const aula5 = new PANOLENS.ImagePanorama('../public/assets/images/aula5.jpg');

    // Erstelle einen Panolens-Viewer
    const viewer = new PANOLENS.Viewer({
        container: document.body,  // Setze den Container auf den Body für Vollbild
        autoHideInfospot: false,   // Infospots nicht automatisch verstecken
        //autoRotate: true,          // Automatische Rotation
        autoRotateSpeed: 0.2,     // Automatische Rotationsgeschwindigkeit
        cameraFov: 75,             // Sichtfeld der Kamera einstellen
        controlBar: true         // Kontrollleiste anzeigen
    });
    // Füge das Panorama zum Viewer hinzu
    viewer.add(aula1,aula2,aula3,aula4,aula5);

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

});