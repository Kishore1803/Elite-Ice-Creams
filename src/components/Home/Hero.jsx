import HeroContent from "./HeroContent";

function Hero() {
  return (
    <section
      className="vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg,#6a0000,#b10019,#e63946)",
      }}
    >
      <div className="container">
        <HeroContent />
      </div>
    </section>
  );
}

export default Hero;