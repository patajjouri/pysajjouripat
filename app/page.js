export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Left Side - Your Photo + Intro */}
      <div style={{
        flex: "1 1 50%",
        backgroundColor: "#f4ede6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 40px",
        textAlign: "center"
      }}>

        <img
          src="/patricia.png"
          alt="Patricia Ajjouri"
          style={{
            width: "250px",
            borderRadius: "50%",
            marginBottom: "30px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }}
        />

        <h1 style={{
          fontSize: "32px",
          marginBottom: "15px",
          color: "#3e3a36"
        }}>
          Patricia Ajjouri
        </h1>

        <p style={{
          fontSize: "18px",
          maxWidth: "400px",
          lineHeight: "1.6",
          color: "#5c5752"
        }}>
          Clinical Psychologist dedicated to supporting mental health,
          emotional wellbeing, and personal growth in a safe and compassionate space.
        </p>

      </div>

      {/* Right Side - Therapy Room */}
      <div style={{
        flex: "1 1 50%",
        backgroundImage: "url('/Therapy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px"
      }}>
      </div>

    </div>
  );
}
