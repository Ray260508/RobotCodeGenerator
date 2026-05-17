/** 3D Robot Viewport — placeholder meshes, orbit controls */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Exploded-view positions — spread parts out so each piece is clearly visible
const POSITIONS = {
    chassis:  { y: 0.15,  x: 0,     z: 0     },
    elevator: { y: 1.1,   x: 0,     z: 0     },
    shooter:  { y: 1.8,   x: 0.5,   z: 0     },
    intake:   { y: 0.15,  x: -1.2,  z: 0     },
    roller:   { y: 0.7,   x: 0,     z: 0.6   },
    launcher:  { y: 2.2,   x: 0,     z: 0     },
    vision:   { y: 0.5,   x: 0.8,   z: 0.7   },
};

const COLORS = {
    chassis: 0x5a5a6a, wheel: 0x333340,
    elevator: 0x7788aa, shooter: 0xD5001C,
    intake: 0x55aa55, roller: 0x7777bb,
    launcher: 0xcc8844, vision: 0x44cc88,
    accent: 0xD5001C,
};

let scene, camera, renderer, controls, robotGroup;
let mechGroups = {};
let animationId;
let currentZoomTarget = null;
let isInitialized = false;

export function initViewport(container) {
    if (isInitialized) return;
    isInitialized = true;

    scene = new THREE.Scene();
    // Subtle dark blue-gray gradient — NOT pure black
    scene.background = new THREE.Color(0x16181e);
    scene.fog = new THREE.FogExp2(0x16181e, 0.06);

    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(2.24, 1.92, 3.2);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(0, 0.6, 0);
    controls.minDistance = 2;
    controls.maxDistance = 12;
    controls.maxPolarAngle = Math.PI * 0.85;

    // --- Lighting: bright center, soft edges ---
    scene.add(new THREE.AmbientLight(0x8899bb, 0.8));

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(4, 8, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x6688cc, 0.7);
    fill.position.set(-5, 4, 6);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xD5001C, 0.3);
    rim.position.set(-3, 2, -4);
    scene.add(rim);

    // Spotlight on center for bright focus
    const spot = new THREE.SpotLight(0xffffff, 1.5, 15, Math.PI / 6, 0.5);
    spot.position.set(0, 8, 0);
    spot.target.position.set(0, 0.5, 0);
    scene.add(spot);
    scene.add(spot.target);

    // Ground — dark reflective floor
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({ color: 0x1a1c24, roughness: 0.7, metalness: 0.3 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid — subtle
    const grid = new THREE.GridHelper(10, 20, 0x2a2c34, 0x1e2028);
    grid.position.y = 0.001;
    scene.add(grid);

    robotGroup = new THREE.Group();
    scene.add(robotGroup);

    buildPlaceholderRobot();

    // Only chassis visible initially
    Object.keys(mechGroups).forEach(k => {
        if (k !== 'chassis') setMechVisible(k, false);
    });

    const onResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    function animate() {
        animationId = requestAnimationFrame(animate);
        controls.update();
        if (!currentZoomTarget) robotGroup.rotation.y += 0.0015;
        renderer.render(scene, camera);
    }
    animate();
}

function mat(color, opacity = 1) {
    return new THREE.MeshStandardMaterial({
        color, roughness: 0.35, metalness: 0.5,
        transparent: opacity < 1, opacity
    });
}

function buildPlaceholderRobot() {
    // === CHASSIS ===
    const chassisGrp = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.1, 0.75), mat(COLORS.chassis));
    body.position.y = POSITIONS.chassis.y;
    body.castShadow = true;
    chassisGrp.add(body);

    const wGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.04, 16);
    const wMat = mat(COLORS.wheel);
    [[-0.38, -0.33], [-0.38, 0.33], [0.38, -0.33], [0.38, 0.33]].forEach(([x, z]) => {
        const w = new THREE.Mesh(wGeo, wMat);
        w.rotation.x = Math.PI / 2;
        w.position.set(x, 0.06, z);
        w.castShadow = true;
        chassisGrp.add(w);
        const h = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.1), mat(COLORS.chassis, 0.7));
        h.position.set(x, 0.14, z);
        chassisGrp.add(h);
    });
    mechGroups.chassis = chassisGrp;
    robotGroup.add(chassisGrp);

    // === ELEVATOR ===
    const elevGrp = new THREE.Group();
    const ep = POSITIONS.elevator;
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.9, 0.08), mat(COLORS.elevator));
    rail.position.set(ep.x - 0.08, ep.y, ep.z);
    rail.castShadow = true;
    elevGrp.add(rail);
    const rail2 = rail.clone(); rail2.position.x = ep.x + 0.08; elevGrp.add(rail2);
    const carriage = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.1), mat(COLORS.elevator, 0.8));
    carriage.position.set(ep.x, ep.y + 0.2, ep.z);
    elevGrp.add(carriage);
    addEdges(elevGrp, rail);
    mechGroups.elevator = elevGrp;
    robotGroup.add(elevGrp);

    // === SHOOTER (Initial Placeholder) ===
    const shootGrp = new THREE.Group();
    buildShooterPlaceholder('adjustable', shootGrp);
    mechGroups.shooter = shootGrp;
    robotGroup.add(shootGrp);

    // === INTAKE ===
    const intGrp = new THREE.Group();
    const ip = POSITIONS.intake;
    const intBody = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.5), mat(COLORS.intake));
    intBody.position.set(ip.x, ip.y, ip.z);
    intBody.rotation.z = -0.25;
    intBody.castShadow = true;
    intGrp.add(intBody);
    const intRoller = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.45, 12), mat(0x339933));
    intRoller.rotation.x = Math.PI / 2;
    intRoller.position.set(ip.x - 0.12, ip.y - 0.02, ip.z);
    intGrp.add(intRoller);
    mechGroups.intake = intGrp;
    robotGroup.add(intGrp);

    // === ROLLER ===
    const rolGrp = new THREE.Group();
    mechGroups.roller = rolGrp;
    robotGroup.add(rolGrp);
    // Draw default roller fallback
    update3DModel('roller', { mechanisms: { roller: { configured: true } } });

    // === LAUNCHER ===
    const grabGrp = new THREE.Group();
    const gp = POSITIONS.launcher;
    [-0.09, 0.09].forEach(dz => {
        const f = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.04), mat(COLORS.launcher));
        f.position.set(gp.x, gp.y, gp.z + dz);
        f.castShadow = true;
        grabGrp.add(f);
    });
    const gBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.22), mat(COLORS.launcher));
    gBase.position.set(gp.x, gp.y - 0.1, gp.z);
    grabGrp.add(gBase);
    mechGroups.launcher = grabGrp;
    robotGroup.add(grabGrp);

    // === ARM ===
    const armGrp = new THREE.Group();
    mechGroups.arm = armGrp;
    robotGroup.add(armGrp);
    // Draw default arm fallback
    update3DModel('arm', { mechanisms: { arm: { configured: true, dof: 2 } } });

    // === VISION ===
    const visGrp = new THREE.Group();
    const vp = POSITIONS.vision;
    const cam = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.06), mat(COLORS.vision));
    cam.position.set(vp.x, vp.y, vp.z);
    cam.castShadow = true;
    visGrp.add(cam);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.02, 0.03, 8), mat(0x222222));
    lens.rotation.z = Math.PI / 2;
    lens.position.set(vp.x + 0.05, vp.y, vp.z);
    visGrp.add(lens);
    mechGroups.vision = visGrp;
    robotGroup.add(visGrp);
}

