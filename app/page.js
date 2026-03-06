export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#2c3e50" }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px 10%",
          backgroundImage: "url('/therapy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* LEFT TEXT */}
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            padding: "40px",
            borderRadius: "10px",
            maxWidth: "500px",
          }}
        >
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
            Patricia Ajjouri
          </h1>

          <h2 style={{ fontWeight: "normal", marginBottom: "20px" }}>
            Clinical Psychologist
          </h2>

          <p style={{ lineHeight: "1.6" }}>
            A calm and supportive space for reflection, healing, and personal
            growth. My work focuses on helping individuals navigate emotional
            challenges, anxiety, relationships, and life transitions.
          </p>
        </div>

        {/* RIGHT PHOTO */}
        <div>
          <img
            src="/patricia.jpg"
            alt="Patricia Ajjouri"
            style={{
              width: "320px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "60px 10%", background: "#f6f9f8" }}>
        <h2>About</h2>

        <p style={{ maxWidth: "700px", lineHeight: "1.7" }}>
          I provide psychological support in a respectful, confidential, and
          compassionate environment. My goal is to help individuals better
          understand themselves, manage emotional difficulties, and develop
          healthier ways of relating to themselves and others.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ padding: "60px 10%" }}>
        <h2>Contact</h2>

        <p>Email: pyspatajjouri@gmail.com</p>

        <p>Phone / WhatsApp: 0551199816969</p>

        <a
          href="https://wa.me/551199816969"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "12px 22px",
            background: "#25D366",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          background: "#f1f1f1",
          marginTop: "40px",
        }}
      >
        © Patricia Ajjouri – Clinical Psychologist
      </footer>

    </main>
  );
}
