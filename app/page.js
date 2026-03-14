export default function Home() {
  return (
    <main style={{ fontFamily: "serif", backgroundColor: "#f5f1eb", color: "#2d2d2d" }}>

      {/* NAVIGATION BAR */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#f5f1eb",
          borderBottom: "1px solid #ddd",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000
        }}
      >
        <div style={{ fontSize: "20px" }}>Patricia Ajjouri</div>

        <div style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
          <a href="#about" style={{ textDecoration: "none", color: "#2d2d2d" }}>About</a>
          <a href="#practice" style={{ textDecoration: "none", color: "#2d2d2d" }}>Practice</a>
          <a href="#contact" style={{ textDecoration: "none", color: "#2d2d2d" }}>Contact</a>
        </div>
      </nav>


      {/* HERO SECTION */}
      <section style={{ position: "relative", width: "100%", height: "90vh", overflow: "hidden", marginTop: "80px" }}>

        <div style={{ display: "flex", height: "100%" }}>

          {/* YOUR PHOTO */}
          <div style={{ position: "relative", width: "50%", height: "100%" }}>
            <img
              src="/patricia.png"
              alt="Patricia Ajjouri"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(100%) contrast(105%)"
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(245,221,189,0.25)"
              }}
            />
          </div>


          {/* THERAPY SOFA */}
          <div style={{ width: "50%", height: "100%" }}>
            <img
              src="/Therapy.jpg"
              alt="Therapy space"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(40%) brightness(95%)"
              }}
            />
          </div>

        </div>


        {/* CENTER TEXT */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "rgba(245,241,235,0.8)",
            padding: "40px 70px",
            textAlign: "center"
          }}
        >
          <h1 style={{ fontSize: "48px", margin: 0, fontWeight: "400" }}>
            Patricia Ajjouri
          </h1>

          <p style={{ marginTop: "10px", letterSpacing: "2px" }}>
            CLINICAL PSYCHOLOGIST | PSYCHOANALYTIC APPROACH
          </p>
        </div>

      </section>


      {/* STATEMENT */}
      <section style={{ textAlign: "center", padding: "70px 20px" }}>
        <p style={{ fontSize: "20px", maxWidth: "700px", margin: "0 auto" }}>
          Supporting adults in their emotional processes through a thoughtful,
          ethical, and attentive clinical space.
        </p>
      </section>


      <hr style={{ width: "80%", margin: "0 auto", borderColor: "#d8d2c8" }} />


      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
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


      {/* PRACTICE */}
      <section id="practice"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "80px",
          padding: "80px 20px",
          maxWidth: "1100px",
          margin: "0 auto"
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
            I volunteer with ESOU supporting the LGBTQIAPIA+ elderly community
            and with Sout assisting Palestinian refugees with mental health care
            and psychosocial support.
          </p>
        </div>

      </section>


      <hr style={{ width: "80%", margin: "0 auto", borderColor: "#d8d2c8" }} />


      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Contact</h2>

        <p>Online psychotherapy available worldwide.</p>

        <p style={{ marginTop: "10px" }}>
          Languages: Arabic, English, Portuguese
        </p>

        <p style={{ marginTop: "20px" }}>
          Email: <a href="mailto:pyspatajjouri@gmail.com">pyspatajjouri@gmail.com</a>
        </p>

        <p>
          WhatsApp: <a href="https://wa.me/551199816969">+55 11 99816-969</a>
        </p>

      </section>


      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/551199816969"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50px",
          padding: "14px 20px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        WhatsApp
      </a>


    </main>
  );
}
