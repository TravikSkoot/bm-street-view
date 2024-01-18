window.addEventListener('load', function () {
    // Erstelle ein Panorama-Objekt
    const panorama1 = new PANOLENS.ImagePanorama('../src/assets/images/aula1.jpg');
    const panorama2 = new PANOLENS.ImagePanorama('../src/assets/images/aula2.jpg');
    const panorama3 = new PANOLENS.ImagePanorama('../src/assets/images/aula3.jpg');
    const panorama4 = new PANOLENS.ImagePanorama('../src/assets/images/aula4.jpg');
    const panorama5 = new PANOLENS.ImagePanorama('../src/assets/images/aula5.jpg');

    var infospotPositions = [
        new THREE.Vector3(2500, 0, 3000),
        new THREE.Vector3(-1750, -1000, -4000),
    ]

    // Erstelle einen Panolens-Viewer
    const viewer = new PANOLENS.Viewer({
        container: document.querySelector('.panorama-container'),  // Setze den Container auf den Body für Vollbild
        autoHideInfospot: false,   // Infospots nicht automatisch verstecken
        //autoRotate: true,          // Automatische Rotation
        autoRotateSpeed: 0.2,     // Automatische Rotationsgeschwindigkeit
        cameraFov: 75,             // Sichtfeld der Kamera einstellen
        controlBar: true         // Kontrollleiste anzeigen

    });

    panorama1.link(panorama2, infospotPositions[0]);
    panorama2.link(panorama1, infospotPositions[1]);
    panorama3.link(panorama3, infospotPositions[2]);
    panorama4.link(panorama3, infospotPositions[3]);
    panorama5.link(panorama1, infospotPositions[4]);

    // Füge das Panorama zum Viewer hinzu
    viewer.add(panorama1,panorama2,panorama3,panorama4,panorama5);
});