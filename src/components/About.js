export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "rgb(148, 85, 134) ",
        padding: "3rem 1.5rem",
        borderRadius: "12px",
        boxShadow: "0 4px 12px var(--shadow)",
        marginBottom: "3rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "",
        }}
      >
        About Me
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.7",
          maxWidth: "700px",
          margin: "0 auto",
          color: "",
        }}
      >
        I’m a full-stack web developer specializing in JavaScript and Python. From crafting sleek, responsive front-end interfaces to designing secure, scalable back-end systems, I help businesses transform ideas into reliable, performant web solutions. Whether you need a new product built from scratch or a legacy system modernized, I deliver clean, efficient code—on time, and with a relentless focus on quality. Let’s build something remarkable together.
      </p>
    </section>
  );
}
