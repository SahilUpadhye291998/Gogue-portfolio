let containerDave, containerAMK, containerRoy, containerCorrina;
let cameraDave, cameraAMK, cameraRoy, cameraCorrina;
let rendererDave, rendererAMK, rendererRoy, rendererCorrina;
let sceneDave, sceneAMK, sceneRoy, sceneCorrina;
let dave, roy, amk, corrina;
let controls1, controls2, controls3, controls4;

function initCorrina() {
  containerCorrina = document.querySelector(".corrina");

  //Create scene
  sceneCorrina = new THREE.Scene();
  console.log(containerCorrina.clientWidth);
  console.log(containerCorrina.clientHeight);

  const fov = 35;
  const aspect = containerCorrina.clientWidth / containerCorrina.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  cameraCorrina = new THREE.PerspectiveCamera(fov, aspect, near, far);
  cameraCorrina.position.set(0, 30, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  sceneCorrina.add(ambient);
  sceneCorrina.scale.set(2, 2, 2);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(15, 60, 25);
  sceneCorrina.add(light);
  //Renderer
  rendererCorrina = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  rendererCorrina.setSize(
    containerCorrina.clientWidth,
    containerCorrina.clientHeight
  );
  rendererCorrina.setPixelRatio(window.devicePixelRatio);

  controls4 = new THREE.OrbitControls(
    cameraCorrina,
    rendererCorrina.domElement
  );
  controls4.autoRotate = true;

  containerCorrina.appendChild(rendererCorrina.domElement);
  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./asset/mods/Corrina_v2.glb", function (gltf) {
    corrina = gltf.scene.children[0];
    sceneCorrina.add(gltf.scene);
    animate4();
  });
}

function initDave() {
  containerDave = document.querySelector(".dave");

  //Create sceneDave
  sceneDave = new THREE.Scene();
  console.log(containerDave.clientWidth);
  console.log(containerDave.clientHeight);

  const fov = 35;
  const aspect = containerDave.clientWidth / containerDave.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  cameraDave = new THREE.PerspectiveCamera(fov, aspect, near, far);
  cameraDave.position.set(0, 30, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  sceneDave.add(ambient);
  sceneDave.scale.set(3.5, 3.5, 3.5);

  const lightDave = new THREE.DirectionalLight(0xffffff, 2);
  lightDave.position.set(15, 60, 25);
  sceneDave.add(lightDave);
  //Renderer
  rendererDave = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  rendererDave.setSize(containerDave.clientWidth, containerDave.clientHeight);
  rendererDave.setPixelRatio(window.devicePixelRatio);

  controls1 = new THREE.OrbitControls(cameraDave, rendererDave.domElement);
  controls1.autoRotate = true;

  containerDave.appendChild(rendererDave.domElement);
  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./asset/mods/Dave_v2.glb", function (gltf) {
    dave = gltf.scene.children[0];
    sceneDave.add(gltf.scene);
    animate1();
  });
}

function initRoy() {
  containerRoy = document.querySelector(".roy");

  //Create sceneRoy
  sceneRoy = new THREE.Scene();
  console.log(containerRoy.clientWidth);
  console.log(containerRoy.clientHeight);

  const fov = 35;
  const aspect = containerRoy.clientWidth / containerRoy.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  cameraRoy = new THREE.PerspectiveCamera(fov, aspect, near, far);
  cameraRoy.position.set(0, 30, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  sceneRoy.add(ambient);
  sceneRoy.scale.set(2, 2, 2);

  const lightRoy = new THREE.DirectionalLight(0xffffff, 2);
  lightRoy.position.set(15, 60, 25);
  sceneRoy.add(lightRoy);
  //Renderer
  rendererRoy = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  rendererRoy.setSize(containerRoy.clientWidth, containerRoy.clientHeight);
  rendererRoy.setPixelRatio(window.devicePixelRatio);

  controls3 = new THREE.OrbitControls(cameraRoy, rendererRoy.domElement);
  controls3.autoRotate = true;

  containerRoy.appendChild(rendererRoy.domElement);
  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./asset/mods/roy_v2.glb", function (gltf) {
    roy = gltf.scene.children[0];
    sceneRoy.add(gltf.scene);
    animate3();
  });
}

function initAmk() {
  containerAMK = document.querySelector(".amk");

  //Create scene
  sceneAMK = new THREE.Scene();
  console.log(containerAMK.clientWidth);
  console.log(containerAMK.clientHeight);

  const fov = 35;
  const aspect = containerAMK.clientWidth / containerAMK.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  cameraAMK = new THREE.PerspectiveCamera(fov, aspect, near, far);
  cameraAMK.position.set(0, 30, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  sceneAMK.add(ambient);
  sceneAMK.scale.set(2, 2, 2);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(15, 60, 25);
  sceneAMK.add(light);
  //Renderer
  rendererAMK = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  rendererAMK.setSize(containerAMK.clientWidth, containerAMK.clientHeight);
  rendererAMK.setPixelRatio(window.devicePixelRatio);

  controls2 = new THREE.OrbitControls(cameraAMK, rendererAMK.domElement);
  controls2.autoRotate = true;

  containerAMK.appendChild(rendererAMK.domElement);
  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./asset/mods/amk_v2.glb", function (gltf) {
    corrina = gltf.scene.children[0];
    sceneAMK.add(gltf.scene);
    animate2();
  });
}

function animate1() {
  requestAnimationFrame(animate1);
  controls1.update();
  rendererDave.render(sceneDave, cameraDave);
}

function animate2() {
  requestAnimationFrame(animate2);
  controls2.update();
  rendererAMK.render(sceneAMK, cameraAMK);
}

function animate3() {
  requestAnimationFrame(animate3);
  controls3.update();
  rendererRoy.render(sceneRoy, cameraRoy);
}

function animate4() {
  requestAnimationFrame(animate4);
  controls4.update();
  rendererCorrina.render(sceneCorrina, cameraCorrina);
}

initDave();
initAmk();
initRoy();
initCorrina();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
