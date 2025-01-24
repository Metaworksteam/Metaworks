"use client"

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const CyberSecurityScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000022)

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Orbit Controls
    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.enableDamping = true
    // controls.dampingFactor = 0.05

    // Network Grid
    const gridGeometry = new THREE.PlaneGeometry(10, 10, 20, 20)
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    })
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial)
    scene.add(gridMesh)

    // Secure Lock Representation
    const lockGeometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
    const lockMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      metalness: 0.7,
      roughness: 0.3
    })
    const lockMesh = new THREE.Mesh(lockGeometry, lockMaterial)
    scene.add(lockMesh)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040)
    scene.add(ambientLight)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate elements
      gridMesh.rotation.z += 0.001
      lockMesh.rotation.x += 0.005
      lockMesh.rotation.y += 0.003

      // controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" />
}

export default CyberSecurityScene
