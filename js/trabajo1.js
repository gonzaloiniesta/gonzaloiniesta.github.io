import * as THREE from "../lib/three.module.js";
import {OrbitControls} from "../lib/OrbitControls.module.js";
import {GLTFLoader} from "../lib/GLTFLoader.module.js";
import {TWEEN} from "../lib/tween.module.min.js";
import {GUI} from "../lib/lil-gui.module.min.js";


function init()
{
    // Instanciar el motor de render
    const path ='./images/skybox/'
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.getElementById('container').appendChild( renderer.domElement );

    
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');


    var ambiColor = "#ffffff";
    var ambientLight = new THREE.AmbientLight(ambiColor);
    scene.add(ambientLight);

    
    camera= new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,100);
    camera.position.set(-10,5,0);
    camera.lookAt(-1, 5, 0);

    const paredes = [];
    paredes.push( new THREE.MeshBasicMaterial({side:THREE.BackSide,
                  map: new THREE.TextureLoader().load(path+"galaxy+X.jpg")}) );
    paredes.push( new THREE.MeshBasicMaterial({side:THREE.BackSide,
                  map: new THREE.TextureLoader().load(path+"galaxy-X.jpg")}) );
    paredes.push( new THREE.MeshBasicMaterial({side:THREE.BackSide,
                  map: new THREE.TextureLoader().load(path+"galaxy+Y.jpg")}) );
    paredes.push( new THREE.MeshBasicMaterial({side:THREE.BackSide,
                  map: new THREE.TextureLoader().load(path+"galaxy-Y.jpg")}) );
    paredes.push( new THREE.MeshBasicMaterial({side:THREE.BackSide,
                  map: new THREE.TextureLoader().load(path+"galaxy+Z.jpg")}) );
    paredes.push( new THREE.MeshBasicMaterial({side:THREE.BackSide,
                  map: new THREE.TextureLoader().load(path+"galaxy-Z.jpg")}) );
    const habitacion = new THREE.Mesh( new THREE.BoxGeometry(40,40,40),paredes);
    scene.add(habitacion);

     // Cine
     video = document.createElement('video');
     video.src = "./videos/StarWars.mp4";
     video.load();
     video.muted = true;
     video.play();
     const texvideo = new THREE.VideoTexture(video);
     const pantalla = new THREE.Mesh(new THREE.PlaneGeometry(20,6, 4,4), 
                                     new THREE.MeshBasicMaterial({map:texvideo}));
     pantalla.position.set(19.5, 5, 0);
     pantalla.rotation.y = -Math.PI/2;
     scene.add(pantalla);

    // Eventos
    //renderer.domElement.addEventListener('dblclick', animate );
}


