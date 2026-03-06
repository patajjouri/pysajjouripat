export default function Home() {
  return (
    <main style={{ fontFamily: "serif", backgroundColor: "#f5f1eb", color: "#2d2d2d" }}>

      {/* HERO SECTION */}
      <section style={{ position: "relative", width: "100%", height: "80vh", overflow: "hidden" }}>
        
        <div style={{ display: "flex", height: "100%" }}>

          {/* LEFT SIDE — YOUR PHOTO */}
          <div style={{ position: "relative", width: "50%", height: "100%", overflow: "hidden" }}>
            <img
              src="/patricia.jpg"
              alt="Patricia Ajjouri"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(245, 221, 189, 0.35)",
                pointerEvents: "none"
              }}
            />
          </div>

          {/* RIGHT SIDE — SOFA IMAGE */}
          <div style={{ width: "50%", height: "100%", overflow: "hidden" }}>
            <img
              src="/therapy.jpg"
              alt="Therapy Space"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

        </div>

        {/* CENTER TEXT */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#2d2d2d",
            backgroundColor: "rgba(245,241,235,0.75)",
            backdropFilter: "blur(4px)",
            padding: "40px 60px"
          }}
        >
          <h1 style={{ fontSize: "48px", margin: "0", fontWeight: "400" }}>
            Patricia Ajjouri
          </h1>
          <p style={{ marginTop: "10px", letterSpacing: "2px" }}>
            CLINICAL PSYCHOLOGIST | PSYCHOANALYTIC APPROACH
          </p>
        </div>

      </section>

      {/* STATEMENT */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Supporting adults in their emotional processes through a thoughtful,
          ethical, and attentive clinical space.
        </p>
      </section>

      <hr style={{ width: "80%", margin: "0 auto", borderColor: "#d8d2c8" }} />

      {/* ABOUT */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>About</h2>
        <p style={{ lineHeight: "1.8" }}>
          I am a licensed Clinical Psychologist grounded in the psychoanalytic approach,
          offering a space where speech, listening, and subjective experience are central.
        </p>
        <p style={{ lineHeight: "1.8", marginTop: "20px" }}>
          I am currently in my second year of specialization in Clinical Attendance in
          Sexual Diversity and Gender at IPPERG, and as a student at Fórum Lacan São Paulo,
          I continue my studies in contemporary psychoanalytic clinic through the Psicanálise platform.
        </p>
      </section>

      <hr style={{ width: "80%", margin: "0 auto", borderColor: "#d8d2c8" }} />

      {/* PRACTICE AREAS */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "80px",
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Practice Areas</h2>
          <ul style={{ lineHeight: "2" }}>
            <li>Adult psychotherapy</li>
            <li>Sexual diversity and gender</li>
            <li>LGBTQIAPIA+ community support</li>
            <li>Emotional processes and identity</li>
            <li>Migration and displacement experiences</li>
          </ul>
        </div>

        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Community Engagement</h2>
          <p style={{ lineHeight: "1.8" }}>
            I volunteer with ESOU, supporting the LGBTQIAPIA+ elderly community,
            and with Sout, assisting Palestinian refugees with mental health care
            and psychosocial support.
          </p>
        </div>
      </section>

      <hr style={{ width: "80%", margin: "0 auto", borderColor: "#d8d2c8" }} />

      {/* CONTACT */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Contact</h2>

        <p>Online psychotherapy available worldwide.</p>

        <p style={{ marginTop: "10px" }}>
          Languages: Arabic, English, Portuguese
        </p>

        <p style={{ marginTop: "30px", fontSize: "18px" }}>
          Contact:{" "}
          <a href="mailto:your@email.com">Email</a>{" "}
          |{" "}
          <a href="https://wa.me/YOURNUMBER">WhatsApp</a>
        </p>

      </section>

    </main>
  );
}
