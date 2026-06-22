const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    400 / 400,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(400, 400);

document
    .getElementById("three-container")
    .appendChild(renderer.domElement);

const geometry =
    new THREE.TorusKnotGeometry(
        3,
        1,
        150,
        20
    );

const material =
    new THREE.MeshStandardMaterial({
        color: 0x52c41a,
        metalness: 1,
        roughness: .1
    });

const mesh =
    new THREE.Mesh(
        geometry,
        material
    );

scene.add(mesh);

const light1 =
    new THREE.PointLight(
        0xffffff,
        2
    );

light1.position.set(
    10,
    10,
    10
);

scene.add(light1);

const light2 =
    new THREE.PointLight(
        0x0d5cc4,
        5
    );

light2.position.set(
    -10,
    -10,
    10
);

scene.add(light2);

camera.position.z = 10;

function animate() {

    requestAnimationFrame(
        animate
    );

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(
        scene,
        camera
    );

}

animate();