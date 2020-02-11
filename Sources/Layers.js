(function () {
    "use strict";


    var guge = new Cesium.UrlTemplateImageryProvider({
        url: 'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}',
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        minimumLevel: 1,
        maximumLevel: 20
    });


    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhMjM5OWRlZi1jMTZiLTRlNDQtYjE3OC03ZTFmMmMyOGU3ODEiLCJpZCI6MTkxOTEsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzUxMjA4MDd9.VwZOjNxQ7uMJ5iM1lYRMplZvLWXHUQzdUo_maFjgtuI';
    var viewer = new Cesium.Viewer('cesiumContainer', {
        animation: false,
        baseLayerPicker: false,
        vrButton: true,
        geocoder: true,
        infoBox: true,
        sceneModePicker: false,
        timeline: false,
        imageryProvider: guge,

    });
    viewer._cesiumWidget._creditContainer.style.display = "none";
    viewer.scene.debugShowFramesPerSecond = true; // Display FPS;

    //viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

    //add entities
    var redBox = viewer.entities.add({
        name: 'Red box in LinYi',
        position: Cesium.Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
        box: {
            dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
            material: Cesium.Color.RED.withAlpha(0.7),
            outline: true,
            outlineColor: Cesium.Color.BLUE
        }
    });

    //viewer.zoomTo(viewer.entities);

    // Creat an initial camera view
    var initialPosition = new Cesium.Cartesian3.fromDegrees(-73.998114468289017509, 40.674512895646692812, 2631.082799425431);
    var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
    var homeCameraView = {
        destination: initialPosition,
        orientation: {
            heading: initialOrientation.heading,
            pitch: initialOrientation.pitch,
            roll: initialOrientation.roll
        }
    };
    // Set the initial view
    viewer.scene.camera.setView(homeCameraView);

    // Override the default home button
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
        e.cancel = true;
        viewer.scene.camera.flyTo(homeCameraView);
    });

    // Load geocache points f interest from a KML file
   // var geocachePromise = Cesium.KmlDataSource.load('./SampleData/sampleGeocacheLocations.kml', kmlOptions);






}());