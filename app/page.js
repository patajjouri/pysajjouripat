export default function Page() {
  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#f6f3ef",
      color: "#2f2f2f",
      padding: "100px 28px",
      lineHeight: "1.8"
    }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

        {/* Header */}
        <section style={{ marginBottom: "120px" }}>
          <h1 style={{
            fontSize: "42px",
            fontWeight: "300",
            letterSpacing: "0.5px",
            marginBottom: "16px"
          }}>
            Patricia Ajjouri
          </h1>

          <p style={{
            fontSize: "18px",
            color: "#6e6e6e",
            maxWidth: "500px"
          }}>
            Clinical Psychologist · Psychoanalytic Orientation  
            Online psychotherapy for adults worldwide.
          </p>
        </section>

        {/* About */}
        <section style={{ marginBottom: "100px", maxWidth: "680px" }}>
          <p>
            I am a licensed Clinical Psychologist with active professional registration (CRP) in Brazil. 
            My clinical work is grounded in psychoanalysis, particularly within the Lacanian field, 
            where listening is understood as an ethical position — one that allows each subject 
            to articulate their singular relation to desire, suffering, and the symptom.
          </p>

          <br />

          <p>
            I am currently in my second year of specialization in Clinical Practice focused on Sexual 
            Diversity and Gender at IPPERG. I am in psychoanalytic formation at the Lacanian Forum in São Paulo 
            and studying “The Contemporary Clinic and the (Dis)course of the Symptom.”
          </p>
        </section>

        {/* Practice Areas */}
        <section style={{ marginBottom: "100px" }}>
          <h2 style={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "30px"
          }}>
            Areas of Practice
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            maxWidth: "600px"
          }}>
            <div>Adult Psychotherapy</div>
            <div>Sexual Diversity & Gender</div>
            <div>LGBTQIAPIA+ Mental Health</div>
            <div>Migration & Cultural Displacement</div>
            <div>Anxiety & Depression</div>
          </div>
        </section>

        {/* Community */}
        <section style={{ marginBottom: "100px", maxWidth: "680px" }}>
          <h2 style={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "30px"
          }}>
            Community Engagement
          </h2>

          <p>
            I volunteer with ESOU, supporting members of the LGBTQIAPIA+ community, 
            with particular attention to the elderly population.
          </p>

          <br />

          <p>
            I also collaborate with Sout, assisting refugees from Palestine 
            by offering psychological support and facilitating access to mental health care.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 style={{
            fontSize: "20px",
            fontWeight: "500",
            marginBottom: "20px"
          }}>
            Contact
          </h2>

          <p>
            Sessions are conducted online in Portuguese, English, and Arabic.
          </p>

          <p style={{
            marginTop: "25px",
            fontSize: "18px",
            fontWeight: "500"
          }}>
            <a
              href="mailto:pyspatajjouri@gmail.com"
              style={{
                color: "#2f2f2f",
                textDecoration: "none",
                borderBottom: "1px solid #c8c2bb",
                paddingBottom: "3px"
              }}
            >
              pyspatajjouri@gmail.com
            </a>
          </p>

          <p style={{
            marginTop: "40px",
            fontSize: "14px",
            color: "#8a8a8a"
          }}>
            All sessions follow professional ethical guidelines and strict confidentiality.
          </p>
        </section>

      </div>
    </div>
  );
}