function addEdges(group, mesh) {
    const edges = new THREE.LineSegments(
        new THREE.EdgesGeometry(mesh.geometry),
        new THREE.LineBasicMaterial({ color: 0x99aabb, transparent: true, opacity: 0.3 })
    );
    edges.position.copy(mesh.position);
    group.add(edges);
}

// ===== TOGGLE VISIBILITY =====
export function setMechVisible(type, visible) {
    const grp = mechGroups[type];
    if (!grp) return;
    grp.visible = visible;
}

// ===== ZOOM =====
const ZOOM_POS = {
    chassis:      { pos: [2.5, 1.2, 2.5], target: [0, 0.15, 0] },
    elevator:     { pos: [1.5, 2.0, 1.5], target: [0, 1.1, 0] },
    shooter:      { pos: [1.5, 2.2, 0.8], target: [0.5, 1.8, 0] },
    intake:       { pos: [-2.0, 0.8, 1.8], target: [-1.2, 0.15, 0] },
    roller:       { pos: [1.2, 1.2, 1.8], target: [0, 0.7, 0.6] },
    launcher:      { pos: [1.0, 2.8, 1.0], target: [0, 2.2, 0] },
    vision:       { pos: [1.8, 1.0, 1.8], target: [0.8, 0.5, 0.7] },
    statemachine: { pos: [3.5, 3, 5], target: [0, 0.6, 0] },
};

