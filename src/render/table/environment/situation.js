const THREE = require('three')

const store = require('../../../store')
const floor = new THREE.Object3D
var loader = new THREE.CubeTextureLoader()
loader.setPath('sky/');
var textureCube = loader.load(['sunny3_left.jpg','sunny3_right.jpg','sunny3_up.jpg','sunny3_up.jpg','sunny3_front.jpg','sunny3_back.jpg',])
      textureCube.format = THREE.RGBFormat;
        textureCube.mapping = THREE.CubeReflectionMapping;

var textureLoader = new THREE.TextureLoader();
       var  textureEquirec = textureLoader.load( "sky.jpg" );
        textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
        textureEquirec.magFilter = THREE.LinearFilter;
        textureEquirec.minFilter = THREE.LinearMipMapLinearFilter;


var shader =  THREE.ShaderLib["equirect"]
shader.uniforms["tEquirect"].value = textureEquirec

var material = new THREE.ShaderMaterial( {
          fragmentShader: shader.fragmentShader,
          vertexShader: shader.vertexShader,
          uniforms: shader.uniforms,
          depthWrite: false,
          side: THREE.BackSide
        } )

const sky  = new THREE.Mesh(new THREE.BoxGeometry( 20000, 20000, 20000 ),material)


var floorMat = new THREE.MeshStandardMaterial( {
          roughness: 0.8,
          color: 0xffffff,
          metalness: 0.2,
          bumpScale: 0.0005,
        });
var textureLoader = new THREE.TextureLoader()
textureLoader.load("floor/hardwood2_diffuse.jpg",function(map){
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
          map.anisotropy = 4;
          map.repeat.set( 10, 24 );
          floorMat.map = map;
          floorMat.needsUpdate = true;
})
textureLoader.load( "floor/hardwood2_bump.jpg", function( map ) {
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
          map.anisotropy = 4;
          map.repeat.set( 10, 24 );
          floorMat.bumpMap = map;
          floorMat.needsUpdate = true;
        } );
textureLoader.load( "floor/hardwood2_roughness.jpg", function( map ) {
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set( 10, 24 );
  floorMat.roughnessMap = map;
  floorMat.needsUpdate = true;
} );
var floorMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20000, 20000 ), floorMat );
floorMesh.receiveShadow = true;
floorMesh.rotation.x = -Math.PI/2.0;
floor.add(floorMesh)
sky.position.set(0,10000,0)
floor.name = 'floor'
module.exports = floor
