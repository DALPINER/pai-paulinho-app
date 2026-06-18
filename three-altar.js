/* ================================================================
   WEBGL ALTAR - Three.js Abstract Geometry (Terreiro 4D)
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('hero'); // Coloca no fundo do hero
  if (!container || typeof THREE === 'undefined') return;

  // Cria o Canvas WebGL
  const canvas = document.createElement('canvas');
  canvas.id = 'webgl-altar';
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.zIndex = '0'; // Atrás de tudo
  canvas.style.pointerEvents = 'none'; // Não rouba cliques
  
  // Injeta logo após o fundo base, antes do conteúdo
  container.insertBefore(canvas, container.firstChild);

  // Setup Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // O Objeto Sagrado (Vórtice TorusKnot - Simboliza a força contínua de Xangô/Oxum)
  const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xd4af37, // Dourado
    metalness: 1.0,
    roughness: 0.15,
    clearcoat: 1.0,
    transparent: true,
    opacity: 0.25, // Discreto no fundo
    wireframe: true // Visual tecnológico espiritual
  });
  
  const altar = new THREE.Mesh(geometry, material);
  scene.add(altar);

  // Iluminação Divina
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffa500, 2.5, 50);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  const blueLight = new THREE.PointLight(0x00d4ff, 1.5, 50);
  blueLight.position.set(-2, -3, 2);
  scene.add(blueLight);

  // Interação Sensorial (Giroscópio e Mouse)
  let mouseX = 0;
  let mouseY = 0;
  
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma !== null && e.beta !== null) {
      mouseX = e.gamma / 45; 
      mouseY = (e.beta - 40) / 45;
    }
  });

  // Loop do Motor Gráfico
  function animate() {
    requestAnimationFrame(animate);

    // Rotação Etérea Constante
    altar.rotation.x += 0.002;
    altar.rotation.y += 0.003;

    // Rotação Interativa Sensorial (Segue a mão)
    altar.rotation.y += (mouseX * 0.4 - altar.rotation.y) * 0.05;
    altar.rotation.x += (-mouseY * 0.4 - altar.rotation.x) * 0.05;

    // A Luz Ilumina de Acordo com a Posição da Pessoa
    pointLight.position.x += (mouseX * 5 - pointLight.position.x) * 0.05;
    pointLight.position.y += (mouseY * 5 - pointLight.position.y) * 0.05;

    renderer.render(scene, camera);
  }

  // Redimensionamento Fluido
  window.addEventListener('resize', () => {
    if (container.offsetWidth && container.offsetHeight) {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
  });

  animate();
});