export function zoomToMechanism(type) {
    if (!camera || !controls) return;
    currentZoomTarget = type;
    robotGroup.rotation.y = 0;
    const z = ZOOM_POS[type] || ZOOM_POS.chassis;
    
    // Shift camera/target rightward if sidebar is open, so object centers in remaining space
    const isOpen = document.getElementById('detail-sidebar')?.classList.contains('open');
    let finalPos = z.pos;
    let finalTarget = z.target;
    
    if (isOpen) {
        const pVec = new THREE.Vector3(...z.pos);
        const tVec = new THREE.Vector3(...z.target);
        const dir = new THREE.Vector3().subVectors(tVec, pVec).normalize();
        const right = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
        
        // Shift by 0.5 units to the right
        pVec.addScaledVector(right, 0.5);
        tVec.addScaledVector(right, 0.5);
        
        finalPos = pVec.toArray();
        finalTarget = tVec.toArray();
    }
    
    animateCameraTo(finalPos, finalTarget);

    // Highlight selected, dim others
    Object.entries(mechGroups).forEach(([k, grp]) => {
        if (!grp.visible) return;
        grp.traverse(c => {
            if (c.isMesh && c.material) {
                c.material.opacity = k === type ? 1.0 : 0.2;
                c.material.transparent = true;
                if (k === type) {
                    c.material.emissive = new THREE.Color(COLORS.accent);
                    c.material.emissiveIntensity = 0.12;
                } else {
                    c.material.emissive = new THREE.Color(0);
                    c.material.emissiveIntensity = 0;
                }
                c.material.needsUpdate = true;
            }
        });
    });
}

export function resetZoom() {
    if (!camera || !controls) return;
    currentZoomTarget = null;
    animateCameraTo([3.5, 3, 5], [0, 0.6, 0]);
    Object.entries(mechGroups).forEach(([k, grp]) => {
        grp.traverse(c => {
            if (c.isMesh && c.material) {
                c.material.opacity = 1.0;
                c.material.emissive = new THREE.Color(0);
                c.material.emissiveIntensity = 0;
                c.material.needsUpdate = true;
            }
        });
    });
}

