const THREE = require('three')
// const loader = new THREE.JSONLoader()
const store = require('../../../store')
const floor = new THREE.Object3D
function createCubeMap(folderName,bottom) 
{
    var path = "sky/"+folderName+"/";
    var format = '.jpg';
    var urls =  
    [
        path + 'posx' + format,
        path + 'negx' + format,
        path + 'posy' + format,
        path + 'negy' + format,
        path + 'posz' + format,
        path + 'negz' + format
    ];
    if (bottom&&bottom==true) { urls[3] = path + 'negy.png';}

    var loader = new THREE.CubeTextureLoader();
    var textureCube = loader.load(urls);
    textureCube.format = THREE.RGBFormat;
    textureCube.mapping = THREE.CubeReflectionMapping;
    return textureCube;
}

/*
var textureLoader = new THREE.TextureLoader();
var textureEquirec = textureLoader.load( "sky.jpg" );
textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
textureEquirec.magFilter = THREE.LinearFilter;
textureEquirec.minFilter = THREE.LinearMipMapLinearFilter;
*/

/*
var shader =  THREE.ShaderLib["equirect"]
shader.uniforms["tEquirect"].value = textureEquirec
var material = new THREE.ShaderMaterial( 
{
  fragmentShader: shader.fragmentShader,
  vertexShader: shader.vertexShader,
  uniforms: shader.uniforms,
  depthWrite: false,
  side: THREE.BackSide
})
*/

var textureCube = createCubeMap('type3',true);

var shader = THREE.ShaderLib["cube"];
shader.uniforms["tCube"].value = textureCube;
var material = new THREE.ShaderMaterial(
{
  fragmentShader: shader.fragmentShader,
  vertexShader: shader.vertexShader,
  uniforms: shader.uniforms,
  depthWrite: false,
  side: THREE.BackSide
});
// create the skybox
const skybox = new THREE.Mesh(new THREE.BoxGeometry(300000, 300000, 300000), material);



/** this part is for the floor *****************************************************/
var floorMat = new THREE.MeshStandardMaterial( 
{
  roughness: 0.8,
  color: 0xffffff,
  metalness: 0.2,
  bumpScale: 0.0005,
});

var textureLoader = new THREE.TextureLoader()
textureLoader.load("floor/hardwood2_diffuse.jpg",function(map)
{
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set( 10, 24 );
  floorMat.map = map;
  floorMat.needsUpdate = true;
})

textureLoader.load( "floor/hardwood2_bump.jpg", function( map ) 
{
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set( 10, 24 );
  floorMat.bumpMap = map;
  floorMat.needsUpdate = true;
});

textureLoader.load( "floor/hardwood2_roughness.jpg", function( map ) 
{
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 4;
  map.repeat.set( 10, 24 );
  floorMat.roughnessMap = map;
  floorMat.needsUpdate = true;
});

var floorMesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 300000, 300000 ), floorMat );

floorMesh.receiveShadow = true;
floorMesh.rotation.x = -Math.PI/2.0;


// create the ground plane for test
var planeGeometry = new THREE.PlaneGeometry(200000, 200000, 20, 20);
var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI/2.0;

const situation = module.exports = new THREE.Object3D();
situation.add(floorMesh,skybox);


