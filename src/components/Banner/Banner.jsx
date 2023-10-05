import  { Suspense } from 'react';
import { Earth } from '../earth';
import { Canvas } from '@react-three/fiber'



export const Banner = () => {
    return (
        <>
            {/* Add your TopSection component here if needed */}

            {/* Main canvas for 3D rendering */}
            <Canvas className='w-screen min-h-screen'>
                <Suspense fallback={null}>
                    {/* Earth component with 3D scene */}
                    <Earth />
                </Suspense>
            </Canvas>
        </>
    );
}

;
