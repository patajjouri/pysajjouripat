export default function Home() {
  return (
    <main style={{fontFamily:"Arial, sans-serif"}}>

      {/* HERO SECTION */}
      <section
        style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          padding:"80px 10%",
          backgroundImage:"url('/therapy.jpg')",
          backgroundSize:"cover",
          backgroundPosition:"center",
          minHeight:"500px"
        }}
      >

        {/* LEFT TEXT */}
        <div
          style={{
            background:"rgba(255,255,255,0.85)",
            padding:"40px",
            borderRadius:"10px",
            maxWidth:"500px"
          }}
        >
          <h1 style={{fontSize:"40px", marginBottom:"10px"}}>
            Patricia Ajjouri
          </h1>

          <h2 style={{fontWeight:"normal", marginBottom:"20px"}}>
            Clinical Psychologist
          </h2>

          <p style={{lineHeight:"1.6"}}>
            Providing a calm and supportive space for reflection, healing and personal growth.
            I work with individuals experiencing anxiety, emotional challenges,
            relationship difficulties and life transitions.
          </p>
        </div>

        {/* PHOTO */}
        <img
          src="/patricia.jpg"
          alt="Patricia Ajjouri"
          style={{
            width:"320px",
            borderRadius:"10px",
            boxShadow:"0 10px 25px rgba(0,0,0,0.25)"
          }}
        />

      </section>


      {/* ABOUT */}
      <section style={{padding:"60px 10%", background:"#f5f7f6"}}>
        <h2>About</h2>

        <p style={{maxWidth:"700px", lineHeight:"1.7"}}>
          I offer psychological support in a respectful, confidential and compassionate
          environment. My goal is to help people understand themselves better,
          manage emotional difficulties and develop healthier ways of relating
          to themselves and others.
        </p>
      </section>


      {/* CONTACT */}
      <section style={{padding:"60px 10%"}}>
        <h2>Contact</h2>

        <p>Email: pyspatajjouri@gmail.com</p>

        <p>Phone / WhatsApp: 0551199816969</p>

        <a
          href="https://wa.me/551199816969"
          target="_blank"
          style={{
            display:"inline-block",
            marginTop:"15px",
            padding:"12px 22px",
            background:"#25D366",
            color:"white",
            borderRadius:"6px",
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
          padding:"30px",
          background:"#eeeeee"
        }}
      >
        © Patricia Ajjouri – Clinical Psychologist
      </footer>

    </main>
  )
}
