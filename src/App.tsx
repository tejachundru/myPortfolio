/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './app/routes';
import ThemeProvider from './theme';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { initAnalytics } from './utils/analytics';
import usePageTracking from './app/routes/usePageTracking';

function App() {
  initAnalytics();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: { clientX: number; clientY: number }) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/*
        CUSTOM CURSOR
      */}
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </ThemeProvider>
  );
}

export default App;
