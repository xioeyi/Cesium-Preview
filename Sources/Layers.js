(function() {
    "use strict";


    var guge=new Cesium.UrlTemplateImageryProvider({            	
        url:'http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}',  
        tilingScheme:new Cesium.WebMercatorTilingScheme(),            	
        minimumLevel:1,            
        maximumLevel:20        
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
    viewer.scene.debugShowFramesPerSecond = true;   // Display FPS;
    



} ());