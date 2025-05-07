"use client";

import { useEffect, useRef } from "react";

export function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Define gradient spots first, before any functions that use them
    let spots = [
      { x: 0, y: 0, radius: 0, color: "rgba(128, 0, 128, 0.15)" }, // Purple top left
      { x: 0, y: 0, radius: 0, color: "rgba(128, 0, 128, 0.2)" }, // Purple top right
      { x: 0, y: 0, radius: 0, color: "rgba(139, 0, 0, 0.15)" }, // Dark red bottom left
      { x: 0, y: 0, radius: 0, color: "rgba(0, 128, 128, 0.15)" }, // Teal bottom right
      { x: 0, y: 0, radius: 0, color: "rgba(0, 0, 0, 0)" }, // Center dark spot
    ];

    // Update spot positions based on window size
    const updateSpotPositions = () => {
      spots = [
        {
          x: 0,
          y: 0,
          radius: window.innerWidth * 0.6,
          color: "rgba(128, 0, 128, 0.15)",
        }, // Purple top left
        {
          x: window.innerWidth,
          y: 0,
          radius: window.innerWidth * 0.5,
          color: "rgba(128, 0, 128, 0.2)",
        }, // Purple top right
        {
          x: 0,
          y: window.innerHeight,
          radius: window.innerWidth * 0.5,
          color: "rgba(139, 0, 0, 0.15)",
        }, // Dark red bottom left
        {
          x: window.innerWidth * 0.7,
          y: window.innerHeight,
          radius: window.innerWidth * 0.6,
          color: "rgba(0, 128, 128, 0.15)",
        }, // Teal bottom right
        {
          x: window.innerWidth * 0.5,
          y: window.innerHeight * 0.5,
          radius: window.innerWidth * 0.3,
          color: "rgba(0, 0, 0, 0)",
        }, // Center dark spot
      ];
    };

    // Set canvas dimensions to match window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateSpotPositions(); // Update spots when resizing
      draw(); // Now draw() is called after spots is defined
    };

    function draw() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fill with black background
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each gradient spot
      spots.forEach((spot) => {
        const gradient = ctx.createRadialGradient(
          spot.x,
          spot.y,
          0,
          spot.x,
          spot.y,
          spot.radius
        );
        gradient.addColorStop(0, spot.color);
        gradient.addColorStop(1, "rgba(18, 18, 18, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add subtle noise texture
      addNoise(ctx, canvas.width, canvas.height, 0.01);

      // Add subtle grid pattern
      addGrid(ctx, canvas.width, canvas.height);
    }

    function addNoise(
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      alpha: number
    ) {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * alpha;
        data[i] = Math.min(255, data[i] * (1 + noise));
        data[i + 1] = Math.min(255, data[i + 1] * (1 + noise));
        data[i + 2] = Math.min(255, data[i + 2] * (1 + noise));
      }

      ctx.putImageData(imageData, 0, 0);
    }

    function addGrid(
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    ) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;

      const gridSize = 40;

      // Draw vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize canvas size and draw

    // Animate subtle movement
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.001;

      // Update spot positions slightly for subtle movement
      spots.forEach((spot, index) => {
        if (index > 0) {
          // Don't move the first spot
          spot.x += Math.sin(time + index) * 0.2;
          spot.y += Math.cos(time + index) * 0.2;
        }
      });

      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
}
