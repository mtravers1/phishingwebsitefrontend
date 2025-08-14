// pages/evil-fishfood.jsx
"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
export default function EvilFishFood() {
  // Matrix rain effect logic
  const [columns, setColumns] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      const colCount = Math.floor(window.innerWidth / 20);
      setColumns(new Array(colCount).fill(0));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>{`
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {opacity: 1;}
          20%, 22%, 24%, 55% {opacity: 0.4;}
        }
        @keyframes glitch1 {
          0% { clip-path: inset(0 0 45% 0); transform: translate(-2px, -2px);}
          20% { clip-path: inset(50% 0 0 0); transform: translate(2px, 2px);}
          40% { clip-path: inset(0 0 45% 0); transform: translate(-2px, 2px);}
          60% { clip-path: inset(50% 0 0 0); transform: translate(2px, -2px);}
          80% { clip-path: inset(0 0 45% 0); transform: translate(-2px, -2px);}
          100% { clip-path: inset(0 0 45% 0); transform: translate(0,0);}
        }
        @keyframes glitch2 {
          0% { clip-path: inset(50% 0 0 0); transform: translate(2px, 2px);}
          20% { clip-path: inset(0 0 45% 0); transform: translate(-2px, -2px);}
          40% { clip-path: inset(50% 0 0 0); transform: translate(2px, -2px);}
          60% { clip-path: inset(0 0 45% 0); transform: translate(-2px, 2px);}
          80% { clip-path: inset(50% 0 0 0); transform: translate(2px, 2px);}
          100% { clip-path: inset(50% 0 0 0); transform: translate(0,0);}
        }
        /* Matrix rain */
        .matrix-canvas {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 0;
          background: black;
        }
        /* Neon text style */
        .neon-text {
          font-family: 'Courier New', Courier, monospace;
          color: #0ff;
          font-size: 3rem;
          text-align: center;
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff,
            0 0 80px #00ffff88;
          animation: flicker 3s infinite;
          position: relative;
          margin-bottom: 1rem;
          user-select: none;
        }
        .neon-text::before {
          content: attr(data-text);
          position: absolute;
          left: 2px;
          text-shadow:
            -2px 0 red,
            2px 2px cyan;
          top: 0;
          color: #0ff;
          animation: glitch1 2s infinite;
          clip-path: inset(0 0 45% 0);
        }
        .neon-text::after {
          content: attr(data-text);
          position: absolute;
          left: -2px;
          text-shadow:
            2px 0 magenta,
            -2px -2px cyan;
          top: 0;
          color: #0ff;
          animation: glitch2 1.5s infinite;
          clip-path: inset(50% 0 0 0);
        }
        .alert-box {
          background: #110022cc;
          border: 2px solid #00ffffcc;
          color: #00ffff;
          padding: 2rem;
          font-family: monospace;
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          border-radius: 12px;
          box-shadow:
            0 0 10px #0ff,
            0 0 40px #00ffff88;
          user-select: none;
          line-height: 1.5;
          text-align: center;
          letter-spacing: 0.05em;
          white-space: pre-line;
        }
        /* Fish ASCII with subtle wave animation */
        .fish-ascii {
          font-family: monospace;
          color: #00ffff88;
          font-size: 1.2rem;
          text-align: center;
          user-select: none;
          margin-top: 2rem;
          animation: wave 4s ease-in-out infinite;
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0);}
          50% { transform: translateX(5px);}
        }
      `}</style>

      <MatrixRain columns={columns} />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "rgba(0,0,0,0.85)",
          color: "#0ff",
        }}
      >
        <h1 className="neon-text" data-text="YOUR DATA HAS BEEN STOLEN!" >
          YOUR DATA HAS BEEN STOLEN!
        </h1>
        <div className="alert-box">
          ALERT!<br />
          You Have Been Cat Phished — including:<br />
          - Name<br />
          - Email<br />
          
          - We even found out your social security..... or at least next time we will<br />
          <br />
          {/* No amount of fish food can save you now...<br /> */}
          <br />
          <strong>Consider this a warning:</strong> You are gullible to phishing emails.
        </div>
        <button><Link href="/">Click here to Go back home and dont let this happen again</Link></button>
        <pre className="fish-ascii">
{`
><(((º>   ><(((º>     ><(((º>       
      ><(((º>     ><(((º>           
`}
        </pre>
      </main>
    </>
  );
}

function MatrixRain({ columns }) {
  // Classic matrix rain effect in canvas
  // Each column has a y-position for the dropping characters
  // Characters: 0,1 plus some hex letters to look "hacker style"
  const canvasRef = React.useRef();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 18;
    const columnsCount = Math.floor(width / fontSize);

    const drops = Array(columnsCount).fill(1);

    const chars = "01ABCDEF";

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0F0"; // green text
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, [columns]);

  return <canvas className="matrix-canvas" ref={canvasRef}></canvas>;
}
