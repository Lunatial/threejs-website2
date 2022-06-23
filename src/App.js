import {Suspense, useState} from "react";

import styled from "styled-components";
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from "@react-three/drei";

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Box from "./components/Box";
import Select from "./components/Select";
import Scene from "./components/Scene";
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
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={"Loading"}>
                    <Box selected={selected}/>
                </Suspense>
            </Canvas>
            <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={"Loading"}>
                    <AnimatedSphere />
                </Suspense>
            </Canvas>
            {/*<Canvas className="canvas">*/}
            {/*    <OrbitControls enableZoom={false}/>*/}
            {/*    <ambientLight intensity={0.5}/>*/}
            {/*    <directionalLight position={[-2, 5, 2]} intensity={1}/>*/}
            {/*    <Suspense fallback={"Loading"}>*/}
            {/*        /!*https://www.youtube.com/watch?v=wxvSHOrBHbw*!/*/}
            {/*        /!*https://sketchfab.com/3d-models/red-car-wreck-8a540625b599428796cda78578040deb#download*!/*/}
            {/*        /!*https://github.com/CesiumGS/gltf-pipeline*!/*/}
            {/*        /!*https://github.com/pmndrs/gltfjsx*!/*/}
            {/*        <Scene />*/}
            {/*    </Suspense>*/}
            {/*</Canvas>*/}
        </Wrapper>
    );
}

export default App;