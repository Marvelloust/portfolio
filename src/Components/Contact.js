  const ContactForm = () => {
    return (
      <div style={styles.container}>
        <div style={styles.contactSection}>
          <div className="row">
            <h1 style={styles.headerForm}>CONTACT US</h1>
          </div>
          <div style={styles.row}>
            <div style={styles.card}>
              <svg style={styles.icon} viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              <div style={styles.cardBody}>
                <h1 style={styles.cardTitle}>ADDRESS</h1>
                <h1 style={styles.cardText}>NY 535022, USA</h1>
              </div>
            </div>
            <div style={styles.card}>
              <svg style={styles.icon} viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
              </svg>
              <div style={styles.cardBody}>
                <h1 style={styles.cardTitle}>PHONE NUMBER</h1>
                <h1 style={styles.cardText}>+1 5589 55488 55</h1>
              </div>
            </div>
            <div style={styles.card}>
              <svg style={styles.icon} viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <div style={styles.cardBody}>
                <h1 style={styles.cardTitle}>EMAIL</h1>
                <h1 style={styles.cardText}>info@example.com</h1>
              </div>
            </div>
          </div>
  
          <div style={styles.formContainer}>
            <form>
              <div style={styles.formRow}>
                <input
                  type="text"
                  style={styles.formControl}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  style={styles.formControl}
                  placeholder="Your Email"
                />
              </div>
              <div style={styles.formRow}>
                <input
                  type="text"
                  style={styles.formControl}
                  placeholder="Subject"
                />
              </div>
              <div style={styles.formRow}>
                <textarea
                  style={styles.textarea}
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" style={styles.btn}>
                Send Message
              </button>
            </form>
          </div>
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
                  <a href="#" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>Home
                  </a>
                </li>
                <li style={styles.ulLi}>
                  <a href="#" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>About
                  </a>
                </li>
                <li style={styles.ulLi}>
                  <a href="#" style={styles.ulLiA}>
                    <span style={styles.footerLinksUlLiASpan}>&rsaquo;</span>
                    Services
                  </a>
                </li>
                <li style={styles.ulLi}>
                  <a href="#" style={styles.ulLiA}>
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
    navbar: {
        backgroundColor: "#3CB372",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      logo: {
        fontSize: "24px",
        color: "#fff",
        margin: "0",
      },
      navbarNav: {
        listStyleType: "none",
        margin: "0",
        padding: "0",
        display: "flex",
      },
      navItem: {
        marginRight: "20px",
      },
      navLink: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "18px",
        transition: "color 0.3s",
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
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
        fontFamily: 'serif'
      },
      contactSection: {
        width: "80%",
        textAlign: "center",
      },
      headerForm: {
        fontSize: "50px",
        textAlign: 'center'
      },
      row: {
        display: "flex",
        justifyContent: "space-between" /* Centers the row horizontally */,
        flexWrap: "wrap",
        flaxDirection: "column",
        alignItems: "center",
        width: "100%" /* Allows cards to wrap onto the next line if necessary */,
      },
      card: {
        borderRadius: "5px",
        padding: "20px",
        marginRight: "10px",
        flex: "1",
      },
      icon: {
        width: "50px",
        height: "50px",
      },
      cardBody: {
        marginTop: "20px",
      },
      cardTitle: {
        fontSize: "20px",
      },
      
      cardText: {
        fontSize: "14px",
      },
      formRow: {
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        gap: "10px",
      },
      formContainer: {
        backgroundColor: '#f8f9fa',
        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
        marginTop: '20px',
        padding: '20px',
        borderRadius: '10px',
      },
      formControl: {
        width: '100%',
        padding: '15px',
        marginBottom: '2px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
      },
      textarea: {
        width: "100%", // Full width textarea
        padding: "15px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
        outline: "none",
      },
  };

  function Contact() {
    return (
      <div className="App">
        <div className="App">
          <ContactForm />
          <Footer />
          <div className="main"></div>
        </div>
      </div>
    );
  }
  export default Contact;