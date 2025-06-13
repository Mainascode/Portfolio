import { useEffect, useState } from 'react';

export default function Header() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.classList.toggle('dark-theme', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={() => setDark((prev) => !prev)}>
        {dark ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}
