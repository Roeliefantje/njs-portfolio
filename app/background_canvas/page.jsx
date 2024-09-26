"use client"

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import {createNoise2D} from 'simplex-noise';

function Box(props) {
  // This reference will give us direct access to the mesh
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    
    </mesh>
  )
}



function CustomMesh() {
  const meshRef = useRef();
  const noise2D = createNoise2D();

  const width = 80;
  const depth = 45;
  const scale = 30;

  const vertices = [];
  const indices = [];
  const normals = [];
  var currIndex = 0;
  for (let z = -20; z < depth - 20; z+=1) {
    for (let x = Math.floor(width / -2); x < Math.ceil(width / 2); x+=1) {
      
      const y = Math.abs(noise2D(x / scale, z / scale)) * 4 - 2 + (z * 10 / depth);

      //Top face with normals
      vertices.push(x, y + 1, z);
      vertices.push(x, y + 1, z + 1);
      vertices.push(x + 1, y + 1, z);
      vertices.push(x + 1, y + 1, z + 1);
      normals.push(0, 1, 0);
      normals.push(0, 1, 0);
      normals.push(0, 1, 0);
      normals.push(0, 1, 0);

      var a = currIndex++;
      var b = currIndex++;
      var c = currIndex++;
      var d = currIndex++;

      indices.push(a, b, c); //Top
      indices.push(b, d, c);

      //Left face with normals
      vertices.push(x, y, z);
      vertices.push(x, y, z + 1);
      vertices.push(x, y + 1, z);
      vertices.push(x, y + 1, z + 1);
      normals.push(-1, 0, 0);
      normals.push(-1, 0, 0);
      normals.push(-1, 0, 0);
      normals.push(-1, 0, 0);

      a = currIndex++;
      b = currIndex++;
      c = currIndex++;
      d = currIndex++;

      indices.push(b, d, a); //Top
      indices.push(d, c, a);

      //Right face with normals
      vertices.push(x + 1, y, z);
      vertices.push(x + 1, y, z + 1);
      vertices.push(x + 1, y + 1, z);
      vertices.push(x + 1, y + 1, z + 1);
      normals.push(1, 0, 0);
      normals.push(1, 0, 0);
      normals.push(1, 0, 0);
      normals.push(1, 0, 0);

      a = currIndex++;
      b = currIndex++;
      c = currIndex++;
      d = currIndex++;

      indices.push(a, c, b); //Top
      indices.push(c, d, b);


      //Front Face with normals
      vertices.push(x, y, z);
      vertices.push(x + 1, y, z);
      vertices.push(x, y + 1, z);
      vertices.push(x + 1, y + 1, z);
      normals.push(0, 0, -1);
      normals.push(0, 0, -1);
      normals.push(0, 0, -1);
      normals.push(0, 0, -1);

      var a = currIndex++;
      var b = currIndex++;
      var c = currIndex++;
      var d = currIndex++;

      indices.push(a, c, b); //Top
      indices.push(c, d, b);
      

    
    }
  }

  return (
    <mesh ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          array={new Float32Array(vertices)} 
          itemSize={3 
        } 
        count={vertices.length / 3} />
        <bufferAttribute 
          attach="attributes-normal" 
          array={new Float32Array(normals)} 
          itemSize={3} 
          count={normals.length / 3} />
        <bufferAttribute 
          attach="index" 
          array={new Uint16Array(indices)} 
          itemSize={1} 
          count={indices.length} 
        />
      </bufferGeometry>
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}

export default function Home() {
  return (
    <div className="w-full min-w-full h-svh min-h-svh">
      <Canvas camera={{ position: [0, 2, -20], fov: 50}}>
          <ambientLight intensity={0.2} color="white" />
          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
          <directionalLight position={[-10, 60, -30]} intensity={1} color="white" castShadow="true" lookAt={[0, 0, 50]}/>
          <CustomMesh />
      </Canvas>
    </div>
  );
}
