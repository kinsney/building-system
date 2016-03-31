var YColor = 0x47DF4E;
var XColor = 0xDF6418;
var ZColor = 0x116EFE;
var originPos = new THREE.Vector3(0,0,0);
var Ydirect = new THREE.Vector3(0,1,0);
var Xdirect = new THREE.Vector3(1,0,0);
var Zdirect = new THREE.Vector3(0,0,1);
var arrowY = new THREE.ArrowHelper(Ydirect,originPos,10000,YColor,1000,500);
var arrowX = new THREE.ArrowHelper(Xdirect,originPos,10000,XColor,1000,500);
var arrowZ = new THREE.ArrowHelper(Zdirect,originPos,10000,ZColor,1000,500);

const myAxes = module.exports = new THREE.Object3D();
myAxes.add(arrowY,arrowX,arrowZ);