  import Danty from './img/DantyDolice logo.png';
  import Shagetti from './img/Spaghtti img.jpg';

const Header = () => {
  return (
    <header style={styles.headerStyle}>
      <div style={styles.headerContentStyle}>
        <img src={Danty} alt="Logo" style={styles.logoStyle} /> {/* Replace 'logo.png' with your logo image */}
        <h1 style={styles.headerTextStyle}>Welcome to Our Website</h1>
      </div>
    </header>
  );
};

const MenuSection = () => {
  return (
    <div style={styles.menuSectionStyle}>
      <h2 style={styles.headingStyle}>Our Menu</h2>
      <div style={styles.imageRowStyle}>
        <img src={Shagetti} alt="Image 1" style={styles.imageStyle} />
        <img src={Danty} alt="Image 2" style={styles.imageStyle} />
        <img src={Danty} alt="Image 2" style={styles.imageStyle} />
        <img src={Danty} alt="Image 2" style={styles.imageStyle} />
      </div>
      <div style={styles.imageRowStyle}>
        <img src={Danty} alt="Image 3" style={styles.imageStyle} />
        <img src={Danty} alt="Image 4" style={styles.imageStyle} />
        <img src={Danty} alt="Image 4" style={styles.imageStyle} />
        <img src={Danty} alt="Image 4" style={styles.imageStyle} />
      </div>
    </div>
  );
};

  const Footer = () => {
    return (
      <footer className="footer" style={styles.footer}>
        <div className="footer-container" style={styles.footerContainer}>
          <div className="footer-content" style={styles.footerContent}>
            {/* Form Section */}
            <div className="footer-links" style={styles.footerLinks}>
              <h3 style={styles.footerLinksH3}>Navigation</h3>
              <ul style={styles.ul}>
                <li style={styles.ulLi}>
                  <a href="/" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>Home
                  </a>
                </li>
                <li style={styles.ulLi}>
                  <a href="./Component/About" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>About
                  </a>
                </li>
                <li style={styles.ulLi}>
                  <a href="./Services.js" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>
                    Services
                  </a>
                </li>
                <li style={styles.ulLi}>
                  <a href="/Contact" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* About Section */}
            <div className="footer-section" style={styles.footerSection}>
              <div className="about-text" style={styles.aboutText}>
                <h3 style={styles.aboutTextH3}>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  convallis euismod turpis, vel volutpat nulla tempus vel. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                  convallis euismod turpis, vel volutpat nulla tempus vel.
                </p>
                <p>LEARN MORE</p>
                <hr style={styles.hr} />
              </div>
            </div>
          </div>
  
          {/* Contact Section */}
          <div className="contact-container" style={styles.contactContainer}>
            <form className="subscribe-form" style={styles.subscribeForm}>
              <div className="form-group" style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
                  Subscribe:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Subscribe to our newsletter"
                  style={styles.inputText}
                />
                <button
                  type="submit"
                  style={{ ...styles.btn }}
                  onMouseOver={handleHover}
                  onMouseOut={handleMouseOut}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="footer-bottom" style={styles.footerBottom}>
          <p>&copy; 2024 Your Company Name</p>
          <p>Contact: info@example.com</p>
        </div>
      </footer>
    );
  };
  
const handleHover = (event) => {
    event.target.style.color = "#34495e";
  };
  
  const handleMouseOut = (event) => {
    event.target.style.color = "#fff";
  };

  const styles = {
    headerStyle: {
      backgroundImage: `url("https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, // Replace 'background.jpg' with your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px', // Adjust the height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoStyle: {
      width: '100px', // Adjust the size of the logo as needed
      height: 'auto',
      marginBottom: '20px', // Adjust the spacing between the logo and text
    },
    headerTextStyle: {
      color: 'white', // Set the color of the text
      fontSize: '24px', // Adjust the font size as needed
    },
    headerContentStyle: {
      textAlign: 'center',
    },
    menuSectionStyle: {
      textAlign: 'center',
    },
    headingStyle: {
      fontSize: '24px',
      margin: '20px 0',
    },
    imageRowStyle: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    imageStyle: {
      width: '150px', // Adjust the image width as needed
      height: '100px',
      margin: '0 10px',
    },
      h1: {
        fontSize: "36px",
        marginBottom: "20px",
      },
      p: {
        fontSize: "18px",
        marginBottom: "30px",
      },
      btn: {
        backgroundColor: "#2E8B57",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        marginBottom: "10px",
      },
      footer: {
        backgroundColor: "#3CB371",
        color: "#fff",
        padding: "40px 20px",
      },
      footerContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
      footerSection: {
        flex: "2",
        marginRight: "20px",
      },
      footerLinks: {
        flex: "1",
        marginRight: "10px",
        textAlign: "start",
      },
      footerLinksH3: {
        fontSize: "40px",
        margin: "0",
        fontFamily: "serif",
      },
      aboutText: {
        marginBottom: "20px",
        textAlign: "start",
        fontFamily: "serif",
        fontSize: "14px",
      },
      aboutTextH3: {
        fontSize: "40px",
        margin: "0",
      },
      hr: {
        margin: "0",
        marginTop: "1px",
        borderBottom: "2px solid",
        width: "10%",
      },
      ul: {
        listStyle: "none",
        padding: "0",
      },
      ulLi: {
        marginBottom: "10px",
      },
      ulLiA: {
        textDecoration: "none",
        color: "#fff",
        transition: "color 0.3s",
      },
      ulLiAHover: {
        color: "#007bff",
      },
      footerBottom: {
        marginTop: "20px",
        borderTop: "1px solid #fff",
        paddingTop: "20px",
        textAlign: "center",
      },
      footerContainer: {
        width: "80%",
        maxWidth: "100%",
        margin: "0 auto",
      },
      footerLinksUlLiASpan: {
        marginRight: "5px",
        fontSize: "20px",
      },
      contactContainer: {
        textAlign: "center",
        padding: "5px",
        background: "linear-gradient(to right, #2E8B57, #3CB371)",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      subscribeForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      },
      formGroup: {
        margin: "10px",
      },
      label: {
        fontWeight: "bold",
        marginBottom: "5px",
        color: "#555",
      },
      inputText: {
        padding: "12px 15px",
        fontSize: "16px",
        border: "1px solid #ced4da",
        borderRadius: "4px",
        width: "400px",
        margin: "10px",
        transition: "border-color 0.3s",
      },
      inputTextFocus: {
        borderColor: "#007bff",
      },
      buttonSubmit: {
        padding: "12px 30px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#34495e",
        color: "#fff",
        cursor: "pointer",
        transition: "background-color 0.3s",
      },
      buttonSubmitHover: {
        backgroundColor: "#0056b3",
      },
  };

  function Home() {
    return (
      <div className="App">
        <div className="App">
          <Header />
          <MenuSection />
          <Footer />
          <div className="main"></div>
        </div>
      </div>
    );
  }
  export default Home;