import React, { useEffect, useRef, useState } from 'react';

const GameCanvas = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const width = 480;
  const height = 800;
  const [sunPos, setSunPos] = useState(0);
  const [tankXTarget, setTankXTarget] = useState(240);
  const [bullets, setBullets] = useState([0]);
  const [doPobrania, setDoPobrania] = useState(0);

  
  const images = useRef({
    mountains: null,
    hills: null,
    ground: null,
    tank: null,
    cloud1: null,
    cloud2: null,
    sun: null,
    bullet: null,
    alien: null,
  });

  
  const loadImg = (path) => {
    setDoPobrania((prev) => prev + 1);
    const img = new Image();
    img.src = path;
    img.onload = () => {
      setDoPobrania((prev) => prev - 1);
      console.log(`Loaded: ${path}`);
    };
    img.onerror = () => {
      console.error(`Failed to load: ${path}`);
    };
    return img;
  };

  
  const loadResources = () => {
    images.current.mountains = loadImg('../Images/mountains_blurred.png');
    images.current.hills = loadImg('../Images/hills.png');
    images.current.ground = loadImg('../Images/ground.png');
    images.current.tank = loadImg('../Images/tank.png');
    images.current.cloud1 = loadImg('../Images/cloud1.png');
    images.current.cloud2 = loadImg('../Images/cloud2.png');
    images.current.sun = loadImg('../Images/sun.png');
    images.current.bullet = loadImg('../Images/bullet.png');
    images.current.alien = loadImg('../Images/alien1.png');
  };

  useEffect(() => {
    if (doPobrania === 0 && ctx) {
      console.log('Starting game loop');
      requestAnimationFrame(drawGameWorld);
    }
  }, [doPobrania, ctx]);

  const drawGameWorld = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#6495ED';
    ctx.fillRect(0, 0, width, height);

    
    ctx.drawImage(images.current.mountains, 0, height - 401);
    ctx.drawImage(images.current.hills, 0, height - 175);
    ctx.drawImage(images.current.ground, 0, height - 86);

    setSunPos((prev) => prev + 0.001);
    ctx.drawImage(images.current.sun, sunPos % width, 0); // Umożliwia powtarzanie słońca

    ctx.drawImage(images.current.cloud1, 150, 50);
    ctx.drawImage(images.current.cloud2, 300, 20);

    ctx.drawImage(images.current.tank, tankXTarget - images.current.tank.width / 2, height - images.current.ground.height - images.current.tank.height); // Dostosowanie pozycji czołgu
    ctx.drawImage(images.current.alien, 100,200);

    drawBullets();
    
    requestAnimationFrame(drawGameWorld);
  };

  
const drawBullets = () => {
   setBullets((prevBullets) => {
     const updatedBullets = prevBullets.filter((bullet) => bullet.Y > -10 && !bullet.IsDirty); // Utrzymuj pociski w granicach ekranu
     updatedBullets.forEach((bullet) => {
       bullet.Y -= 20; // Poruszanie pocisku w górę
       ctx.drawImage(images.current.bullet, bullet.X + (images.current.bullet.width /2), bullet.Y); // Rysowanie pocisku z odpowiednią pozycją X
     });
     return updatedBullets; 
   });
 };

const handleMouseMove = (e) => {
   const canvasRect = canvasRef.current.getBoundingClientRect();
   const x = e.clientX - canvasRect.left; // Obliczamy pozycję w obrębie kanwy
   setTankXTarget(Math.min(Math.max(x , images.current.tank.width /2), width - images.current.tank.width /2)); // Utrzymujemy czołg w granicach
};

const handleKeyDown = (e) => {
   if (e.keyCode == 37) { 
     setTankXTarget((prev) => Math.max(0 , prev -10));
   } else if (e.keyCode == 32 ) { 
     fire();
   }
};

const fire= (bullets) =>{
  setBullets((prevBullets) => [...prevBullets, { X: tankXTarget - 8, Y: 644, IsDirty: false }])
};

useEffect(() => {
   const canvas= canvasRef.current;
   if(canvas){
     const context=canvas.getContext('2d');
     setCtx(context);
     loadResources();
     document.addEventListener('mousemove', handleMouseMove);
     document.addEventListener('keydown', handleKeyDown)
     return() =>{
       document.removeEventListener('mousemove', handleMouseMove);
       document.removeEventListener('keydown', handleKeyDown);
     };
   }
}, [handleKeyDown,handleMouseMove]);

return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default GameCanvas;
