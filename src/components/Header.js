// components/Header.jsx


export default function Header() {
 

  return (
    <header>
      <div className="logo">
        <a href="/" style={{ fontWeight: "bold", fontSize: "1.3rem", color: "black" }}>
          🌟 MAINA
        </a>
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}