function animateCameraTo(pos, target) {
    const sP = camera.position.clone(), sT = controls.target.clone();
    const eP = new THREE.Vector3(...pos), eT = new THREE.Vector3(...target);
    const dur = 800, start = performance.now();
    function step(now) {
        const t = Math.min((now - start) / dur, 1);
        const e = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
        camera.position.lerpVectors(sP, eP, e);
        controls.target.lerpVectors(sT, eT, e);
        controls.update();
        if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

export function updateMechConfigured(type, configured) {
    const grp = mechGroups[type];
    if (!grp || !grp.visible) return;
    grp.traverse(c => {
        if (c.isMesh && c.material) {
            if (configured) {
                c.material.emissive = new THREE.Color(0x22aa44);
                c.material.emissiveIntensity = 0.08;
            } else {
                c.material.emissive = new THREE.Color(0);
                c.material.emissiveIntensity = 0;
            }
            c.material.needsUpdate = true;
        }
    });
}

export function dispose() {
    if (animationId) cancelAnimationFrame(animationId);
    renderer?.dispose();
}

export function buildShooterPlaceholder(type, group) {
    while(group.children.length > 0){ group.remove(group.children[0]); }
    const sp = POSITIONS.shooter;
    const matShooter = new THREE.MeshStandardMaterial({ color: COLORS.shooter, roughness: 0.6 });
    if (type === 'adjustable_turret') {
        const turretBase = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.05, 32), new THREE.MeshStandardMaterial({ color: 0x444455 }));
        turretBase.position.set(sp.x, sp.y - 0.05, sp.z);
        turretBase.castShadow = true;
        group.add(turretBase);
        
        const sFrame = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.15, 0.25), new THREE.MeshStandardMaterial({ color: COLORS.shooter, transparent: true, opacity: 0.6 }));
        sFrame.position.set(sp.x, sp.y + 0.05, sp.z);
        group.add(sFrame);
        
        const flywheel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 20), matShooter);
        flywheel.position.set(sp.x + 0.05, sp.y + 0.1, sp.z + 0.06);
        flywheel.rotation.x = Math.PI / 2;
        group.add(flywheel);
        const fw2 = flywheel.clone(); fw2.position.z -= 0.12; group.add(fw2);
    } else {
        const flywheel = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.06, 20), matShooter);
        flywheel.position.set(sp.x, sp.y, sp.z);
        flywheel.castShadow = true;
        group.add(flywheel);
        const fw2 = flywheel.clone(); fw2.position.z += 0.12; group.add(fw2);
        
        const sFrame = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.25), new THREE.MeshStandardMaterial({ color: COLORS.shooter, transparent: true, opacity: 0.6 }));
        sFrame.position.set(sp.x, sp.y, sp.z + 0.06);
        group.add(sFrame);
    }
}

export function updateShooterModel(type) {
    update3DModel('shooter', { mechanisms: { shooter: { shooterType: type } } });
}

