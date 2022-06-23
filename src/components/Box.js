import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import texture from '../images/map.jpg'
// https://www.textures.com/download/PBR1056/142743
import texture2 from '../images/TexturesCom_OldWood2_512_albedo.png'

const SelectedBox = ({selected}) => {
    const colorMap1 = useLoader(TextureLoader, texture)
    const colorMap2 = useLoader(TextureLoader, texture2)

    switch (selected) {
        case '1':
            return <meshLambertMaterial attach="material" color="blue"/>
        case '2':
            return <meshStandardMaterial map={colorMap1}/>
        case '3':
            return <meshStandardMaterial map={colorMap2}/>
        case '4':
            return <meshNormalMaterial attach="material"/>
        default:
            return <meshLambertMaterial attach="material" color="blue"/>
    }
}

const Box = ({selected}) => {


    return (
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]}/>
            <SelectedBox selected={selected}/>
        </mesh>
    )
}

export default Box
