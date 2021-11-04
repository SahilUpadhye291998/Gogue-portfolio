let container;
let camera;
let renderer;
let scene;
let gogue;
let controls;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  console.log(container.clientWidth);
  console.log(container.clientHeight);

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(25, 50, 90);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./asset/aboutme/gogue_v2.glb", function (gltf) {
    scene.add(gltf.scene);
    gogue = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  console.log("animating " + gogue.rotation.x);
  controls.update();
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
