"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"

export default function MexicoMap() {
  const group = useRef()
  const [hoveredMunicipio, setHoveredMunicipio] = useState(null)
  const [selectedMunicipio, setSelectedMunicipio] = useState(null)

  // En un caso real, cargarías un modelo 3D del Estado de México
  // Aquí simulamos un mapa 3D simplificado
  useEffect(() => {
    // Aquí podrías cargar datos geoespaciales reales
  }, [])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05
    }
  })

  // Colores para representar diferentes datos
  const greenColor = new THREE.Color("#10b981")
  const redColor = new THREE.Color("#ef4444")

  return (
    <group ref={group}>
      {/* Base del mapa */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Forma aproximada del Estado de México */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <extrudeGeometry
          args={[
            new THREE.Shape().moveTo(-3, -3).lineTo(3, -2).lineTo(4, 0).lineTo(2, 3).lineTo(-2, 2).lineTo(-3, -3),
            { depth: 0.4, bevelEnabled: true, bevelSize: 0.1 },
          ]}
        />
        <meshStandardMaterial color="#334155" />
      </mesh>

      {/* Municipios (simplificados como cubos) */}
      {[
        { id: 1, name: "Toluca", position: [0, 0.5, 0], color: greenColor, population: 910608 },
        { id: 2, name: "Ecatepec", position: [2, 0.5, 1], color: redColor, population: 1656107 },
        { id: 3, name: "Tlalnepantla", position: [1.5, 0.5, 2], color: greenColor, population: 672202 },
        { id: 4, name: "Texcoco", position: [3, 0.5, 0], color: redColor, population: 259545 },
        { id: 5, name: "Valle de Bravo", position: [-2, 0.5, -1], color: greenColor, population: 67993 },
      ].map((municipio) => (
        <group key={municipio.id} position={municipio.position}>
          <mesh
            castShadow
            receiveShadow
            scale={[0.5, 0.2, 0.5]}
            onPointerOver={() => setHoveredMunicipio(municipio)}
            onPointerOut={() => setHoveredMunicipio(null)}
            onClick={() => setSelectedMunicipio(municipio.id === selectedMunicipio ? null : municipio.id)}
          >
            <boxGeometry />
            <meshStandardMaterial
              color={municipio.color}
              emissive={
                hoveredMunicipio?.id === municipio.id || selectedMunicipio === municipio.id ? "#ffffff" : "#000000"
              }
              emissiveIntensity={
                hoveredMunicipio?.id === municipio.id ? 0.3 : selectedMunicipio === municipio.id ? 0.5 : 0
              }
            />
          </mesh>
          <Text
            position={[0, 0.3, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {municipio.name}
          </Text>
        </group>
      ))}

      {/* Información del municipio seleccionado */}
      {hoveredMunicipio && (
        <group
          position={[hoveredMunicipio.position[0], hoveredMunicipio.position[1] + 0.5, hoveredMunicipio.position[2]]}
        >
          <Text
            position={[0, 0.3, 0]}
            rotation={[0, 0, 0]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
            backgroundColor="#00000080"
            padding={0.05}
          >
            {`${hoveredMunicipio.name}: ${hoveredMunicipio.population.toLocaleString()} hab.`}
          </Text>
        </group>
      )}
    </group>
  )
}