export function update3DModel(type, state) {
    const grp = mechGroups[type];
    if (!grp) return;
    
    // Clear old meshes
    while (grp.children.length > 0) {
        grp.remove(grp.children[0]);
    }
    
    const loader = new GLTFLoader();
    
    if (type === 'chassis') {
        const path = 'assets/models/Swerve_MK5i.glb';
        loader.load(path, 
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.015, 0.015, 0.015);
                model.position.set(POSITIONS.chassis.x, POSITIONS.chassis.y, POSITIONS.chassis.z);
                model.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
                grp.add(model);
            },
            undefined,
            () => {
                const body = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.1, 0.75), mat(COLORS.chassis));
                body.position.y = POSITIONS.chassis.y;
                body.castShadow = true;
                grp.add(body);
            }
        );
    } else if (type === 'elevator') {
        const path = 'assets/models/Elevator.glb';
        loader.load(path, 
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.012, 0.012, 0.012);
                model.position.set(POSITIONS.elevator.x, POSITIONS.elevator.y - 0.5, POSITIONS.elevator.z);
                model.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
                grp.add(model);
            },
            undefined,
            () => {
                const ep = POSITIONS.elevator;
                const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.9, 0.08), mat(COLORS.elevator));
                rail.position.set(ep.x - 0.08, ep.y, ep.z);
                rail.castShadow = true;
                grp.add(rail);
                const rail2 = rail.clone(); rail2.position.x = ep.x + 0.08; grp.add(rail2);
            }
        );
    } else if (type === 'shooter') {
        const sh = state.mechanisms?.shooter || {};
        const isTurret = sh.shooterType === 'adjustable_turret';
        const file = isTurret ? 'Shooter_on_Turret.glb' : 'AdjustableShooter.glb';
        const path = `assets/models/${file}`;
        loader.load(path, 
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.015, 0.015, 0.015);
                model.position.set(POSITIONS.shooter.x, POSITIONS.shooter.y, POSITIONS.shooter.z);
                model.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
                grp.add(model);
            },
            undefined,
            () => {
                buildShooterPlaceholder(sh.shooterType || 'adjustable', grp);
            }
        );
    } else if (type === 'vision') {
        const vis = state.vision || {};
        let file = 'ArduCam_M12Lens.glb';
        if (vis.system === 'limelight') {
            const ver = vis.limelightVersion || 'limelight3';
            if (ver === 'limelight3') file = 'LIMELIGHT3CAD_STEP.glb';
            else if (ver === 'limelight3a') file = 'LIMELIGHT3ACAD_STEP.glb';
            else if (ver === 'limelight3g') file = 'LIMELIGHT3GCAD_STEP.glb';
            else if (ver === 'limelight4') file = 'LIMELIGHT4CAD_STEP.glb';
        }
        const path = `assets/models/${file}`;
        loader.load(path, 
            (gltf) => {
                const model = gltf.scene;
                model.scale.set(0.02, 0.02, 0.02);
                model.position.set(POSITIONS.vision.x, POSITIONS.vision.y, POSITIONS.vision.z);
                model.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
                grp.add(model);
            },
            undefined,
            () => {
                const vp = POSITIONS.vision;
                const cam = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.06), mat(COLORS.vision));
                cam.position.set(vp.x, vp.y, vp.z);
                cam.castShadow = true;
                grp.add(cam);
            }
        );
    } else if (type === 'roller') {
        const rp = POSITIONS.roller;
        const radius = 0.015;
        const length = 0.45;
        const gap = 0.035;
        for (let i = 0; i < 8; i++) {
            const pipe = new THREE.Mesh(
                new THREE.CylinderGeometry(radius, radius, length, 12),
                mat(COLORS.roller)
            );
            pipe.rotation.x = Math.PI / 2;
            pipe.position.set(rp.x, rp.y, rp.z + (i - 3.5) * gap);
            pipe.castShadow = true;
            grp.add(pipe);
        }
    } else if (type === 'arm') {
        const armConfig = state.mechanisms?.arm || { dof: 2 };
        const dof = armConfig.dof || 2;
        const ap = POSITIONS.chassis;
        
        let prevPivot = new THREE.Vector3(ap.x, ap.y + 0.15, ap.z);
        let linkGroup = grp;

        for (let i = 0; i < dof; i++) {
            const length = 0.35 - i * 0.05;
            const thickness = 0.08 - i * 0.02;
            
            const jointSubGrp = new THREE.Group();
            jointSubGrp.position.copy(prevPivot);
            linkGroup.add(jointSubGrp);

            const pivotSphere = new THREE.Mesh(new THREE.SphereGeometry(thickness * 0.7, 16, 16), mat(0x222222));
            jointSubGrp.add(pivotSphere);

            const linkMesh = new THREE.Mesh(new THREE.BoxGeometry(thickness, length, thickness), mat(COLORS.accent));
            linkMesh.position.set(0, length / 2, 0);
            linkMesh.castShadow = true;
            jointSubGrp.add(linkMesh);

            const angle = -0.5 + i * 0.3;
            jointSubGrp.rotation.z = angle;

            prevPivot = new THREE.Vector3(0, length, 0);
            linkGroup = jointSubGrp;
        }
    } else {
        if (type === 'intake') {
            const ip = POSITIONS.intake;
            const intBody = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.12, 0.5), mat(COLORS.intake));
            intBody.position.set(ip.x, ip.y, ip.z);
            intBody.rotation.z = -0.25;
            intBody.castShadow = true;
            grp.add(intBody);
        } else if (type === 'launcher') {
            const gp = POSITIONS.launcher;
            [-0.09, 0.09].forEach(dz => {
                const f = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.18, 0.04), mat(COLORS.launcher));
                f.position.set(gp.x, gp.y, gp.z + dz);
                f.castShadow = true;
                grp.add(f);
            });
            const gBase = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.22), mat(COLORS.launcher));
            gBase.position.set(gp.x, gp.y - 0.1, gp.z);
            grp.add(gBase);
        }
    }
}
