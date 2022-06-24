import {Suspense, useState} from "react";

import styled from "styled-components";
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import Select from "./components/Select";
import Iphone from "./components/Iphone";
import './styles.css';
import AnimatedSphere from "./components/AnimatedSphere";

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
  }
`;

function App() {
    const [selected, setSelected] = useState('1')
    return (
        <Wrapper className="App">
            <Background/>
            <TextSection/>
            <Select setSelected={setSelected} selected={selected} />
            <Canvas className="canvas">
                <OrbitControls enableZoom={true}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={"Loading"}>
                    <Box selected={selected}/>
                </Suspense>
            </Canvas>
            <Canvas className="canvas">
                <OrbitControls enableZoom={true}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={"Loading"}>
                    <AnimatedSphere />
                </Suspense>
            </Canvas>
            <Canvas className="canvas">
                <OrbitControls enableZoom={true}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={"Loading"}>
                    {/*https://www.youtube.com/watch?v=wxvSHOrBHbw*/}
                    {/*https://sketchfab.com/3d-models/apple-iphone-13-pro-max-4328dea00e47497dbeac73c556121bc9#download*/}
                    {/*https://github.com/CesiumGS/gltf-pipeline*/}
                    {/*https://github.com/pmndrs/gltfjsx*/}
                    <Iphone />
                </Suspense>
            </Canvas>
        </Wrapper>
    );
}

export default App;
