import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SpinningCube from './SpinningCube';

function App() {
  return (
   <div className = "fixed inset-0 bg-black">
  <Canvas
    camera={{ position: [0, 0, 5], fov: 75 }}
    style={{ width: '100%', height: '100%', background: '#111' }}
  >
    <ambientLight intensity={1} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <SpinningCube />
    <OrbitControls />
  </Canvas>
</div>
  );
}

export default App;
