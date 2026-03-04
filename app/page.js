export default function Home() {
  return (
    <main style={{ fontFamily: "Georgia, serif", backgroundColor: "#f3ede6", color: "#3e3a36" }}>
      
      {/* Header */}
      <section style={{ textAlign: "center", padding: "60px 20px 40px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Patricia Ajjouri
        </h1>
        <p style={{ fontSize: "20px", fontStyle: "italic", opacity: 0.8 }}>
          Clinical Psychologist · Psychoanalytic Orientation
        </p>
      </section>

      {/* Split Screen */}
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        
        {/* Left - Your Portrait */}
        <div style={{ flex: "1 1 50%", minHeight: "500px" }}>
          <img
            src="/patricia.png"
            alt="Patricia Ajjouri"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.9) contrast(0.95) brightness(1.02)"
            }}
          />
        </div>

        {/* Right - Therapy Scene */}
        <div style={{
          flex: "1 1 50%",
          minHeight: "500px",
          backgroundImage: "url('/therapy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px"
        }}>
          <h2 style={{
            fontSize: "28px",
            fontStyle: "italic",
            backgroundColor: "rgba(243, 237, 230, 0.85)",
            padding: "20px 30px",
            borderRadius: "8px"
          }}>
            Grounded in an ethic of listening.
          </h2>
        </div>

      </section>

      {/* Info Cards */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        padding: "80px 20px"
      }}>

        <div style={cardStyle}>
          <h3>About</h3>
          <p>
            I provide online psychotherapy for adults in Portuguese, English, and Arabic.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Areas of Practice</h3>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Adult Psychotherapy</li>
            <li>Sexual Diversity & Gender</li>
            <li>Migration & Cultural Displacement</li>
            <li>Anxiety & Depression</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Contact</h3>
          <p>
            For appointments or inquiries:<br /><br />
            <strong>pysajjouri@gmail.com</strong>
          </p>
        </div>

      </section>

    </main>
  );
}

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "40px",
  maxWidth: "300px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};
