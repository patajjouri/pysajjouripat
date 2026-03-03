export default function Page() {
  return (
    <div style={{
      fontFamily: "Georgia, serif",
      backgroundColor: "#f2ede6",
      color: "#2a2a2a",
      padding: "80px 24px",
      lineHeight: "1.9"
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* Header */}
        <header style={{ marginBottom: "90px" }}>
          <h1 style={{
            fontSize: "40px",
            fontWeight: "400",
            letterSpacing: "0.5px",
            marginBottom: "12px"
          }}>
            Patricia Ajjouri
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#6b6b6b"
          }}>
            Clinical Psychologist · Psychoanalytic Orientation
          </p>
        </header>

        <hr style={{ border: "none", borderTop: "1px solid #ddd6cc", marginBottom: "90px" }} />

        {/* Introduction */}
        <section style={{ marginBottom: "90px" }}>
          <p>
            Online psychotherapy for adults, conducted within an ethically sustained space of listening.
            Sessions are available worldwide in Portuguese, English, and Arabic.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #ddd6cc", marginBottom: "90px" }} />

        {/* About */}
        <section style={{ marginBottom: "90px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "30px", fontWeight: "500" }}>
            About
          </h2>

          <p>
            I am a licensed Clinical Psychologist with active professional registration (CRP) in Brazil.
            My work is grounded in psychoanalysis, particularly within the Lacanian field, where listening
            is understood as an ethical position — one that allows each subject to articulate their singular
            relation to desire, suffering, and the symptom.
          </p>

          <br />

          <p>
            I am currently in my second year of specialization in Clinical Practice focused on Sexual
            Diversity and Gender at IPPERG. I am in psychoanalytic formation at the Lacanian Forum in
            São Paulo and studying “The Contemporary Clinic and the (Dis)course of the Symptom.”
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #ddd6cc", marginBottom: "90px" }} />

        {/* Areas */}
        <section style={{ marginBottom: "90px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "30px", fontWeight: "500" }}>
            Areas of Practice
          </h2>

          <p>
            Adult Psychotherapy<br />
            Sexual Diversity and Gender<br />
            LGBTQIAPIA+ Mental Health<br />
            Migration and Cultural Displacement<br />
            Anxiety, Depression, and Psychic Suffering
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #ddd6cc", marginBottom: "90px" }} />

        {/* Community */}
        <section style={{ marginBottom: "90px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "30px", fontWeight: "500" }}>
            Community Engagement
          </h2>

          <p>
            I volunteer with ESOU, supporting members of the LGBTQIAPIA+ community,
            with particular attention to the elderly population.
          </p>

          <br />

          <p>
            I also collaborate with Sout, assisting refugees from Palestine by offering
            psychological support and facilitating access to mental health care.
          </p>
        </section>

        <hr style={{ border: "none", borderTop: "1px solid #ddd6cc", marginBottom: "90px" }} />

        {/* Contact */}
        <section>
          <h2 style={{ fontSize: "20px", marginBottom: "30px", fontWeight: "500" }}>
            Contact
          </h2>

          <p>
            For appointments or further information:
          </p>

          <p style={{ marginTop: "20px", fontWeight: "500" }}>
            <a 
              href="mailto:pyspatajjouri@gmail.com"
              style={{ color: "#2a2a2a", textDecoration: "none" }}
            >
              pyspatajjouri@gmail.com
            </a>
          </p>

          <p style={{ marginTop: "40px", fontSize: "14px", color: "#7a7a7a" }}>
            All sessions are conducted online and follow professional ethical
            guidelines with strict confidentiality.
          </p>
        </section>

      </div>
    </div>
  );
}
