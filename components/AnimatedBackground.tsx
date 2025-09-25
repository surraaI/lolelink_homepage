import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
}

export const AnimatedBackground = ({ className = '' }: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital stream lines configuration
    const lines: Array<{
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
    }> = [];
    
    const lineCount = 80; // Increased for more digital feel
    const maxLineLength = 4;
    const speed = 0.8;

    // Initialize lines with random positions and properties
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * maxLineLength + 1,
        speed: Math.random() * speed + 0.3,
        opacity: Math.random() * 0.4 + 0.1, // Slightly more visible
      });
    }

    const animate = () => {
      // Clear canvas with deep black background
      ctx.fillStyle = '#010509';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update each line
      lines.forEach(line => {
        // Move line downward
        line.y += line.speed;
        
        // Reset if off screen - sometimes reset to random position for more digital feel
        if (line.y > canvas.height + line.length) {
          line.y = -line.length;
          line.x = Math.random() * canvas.width;
          // Occasionally create clusters by not always resetting to random x
          if (Math.random() > 0.7) {
            line.x = Math.random() * canvas.width;
          }
        }

        // Draw the digital stream line
        ctx.strokeStyle = `rgba(17, 112, 185, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        // Occasionally draw a small "glow" or secondary line for digital effect
        if (Math.random() > 0.95) {
          ctx.strokeStyle = `rgba(17, 112, 185, ${line.opacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(line.x + 1, line.y);
          ctx.lineTo(line.x + 1, line.y + line.length * 0.7);
          ctx.stroke();
        }
      });

      // Occasionally add new lines for dynamic effect
      if (Math.random() > 0.98 && lines.length < 100) {
        lines.push({
          x: Math.random() * canvas.width,
          y: -maxLineLength,
          length: Math.random() * maxLineLength + 1,
          speed: Math.random() * speed + 0.3,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`fixed inset-0 overflow-hidden ${className}`}>
      {/* Deep black background */}
      <div className="absolute inset-0 bg-[#010509]" />
      
      {/* Digital Stream Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Subtle radial overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1170B9]/5 to-[#010509]/30" />
      
      {/* Optional: Very subtle floating elements for depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1170B9] rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#1170B9] rounded-full blur-3xl animate-pulse-medium" />
      </div>
    </div>
  );
};