function loadScene()
{
    // Material sencillo
    const material = new THREE.MeshBasicMaterial({color:'black',wireframe:true});

    // Suelo
    const suelo = new THREE.Mesh( new THREE.PlaneGeometry(150,150, 150, 150), material);
    suelo.rotation.x = -Math.PI/2;
    suelo.position.y = -0.2;
    scene.add(suelo);

    scene.add( new THREE.AxesHelper(3) );


    //cameraControls = new OrbitControls( camera, renderer.domElement );
    //cameraControls.target.set(0,1,0);
    
    // Importar un modelo en gltf
    nave = new GLTFLoader();
    nave.load( 'models/nave/scene.gltf', function ( gltf ) {
        gltf.scene.name = 'nave';
        gltf.scene.scale.set(0.004, 0.004, 0.004);
        gltf.scene.rotation.x = Math.PI/2;
        gltf.scene.rotation.y = -Math.PI/2;
        gltf.scene.rotation.z = 0;

        gltf.scene.position.x = -4;
        gltf.scene.position.y = 0;
        gltf.scene.position.z = 3;

        suelo.add( gltf.scene );
    
    }, undefined, function ( error ) {
    
        console.error( error );
    
    } );

    asteroide1 = new GLTFLoader();
    asteroide1.load( 'models/asteroide/scene.gltf', function ( asteroide ) {
        asteroide.scene.name = 'asteroide1';
        asteroide.scene.position.x = 16;
        asteroide.scene.position.y = -15;
        asteroide.scene.position.z = 3;
        suelo.add( asteroide.scene );

    }, undefined, function ( error ) {

    console.error( error );

    } );

    asteroide2 = new GLTFLoader();
    asteroide2.load( 'models/asteroide/scene.gltf', function ( asteroide2 ) {
        asteroide2.scene.name = 'asteroide2';
        asteroide2.scene.position.x = 4;
        asteroide2.scene.position.y = 15;
        asteroide2.scene.position.z = 3;
        suelo.add( asteroide2.scene );

    }, undefined, function ( error ) {

    console.error( error );

    } );

    asteroide3 = new GLTFLoader();
    asteroide3.load( 'models/asteroide/scene.gltf', function ( asteroide3 ) {
        asteroide3.scene.name = 'asteroide3';
        asteroide3.scene.position.x = -14;
        asteroide3.scene.position.y = 2;
        asteroide3.scene.position.z = 3;
        suelo.add( asteroide3.scene );

    }, undefined, function ( error ) {

    console.error( error );

    } );

    asteroide4 = new GLTFLoader();
    asteroide4.load( 'models/asteroide/scene.gltf', function ( asteroide4 ) {
        asteroide4.scene.name = 'asteroide4';
        asteroide4.scene.position.x = -5;
        asteroide4.scene.position.y = -10;
        asteroide4.scene.position.z = 3;
        suelo.add( asteroide4.scene );

    }, undefined, function ( error ) {

    console.error( error );

    } );

}


function setupGUI()
{
	// Definicion de los controles
	effectController = {
		mensaje: 'My cinema',
		balanceo: 0.0,
	    velocidad: 0.0,
		sombras: true,
		play: function(){video.play();},
		pause: function(){video.pause();},
        mute: true,
		colorsuelo: "rgb(150,150,150)"
	};

	// Creacion interfaz
	const gui = new GUI();

	// Construccion del menu
	const h = gui.addFolder("Control Nave");
	h.add(effectController, "mensaje").name("Aplicacion");
	h.add(effectController, "balanceo", -0.525, 0.525, 0.025).name("Balanceo de la nave");
    
	
    const h2 = gui.addFolder("Control Asteroides");
    h2.add(effectController, "velocidad", 0, 0.1, 0.01).name("Velocidad de la orbita");

    const videofolder = gui.addFolder("Control video");
    videofolder.add(effectController,"mute").onChange(v=>{video.muted = v});
	videofolder.add(effectController,"play");
	videofolder.add(effectController,"pause");

}


function render()
{
    requestAnimationFrame(render);
    updateAsteroide()
    update();
    renderer.render(scene,camera);
}


function updateAsteroide()
{
    angulo += effectController.velocidad;
    let a = scene.getObjectByName('asteroide1');
    a.rotation.x = angulo;
    a.rotation.y = angulo;
    a.rotation.z = angulo;
    a = scene.getObjectByName('asteroide2');
    a.rotation.x = angulo;
    a.rotation.y = angulo;
    a.rotation.z = angulo;
    a = scene.getObjectByName('asteroide3');
    a.rotation.x = angulo;
    a.rotation.y = angulo;
    a.rotation.z = angulo;
    a = scene.getObjectByName('asteroide4');
    a.rotation.x = angulo;
    a.rotation.y = angulo;
    a.rotation.z = angulo;
    
}

function update(){
    nave = scene.getObjectByName('nave');
    console.log(nave.position);
    nave.rotation.y = -Math.PI/2 + effectController.balanceo ;
    nave.rotation.x = Math.PI/2 + effectController.balanceo;

    TWEEN.update();
}

// Variables estandar
let renderer, scene, camera, video;

// Otras globales
let cameraControls, effectController;
let asteroide1, asteroide2, asteroide3, asteroide4, nave;
let angulo = 0;

init();
loadScene();
setupGUI();
render();