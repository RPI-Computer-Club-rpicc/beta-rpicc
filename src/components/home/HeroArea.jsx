import React, { useEffect, useRef } from "react";
import { PiMouseSimpleThin } from "react-icons/pi";
import MemberRecruitment from "../registration2025/MemberRecruitment";
import SocialMediaLinks from "../common/SocialMediaLinks";
import { motion } from "framer-motion";
import { Link } from "react-router";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  const codeChars = [
    "{",
    "}",
    "(",
    ")",
    ";",
    "=",
    ">",
    "<",
    "[",
    "]",
    "/",
    "*",
    "+",
    "-",
    "|",
    "&",
    "^",
    "%",
    "!",
    "?",
    ":",
    ",",
    ".",
    "~",
    "`",
    "@",
    "#",
    "$",
  ];
  const colors = ["#64ffda", "#a8b2d1", "#ccd6f6", "#e6f1ff", "#8892b0"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ✅ Clamp DPR for mobile
    let DPR = Math.min(2, Math.max(1, window.devicePixelRatio || 1));

    const setSize = () => {
      const w = window.visualViewport?.width || window.innerWidth;
      const h = window.visualViewport?.height || window.innerHeight;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      ctx.font = '14px "Fira Code", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    };
    setSize();

    const mouse = {
      x: null,
      y: null,
      lastX: 0,
      lastY: 0,
      speed: 0,
      radius: 120,
    };

    const particles = [];
    const isCoarse =
      window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    const total = isCoarse ? 45 : 200; // ✅ fewer particles for phones

    for (let i = 0; i < total; i++) {
      const depth = Math.random() * 1.8 + 0.6;
      const size = (Math.random() * 14 + 8) * (1 / depth);
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const dx = (Math.random() - 0.5) * (0.2 + 0.6 * (1 / depth));
      const dy = (Math.random() - 0.5) * (0.2 + 0.6 * (1 / depth));
      const char = codeChars[Math.floor(Math.random() * codeChars.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x,
        y,
        size,
        dx,
        dy,
        vx: 0,
        vy: 0,
        depth,
        char,
        color,
        opacity: Math.random() * 0.4 + 0.1,
        targetChar: char,
        charChangeTimer: Math.floor(Math.random() * 100),
      });
    }

    const update = () => {
      particles.forEach((p) => {
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.x += p.dx + p.vx;
        p.y += p.dy + p.vy;

        if (p.x < -50) p.x = window.innerWidth + 50;
        if (p.x > window.innerWidth + 50) p.x = -50;
        if (p.y < -50) p.y = window.innerHeight + 50;
        if (p.y > window.innerHeight + 50) p.y = -50;

        if (p.charChangeTimer-- <= 0) {
          p.charChangeTimer = 50 + Math.random() * 200;
          p.targetChar =
            codeChars[Math.floor(Math.random() * codeChars.length)];
        }

        p.char =
          p.char === p.targetChar
            ? p.char
            : p.char < p.targetChar
            ? String.fromCharCode(p.char.charCodeAt(0) + 1)
            : String.fromCharCode(p.char.charCodeAt(0) - 1);

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          const effectiveRadius = mouse.radius + mouse.speed * 1.5;

          if (dist < effectiveRadius) {
            const angle = Math.atan2(dy, dx);
            const force = (effectiveRadius - dist) / effectiveRadius;
            const push = 6 * force * (1 / p.depth);
            p.vx -= Math.cos(angle) * push;
            p.vy -= Math.sin(angle) * push;
          }
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const p of particles) {
        ctx.font = `${p.size}px "Fira Code", monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.char, p.x, p.y);
      }
      ctx.globalAlpha = 1;
    };

    let frame = 0;
    const loop = () => {
      frame++;
      // ✅ lower frame rate on mobile
      if (!isCoarse || frame % 2 === 0) {
        update();
        draw();
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    // ✅ Touch-safe pointer handling
    const handlePointerMove = (e) => {
      const isTouch = e.touches && e.touches.length > 0;
      const cx = isTouch ? e.touches[0].clientX : e.clientX;
      const cy = isTouch ? e.touches[0].clientY : e.clientY;
      if (cx == null || cy == null) return;

      const dx = cx - mouse.lastX;
      const dy = cy - mouse.lastY;
      mouse.speed = Math.min(Math.hypot(dx, dy), 50);
      mouse.lastX = cx;
      mouse.lastY = cy;
      mouse.x = cx;
      mouse.y = cy;
    };

    const handlePointerUp = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.speed = 0;
    };

    const handleResize = () => setSize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-base-100">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto w-full space-y-8 py-12">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Welcome To <span className="text-sky-400">RPICC</span>
            </h1>
            <p className="text-sl my-3 text-gray-300">
              Where Innovation Meets Opportunity .
            </p>
            <div className="text-xl md:text-3xl font-medium text-sky-500 mb-6">
              Learn • Build • Innovate
            </div>
            <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto">
              At RPI Computer Club, we bridge the gap between academia and
              industry — empowering students to transform ideas into impactful
              innovations.
            </p>
          </motion.div>

          {/* Member Recruitment Banner */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MemberRecruitment />
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              to="/join"
              className="w-full sm:w-auto px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-sky-500/20"
            >
              Join Our Community
            </Link>
            <Link
              to="/membership"
              className="w-full sm:w-auto px-8 py-3 border border-sky-500 text-sky-400 hover:bg-sky-900/30 font-medium rounded-lg transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="mt-10 pt-6 border-t border-sky-900/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-sm text-sky-400/80 mb-3">CONNECT WITH US</p>
            <div className="flex justify-center">
              <SocialMediaLinks />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mouse Hint */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 text-sm z-10">
        <PiMouseSimpleThin className="text-2xl mb-1 animate-bounce" />
        <span>Move your cursor to interact</span>
      </div> */}
    </div>
  );
};

export default AnimatedBackground;
