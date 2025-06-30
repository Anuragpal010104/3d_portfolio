import React,{useRef,useEffect} from 'react'
import { useGLTF } from '@react-three/drei'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdfRef = useRef();
    const { actions } = useAnimations(animations, birdfRef);

    useEffect(() => {
        actions["Take 001"].play();

    },[]);

    useFrame(({camera,clock}) => {
        //Update the Y position simulate the flight in a sine wave
        birdfRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if(birdfRef.current.position.x > camera.position.x +10 ){
            birdfRef.current.rotation.y = Math.PI;
        } else if(birdfRef.current.position.x < camera.position.x -10 ){
            birdfRef.current.rotation.y = 0;
        }

        if(birdfRef.current.rotation.y == 0 ){
            birdfRef.current.position.x += 0.01;
            birdfRef.current.position.z -= 0.01;
        }
        else{
            birdfRef.current.position.x -= 0.01;
            birdfRef.current.position.z += 0.01;
        }
    });

  return (
    <mesh ref={birdfRef} position={[-5,2,1]} scale={[0.003,0.003,0.003]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird