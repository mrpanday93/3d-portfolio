"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import HomeInfo from "@/components/homeinfo";
import Loader from "@/components/loader";
import { soundoff, soundon } from "../../../public/assets/icons";
import Bird from "@/models/Bird";
import Island from "@/models/Island";
import Plane from "@/models/Plane";
import Sky from "@/models/Sky";
import dynamic from "next/dynamic";

const HomePageComponent = () => {
  const bgMusicAudioRef = useRef(new Audio(`/assets/african-inspiration.mp3`));
  bgMusicAudioRef.current.volume = 0.5;
  bgMusicAudioRef.current.loop = true;

  const propellAudioRef = useRef(new Audio(`/assets/propellerwav.mp3`));
  propellAudioRef.current.volume = 0.25;
  propellAudioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setIsPlayingMusic(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isRotating) {
      propellAudioRef.current.play();
    } 

    return () => {
      propellAudioRef.current.pause();
    };
  }, [isRotating]);

  useEffect(() => {
    if (isPlayingMusic) {
      bgMusicAudioRef.current.play();
    }

    return () => {
      bgMusicAudioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <Suspense>
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />

            <Bird />
            <Sky isRotating={isRotating} />
            <Island
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              position={islandPosition}
              rotation={[0.1, 4.7077, 0]}
              scale={islandScale}
            />
            <Plane
              isRotating={isRotating}
              position={biplanePosition}
              rotation={[0, 20.1, 0]}
              scale={biplaneScale}
            />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-2 left-2">
          <Image
            width={16}
            height={16}
            src={!isPlayingMusic ? soundoff : soundon}
            alt="jukebox"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-10 h-10 cursor-pointer object-contain"
          />
        </div>
      </section>
    </Suspense>
  );
};

export default HomePageComponent;