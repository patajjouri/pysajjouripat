export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif"}}>

      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px",
          backgroundImage: "url('/therapy-sofa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px"
        }}
      >

        {/* LEFT TEXT */}
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            padding: "40px",
            borderRadius: "12px",
            maxWidth: "500px"
          }}
        >
          <h1 style={{fontSize:"42px", marginBottom:"10px"}}>
            Patricia Ajjouri
          </h1>

          <h2 style={{color:"#666", marginBottom:"20px"}}>
            Clinical Psychologist
          </h2>

          <p style={{fontSize:"18px", lineHeight:"1.6"}}>
            Providing a calm and supportive space for personal growth,
            emotional balance, and mental wellbeing.
          </p>

          <a
            href="https://wa.me/551199816969"
            style={{
              display:"inline-block",
              marginTop:"20px",
              padding:"14px 24px",
              backgroundColor:"#25D366",
              color:"white",
              borderRadius:"8px",
              textDecoration:"none",
              fontWeight:"bold"
            }}
          >
            Contact on WhatsApp
          </a>
        </div>

        {/* YOUR PHOTO */}
        <img
          src="/patricia.jpg"
          alt="Patricia Ajjouri"
          style={{
            width:"320px",
            borderRadius:"14px",
            boxShadow:"0 10px 30px rgba(0,0,0,0.2)"
          }}
        />

      </section>


      {/* ABOUT SECTION */}
      <section
        style={{
          padding:"70px 20px",
          textAlign:"center",
          maxWidth:"900px",
          margin:"auto"
        }}
      >

        <h2 style={{fontSize:"34px", marginBottom:"20px"}}>
          About Me
        </h2>

        <p style={{fontSize:"18px", lineHeight:"1.7"}}>
          I am a clinical psychologist dedicated to helping individuals
          navigate emotional challenges and develop healthier patterns
          in their lives. My work focuses on providing a safe and
          compassionate environment where clients can explore their
          thoughts, feelings, and experiences.
        </p>

      </section>


      {/* CONTACT SECTION */}
      <section
        style={{
          backgroundColor:"#f4f4f4",
          padding:"60px",
          textAlign:"center"
        }}
      >

        <h2 style={{fontSize:"32px", marginBottom:"20px"}}>
          Contact
        </h2>

        <p style={{fontSize:"18px", marginBottom:"10px"}}>
          Email: pyspatajjouri@gmail.com
        </p>

        <p style={{fontSize:"18px", marginBottom:"20px"}}>
          Phone / WhatsApp: +55 11 99816-969
        </p>

        <a
          href="https://wa.me/551199816969"
          style={{
            padding:"14px 26px",
            backgroundColor:"#25D366",
            color:"white",
            borderRadius:"8px",
            textDecoration:"none",
            fontWeight:"bold"
          }}
        >
          Message me on WhatsApp
        </a>

      </section>


      {/* FOOTER */}
      <footer
        style={{
          textAlign:"center",
          padding:"20px",
          background:"#222",
          color:"white"
        }}
      >
        © {new Date().getFullYear()} Patricia Ajjouri
      </footer>

    </main>
  );
}
