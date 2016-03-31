const THREE = require('three')
const controller = require('../../controller')
const store = require('../../../store')

const lights = module.exports = new THREE.Object3D()

//定义一个空对象，该对象是光源的照射对象
var target = new THREE.Object3D();
target.position.set( 0, 0, 0 );

//定义一个聚光灯-----用于对环境的提亮
const spotLight = Object.assign(new THREE.SpotLight(0xFFFFFF,1), 
{
	distance:0,					//光强会从光源位置到distance距离线性衰减为0-------distance：0表示无限远
	angle:Math.PI/3,
	exponent:10,				//光强从聚光中心向外的衰减度
	decay:1,
  	castShadow: false,			//光量的线性衰减度？？？-----不是很明白
  	shadowCameraNear: 0,
  	shadowCameraFar: 0,
  	shadowCameraFov: 90,
  	shadowBias: 0
})
spotLight.target = target;

//定义一个方向光-----环境的投影主光源
var nowHour = (new Date()).getHours();
var sunPosX = 0;
var sunPosY = 100000;
var sunIntensity = 0.3;
var sunShadow = false;
if (7<=nowHour&&nowHour<=17)
{
	sunPosX = Math.cos((nowHour-6)/12*Math.PI)*100000;
	sunPosY = Math.sin((nowHour-6)/12*Math.PI)*100000;
	sunIntensity = 1-(Math.abs(nowHour-12)/6*0.7);
	sunShadow = true;
}
const downLight = Object.assign(new THREE.DirectionalLight(0xFFFFFF,sunIntensity),
{
	castShadow:sunShadow,
	shadowCameraVisible:true,
	shadowCameraNear:0,
	shadowCameraFar:200000,
	shadowBias: 0.01,

	shadowCameraLeft:-300000,
	shadowCameraRight:300000,
	shadowCameraTop: 300000,
	shadowCameraBottom:-300000,

	shadowMapHeight:1024,
	shadowMapWidth:1024
});
downLight.target = target;

//聚光和方向光共同用来模拟太阳照射
const sun = new THREE.Object3D();
sun.add(downLight);
sun.position.set(sunPosX,sunPosY,20000);

//定义一个半球光
var hemiLight = new THREE.HemisphereLight( 0x1496FF, 0xE7E7E7, 0.2 );

//定义一个环境光
var ambientLight = new THREE.AmbientLight('#191919')

lights.add(hemiLight,ambientLight,sun)

