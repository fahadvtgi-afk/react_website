"use client"; // Needed if using React hooks or state
import Image from "next/image";

const Navbar = () => {
  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        width: "100%",
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "#fff",
      }}
    >
      <div className="logo">
        <Image src="/logob.png" alt="Company Logo" width={90} height={50} />
      </div>

      {/* Menu */}
      <div className="menu">
        <span
          style={{ margin: "0 1rem", cursor: "pointer" }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </span>
        <span
          style={{ margin: "0 1rem", cursor: "pointer" }}
          onClick={() => scrollToSection("about")}
        >
          About
        </span>
       <span
        style={{ margin: "0 1rem", cursor: "pointer" }}
        onClick={() => scrollToSection("services")}
      >
        Services
      </span>
      <span
        style={{ margin: "0 1rem", cursor: "pointer" }}
        onClick={() => scrollToSection("works")}
      >
        Works
      </span>

      <span
  style={{ margin: "0 1rem", cursor: "pointer" }}
  onClick={() => scrollToSection("clients")}
>
  Clients
</span>

        <span
          style={{ margin: "0 1rem", cursor: "pointer" }}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
