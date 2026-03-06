export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif"}}>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: "url('/therapy-room.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          textAlign: "center",
          color: "white"
        }}
      >
        <img
          src="/patricia.jpg"
          alt="Patricia Ajjouri"
          style={{
            width: "200px",
            borderRadius: "100%",
            border: "4px solid white",
            marginBottom: "20px",
            filter: "sepia(20%) saturate(90%) brightness(105%)"
          }}
        />

        <h1>Patricia Ajjouri</h1>
        <h3>Clinical Psychologist</h3>

        <p style={{maxWidth:"600px", margin:"20px auto"}}>
          Supporting emotional wellbeing through compassionate and
          professional psychological care.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section style={{padding:"60px 20px", textAlign:"center"}}>
        <h2>About</h2>

        <p style={{maxWidth:"700px", margin:"auto"}}>
          I provide psychological support for individuals seeking emotional
          balance, self-understanding, and personal growth. My work focuses on
          creating a safe and respectful therapeutic space where clients can
          explore their experiences and strengthen their wellbeing.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          background:"#f4f6f7",
          padding:"60px 20px",
          textAlign:"center"
        }}
      >
        <h2>Contact</h2>

        <p>Email: pyspatajjouri@gmail.com</p>

        <p>Phone / WhatsApp: +55 11 99816-969</p>

        <a
          href="https://wa.me/551199816969"
          target="_blank"
          style={{
            display:"inline-block",
            marginTop:"20px",
            padding:"12px 25px",
            background:"#25D366",
            color:"white",
            borderRadius:"30px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Message on WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign:"center",
          padding:"20px",
          fontSize:"14px",
          background:"#ffffff"
        }}
      >
        © Patricia Ajjouri – Clinical Psychologist
      </footer>

    </main>
  );
}
