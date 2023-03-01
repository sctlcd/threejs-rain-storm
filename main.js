import './assets/style/style.css';
import * as THREE from 'three';

/***************************************************** Scene */

const scene = new THREE.Scene();

/***************************************************** Camera */

// Define camera: .PerspectiveCamera(field of view in degree, aspect ratio = width / height, near, far) 
const camera = new THREE.PerspectiveCamera(
  60, // fov = Field Of View
  window.innerWidth / window.innerHeight, // aspect ratio = width / height
  1, // near clipping plane
  1000, // far clipping plane
);

// Set camera position
camera.position.set(0, 0, 1);

// Set the rotation angle of the camera to look up into the sky
camera.rotation.set(1.16, -0.12, 0.27);

