import { FaSun, FaMoon } from "react-icons/fa6";
import { useState } from "react";

export default function ToggleThemButton() {
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    const docroot = document.getElementById("docroot");
    if (isDarkMode) {
      docroot.dataset.theme = "light";
    } else {
      docroot.dataset.theme = "dark";
    }
  };

  return (
    <button className="btn" type="button" onClick={() => toggleTheme()}>
      {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
}
