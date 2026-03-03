export default function Page() {
  return (
    <div style={{
      fontFamily: "Georgia, serif",
      backgroundColor: "#f5f1eb",
      color: "#2c2c2c",
      padding: "60px 20px",
      lineHeight: "1.8"
    }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>

        <h1 style={{ 
          fontSize: "36px",
          fontWeight: "500",
          marginBottom: "10px"
        }}>
          Patricia Ajjouri
        </h1>

        <p style={{ 
          fontSize: "18px",
          marginBottom: "40px",
          color: "#5a5a5a"
        }}>
          Clinical Psychologist | Psychoanalytic Orientation
        </p>

        <section style={{ marginBottom: "50px" }}>
          <p>
            Online psychotherapy for adults in a confidential and ethically sustained space of listening. 
            Sessions are available worldwide in Portuguese, English, and Arabic.
          </p>
        </section>

        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>About</h2>

          <p>
            I am a licensed Clinical Psychologist with an active CRP registration in Brazil. 
            My work is oriented by psychoanalysis, particularly within the Lacanian field, 
            where listening is understood as an ethical position — one that allows each subject 
            to articulate their singular relation to desire, suffering, and the symptom.
          </p>

          <br />

          <p>
            I am currently in my second year of specialization in Clinical Practice focused on Sexual Diversity 
            and Gender at IPPERG. I am also in psychoanalytic formation at the Lacanian Forum in São Paulo 
            and studying “The Contemporary Clinic and the (Dis)course of the Symptom” through the Psicanálise platform.
          </p>

          <br />

          <p>
            My clinical practice engages contemporary configurations of subjectivity, including 
            questions of identity, gender, migration, exile, and the subjective effects of social 
            and political discourse.
          </p>
        </section>

        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>Areas of Practice</h2>
          <p>
            Adult Psychotherapy<br />
            Sexual Diversity and Gender<br />
            LGBTQIAPIA+ Mental Health<br />
            Migration and Cultural Displacement<br />
            Anxiety, Depression, and Psychic Suffering
          </p>
        </section>

        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>Community Engagement</h2>

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

        <section>
          <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>Contact</h2>
          <p>
            For appointments or further information:
          </p>

          <p style={{ marginTop: "10px", fontWeight: "500" }}>
            pyspatajjouri@gmail.com
          </p>

          <p style={{ marginTop: "30px", fontSize: "14px", color: "#6e6e6e" }}>
            All sessions are conducted online and follow professional ethical guidelines 
            with strict confidentiality.
          </p>
        </section>

      </div>
    </div>
  );
}
