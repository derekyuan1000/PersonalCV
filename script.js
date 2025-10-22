const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Custom cursor effect
const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Activate cursor on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .cert-card, .project-card, .contribution-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const certCards = document.querySelectorAll('.cert-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        certCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                const categories = card.getAttribute('data-category').split(' ');
                if (categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .cert-card, .project-card, .stat-card, .tech-badge, .contribution-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);

    contactForm.reset();
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.85)';
    }
});

certCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        `;

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});

// =======================
// THREE.JS SCENE SETUP
// =======================
let scene, camera, renderer, particles, geometryShapes, mouse, mouseTarget, starFieldGroup, waveRings;

function initThreeJS() {
    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 50;

    // Renderer setup
    const canvas = document.getElementById('threejs-canvas');
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Mouse tracking
    mouse = { x: 0, y: 0 };
    mouseTarget = { x: 0, y: 0 };

    // Create enhanced star field particle system (5000 particles in sphere)
    createEnhancedStarField();

    // Create animated torus wave rings
    createAnimatedWaveRings();

    // Create floating 3D shapes
    createFloatingShapes();

    // Create wave effect
    createWaveEffect();

    // Start animation loop
    animate();

    // Event listeners
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
}

// Enhanced Star Field with 5000 particles in sphere distribution
function createEnhancedStarField() {
    const particleCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color1 = new THREE.Color(0x2563eb);
    const color2 = new THREE.Color(0x7c3aed);
    const color3 = new THREE.Color(0x06b6d4);
    const color4 = new THREE.Color(0xffffff);
    
    // Generate particles in sphere distribution (similar to maath/random.inSphere)
    const radius = 60; // Sphere radius
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Sphere distribution using spherical coordinates
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = Math.cbrt(Math.random()) * radius;
        
        positions[i3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i3 + 2] = r * Math.cos(phi);
        
        // Color variety
        const colorChoice = Math.random();
        let color;
        if (colorChoice < 0.25) {
            color = color1;
        } else if (colorChoice < 0.5) {
            color = color2;
        } else if (colorChoice < 0.75) {
            color = color3;
        } else {
            color = color4;
        }
        
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
        size: 1.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        depthWrite: false
    });
    
    starFieldGroup = new THREE.Group();
    particles = new THREE.Points(geometry, material);
    starFieldGroup.add(particles);
    starFieldGroup.rotation.set(0, 0, Math.PI / 4);
    scene.add(starFieldGroup);
}

// Animated Wave Rings (Three Torus Geometries)
function createAnimatedWaveRings() {
    waveRings = new THREE.Group();
    
    // Ring 1
    const ring1Geometry = new THREE.TorusGeometry(15, 0.3, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        transparent: true,
        opacity: 0.4,
        wireframe: false
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.position.set(0, 0, -10);
    
    // Ring 2
    const ring2Geometry = new THREE.TorusGeometry(12.5, 0.3, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.4,
        wireframe: false
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.position.set(0, 0, -10);
    ring2.rotation.z = Math.PI / 4;
    
    // Ring 3
    const ring3Geometry = new THREE.TorusGeometry(17.5, 0.3, 16, 100);
    const ring3Material = new THREE.MeshBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.4,
        wireframe: false
    });
    const ring3 = new THREE.Mesh(ring3Geometry, ring3Material);
    ring3.position.set(0, 0, -10);
    ring3.rotation.z = Math.PI / 2;
    
    waveRings.add(ring1, ring2, ring3);
    scene.add(waveRings);
}

// Floating 3D Shapes
function createFloatingShapes() {
    geometryShapes = [];

    // Create various geometric shapes
    const shapes = [
        { geo: new THREE.OctahedronGeometry(2), color: 0x2563eb },
        { geo: new THREE.TetrahedronGeometry(2.5), color: 0x7c3aed },
        { geo: new THREE.IcosahedronGeometry(2), color: 0x06b6d4 },
        { geo: new THREE.TorusGeometry(2, 0.5, 16, 100), color: 0x2563eb },
        { geo: new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16), color: 0x7c3aed }
    ];

    for (let i = 0; i < 8; i++) {
        const shapeData = shapes[Math.floor(Math.random() * shapes.length)];

        const material = new THREE.MeshPhongMaterial({
            color: shapeData.color,
            transparent: true,
            opacity: 0.3,
            wireframe: true,
            emissive: shapeData.color,
            emissiveIntensity: 0.2
        });

        const mesh = new THREE.Mesh(shapeData.geo, material);

        // Random position
        mesh.position.x = (Math.random() - 0.5) * 80;
        mesh.position.y = (Math.random() - 0.5) * 80;
        mesh.position.z = (Math.random() - 0.5) * 30;

        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        // Store velocity for animation
        mesh.userData = {
            velocity: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                rotation: (Math.random() - 0.5) * 0.02
            }
        };

        geometryShapes.push(mesh);
        scene.add(mesh);
    }

    // Add lights for the shapes
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x2563eb, 1, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7c3aed, 1, 100);
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);
}

// Wave Effect
let waveGroup;
function createWaveEffect() {
    waveGroup = new THREE.Group();
    const geometry = new THREE.PlaneGeometry(100, 100, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: 0x2563eb,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 4;
    plane.position.z = -20;

    waveGroup.add(plane);
    waveGroup.userData = { plane: plane };
    scene.add(waveGroup);
}

// Mouse move handler
function onMouseMove(event) {
    mouseTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouseTarget.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Window resize handler
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0005;

    // Smooth mouse following
    mouse.x += (mouseTarget.x - mouse.x) * 0.05;
    mouse.y += (mouseTarget.y - mouse.y) * 0.05;

    // Rotate camera based on mouse
    camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    // Animate star field (rotating slowly as per problem statement)
    if (starFieldGroup) {
        const delta = 0.016; // Approximate frame delta
        starFieldGroup.rotation.x -= delta / 10;
        starFieldGroup.rotation.y -= delta / 15;
    }
    
    // Animate wave rings (rotating slowly)
    if (waveRings) {
        waveRings.rotation.z = time * 0.05;
    }

    // Animate floating shapes
    geometryShapes.forEach((shape, index) => {
        shape.rotation.x += shape.userData.velocity.rotation;
        shape.rotation.y += shape.userData.velocity.rotation * 0.7;

        shape.position.x += shape.userData.velocity.x;
        shape.position.y += shape.userData.velocity.y;

        // Bounce off boundaries
        if (Math.abs(shape.position.x) > 40) {
            shape.userData.velocity.x *= -1;
        }
        if (Math.abs(shape.position.y) > 40) {
            shape.userData.velocity.y *= -1;
        }

        // Mouse interaction
        const distance = Math.sqrt(
            Math.pow(shape.position.x - mouse.x * 20, 2) +
            Math.pow(shape.position.y - mouse.y * 20, 2)
        );

        if (distance < 15) {
            shape.material.opacity = 0.6;
            shape.scale.set(1.2, 1.2, 1.2);
        } else {
            shape.material.opacity = 0.3;
            shape.scale.set(1, 1, 1);
        }
    });

    // Animate wave
    if (waveGroup && waveGroup.userData.plane) {
        const plane = waveGroup.userData.plane;
        const positions = plane.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const y = positions[i + 1];
            positions[i + 2] = Math.sin(x * 0.1 + time) * 2 + Math.cos(y * 0.1 + time) * 2;
        }
        plane.geometry.attributes.position.needsUpdate = true;
        plane.rotation.z += 0.001;
    }

    renderer.render(scene, camera);
}

// Initialize Three.js when page loads
if (window.THREE) {
    initThreeJS();
}
