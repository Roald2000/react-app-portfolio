import { useEffect, useState } from "react";

import * as FaI from 'react-icons/fa6';

export default function ThemeToggleButton({ iconSize = 24 }) {
  const [theme, setTheme] = useState('dark');

  const toggle = () => {
    if (theme === "light") {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <button onClick={toggle} className="btn bg-base-300">
      {theme === 'light' ? <FaI.FaMoon size={iconSize} /> : <FaI.FaSun size={iconSize} />}
    </button>
  );
}