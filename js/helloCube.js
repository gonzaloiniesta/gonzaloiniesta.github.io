import * as THREE from "../lib/three.module.js";
import {GLTFLoader} from "../lib/GLTFLoader.module.js";
import {OrbitControls} from "../lib/OrbitControls.module.js";
import {TWEEN} from "../lib/tween.module.min.js";
import {GUI} from "../lib/lil-gui.module.min.js";





//create scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);


var loader = new THREE.TextureLoader();
loader.load("./images/cielo.png", function(texture){
    scene.background = texture;
});


//add camera
var camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,100);
camera.position.set(0.5,2,7);


//renderer
var rendered = new THREE.WebGLRenderer();
rendered.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(rendered.domElement);


var cameraControls = new OrbitControls( camera, rendered.domElement );
cameraControls.target.set(0,0,0);
camera.lookAt(0,1,0);

window.addEventListener('resize', redimensionar);

function redimensionar(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    rendered.setSize(window.innerWidth, window.innerHeight);
    rendered.render(scene, camera);
}

//add geometry
var geometry = new THREE.BoxGeometry(3, 3, 3, 5, 5, 5);
var material = new THREE.MeshBasicMaterial({
    color:0x00ff00, 
    wireframe: true
});

var cube = new THREE.Mesh(geometry, material);
cube.position.x = -2.5;
scene.add(cube);


var circle = new THREE.Mesh(new THREE.CircleGeometry(2, 50, 0, Math.PI), material);
circle.position.x = 2.5;
//cube.add(circle);


var plano = new THREE.Mesh(new THREE.PlaneGeometry(2, 2, 3, 5), material);
scene.add(plano);
plano.position.y = -2.5;
camera.position.z = 15;


//animation
//var i = 0;
var animate = function(){
    requestAnimationFrame(animate);

    scene.traverse(function (objeto){
        if(objeto.isMesh == true){
            objeto.rotation.x += 0.01;
            objeto.rotation.y += 0.01;
        }
    })
    //camera.position.x = Math.cos(i) * 30;
    //camera.position.z = Math.sin(i) * 30;
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //i+=0.01;
    //circle.rotation.x += 0.01;
    //circle.rotation.y += 0.01;
    rendered.render(scene, camera);
}

animate();

/*
var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 30000 );
camera.position.set(1, 1, 1);

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
        
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial()
        
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

orbit = new OrbitControls(camera, renderer.domElement)

const loader = new THREE.TextureLoader()
loader.load('http://127.0.0.1:5500/gonzaloiniesta.github.io/images/chess.png', (texture)=>{
        material.map = texture
        animate()
    })

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}


*/
