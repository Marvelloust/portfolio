import portrait1 from "./img/portrait1.jpg";
import potrait2 from "./img/potrait2.jpg";
  
  const Header = () => {
    return (
      <header className="header" style={styles.header}>
        <div style={styles.headerBefore}></div>
        <div className="header-content" style={styles.headerContent}>
          <h1 style={styles.h1}>Welcome to Our Website</h1>
          <p style={styles.p}>Discover the best services and solutions for your needs.</p>
          <button
            className="btn"
            style={styles.btn}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            Learn More
          </button>
        </div>
      </header>
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

  const AboutSection = () => {
    return (
      <div>
        <div className="about-section" style={styles.aboutSection}>
          <div className="mission" style={styles.mission}>
            <div className="text" style={styles.text}>
              <h2>MISSION</h2>
              <p>
                At EcoV, our vision is a world where nature thrives, and every
                individual embraces sustainable living practices to preserve and
                protect our planet for future generations. We envision a
                harmonious coexistence between humans and the environment, where
                biodiversity flourishes, and ecosystems are resilient and healthy!
              </p>
            </div>
            <div className="about-image" style={styles.aboutImage}>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mission"
                style={styles.aboutImageImg}
              />
            </div>
          </div>
          <div className="vision" style={styles.vision}>
            <div className="about-image" style={styles.aboutImage}>
              <img
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vision"
                style={styles.aboutImageImg}
              />
            </div>
            <div className="text" style={styles.text}>
              <h2>VISION</h2>
              <p>
                Our mission at EcoV is to inspire and empower individuals and
                communities to take meaningful action towards environmental
                conservation and sustainability. Through education, advocacy, and
                action-oriented initiatives, we strive to raise awareness about
                pressing environmental issues, promote eco-friendly lifestyles,
                and foster a culture of environmental stewardship !
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  };

  const LatestSection = () => {
    return (
      <div>
        <div className="about-section" style={styles.aboutSection}>
          <div className="mission" style={styles.mission}>
            <div className="text" style={styles.text}>
              <h2>LATEST NEWS</h2>
              <p>
                At EcoV, our vision is a world where nature thrives, and every
                individual embraces sustainable living practices to preserve and
                protect our planet for future generations. We envision a
                harmonious coexistence between humans and the environment, where
                biodiversity flourishes, and ecosystems are resilient and healthy!
              </p>
            </div>
          </div>
          <div className="vision" style={styles.lates}>
      <div className="about-image" style={styles.latestImage}>
        <img
          src={portrait1}
          alt="Vision"
          style={styles.latestImageImg1}
        />
        <img
          src={potrait2}
          alt="Mission"
          style={styles.latestImageImg2}
        />
      </div>
    </div>
        </div>
      </div>
    );
  };

  const Testimonial = ({ name, role, testimonial, image }) => {
    return (
      <div>
        <p className="testimonial-heading" style={styles.testimonialHeading}>
          Team Members
        </p>
        <div class="testimonial-container" style={styles.testimonialContainer}>
          <div class="testimonial" style={styles.testimonial}>
            <div class="testimonial-content" style={styles.testimonialContent}>
              <div class="testimonial-image" style={styles.testimonialImage}>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Testimonial 1"
                  style={styles.testimonialImageImg}
                />
              </div>
              <div class="testimonial-text" style={styles.testimonialText}>
                <p class="testimonial-author" style={styles.testimonialAuthor}>
                  John Doe
                </p>
                <p class="testimonial-role" style={styles.testimonialRole}>
                  Founder, CEO
                </p>
                <p class="testimonial-message" style={styles.testimonialMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore?
                 Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
              </div>
            </div>
          </div>
          <div class="testimonial" style={styles.testimonial}>
            <div class="testimonial-content" style={styles.testimonialContent}>
              <div class="testimonial-image" style={styles.testimonialImage}>
                <img
                  src="https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Testimonial 1"
                  style={styles.testimonialImageImg}
                />
              </div>
              <div class="testimonial-text" style={styles.testimonialText}>
                <p class="testimonial-author" style={styles.testimonialAuthor}>
                  Jane Smith
                </p>
                <p class="testimonial-role" style={styles.testimonialRole}>
                  Founder, VP
                </p>
                <p class="testimonial-message" style={styles.testimonialMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? 
                Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
              </div>
            </div>
          </div>
          <div class="testimonial" style={styles.testimonial}>
            <div class="testimonial-content" style={styles.testimonialContent}>
              <div class="testimonial-image" style={styles.testimonialImage}>
                <img
                  src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8MTcyOTI1OHx8ZW58MHx8fHx8"
                  alt="Testimonial 1"
                  style={styles.testimonialImageImg}
                />
              </div>
              <div class="testimonial-text" style={styles.testimonialText}>
                <p class="testimonial-author" style={styles.testimonialAuthor}>
                  Alice Johnson
                </p>
                <p class="testimonial-role" style={styles.testimonialRole}>
                  Editor Staff
                </p>
                <p class="testimonial-message" style={styles.testimonialMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? 
                Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="testimonial-heading" style={styles.testimonialHeading}>
          Testimonials
        </p>
        <div class="testimonial-container" style={styles.testimonialContainer}>
          <div class="testimonial" style={styles.testimonial}>
            <div class="testimonial-content" style={styles.testimonialContent}>
              <div class="testimonial-image" style={styles.testimonialImage}>
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Testimonial 1"
                  style={styles.testimonialImageImg}
                />
              </div>
              <div class="testimonial-text" style={styles.testimonialText}>
                <p class="testimonial-author" style={styles.testimonialAuthor}>
                  John Doe
                </p>
                <p class="testimonial-role" style={styles.testimonialRole}>
                  Founder, CEO
                </p>
                <p class="testimonial-message" style={styles.testimonialMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore?
                 Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
              </div>
            </div>
          </div>
          <div class="testimonial" style={styles.testimonial}>
            <div class="testimonial-content" style={styles.testimonialContent}>
              <div class="testimonial-image" style={styles.testimonialImage}>
                <img
                  src="https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Testimonial 1"
                  style={styles.testimonialImageImg}
                />
              </div>
              <div class="testimonial-text" style={styles.testimonialText}>
                <p class="testimonial-author" style={styles.testimonialAuthor}>
                  Jane Smith
                </p>
                <p class="testimonial-role" style={styles.testimonialRole}>
                  Founder, VP
                </p>
                <p class="testimonial-message" style={styles.testimonialMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? 
                Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
              </div>
            </div>
          </div>
          <div class="testimonial" style={styles.testimonial}>
            <div class="testimonial-content" style={styles.testimonialContent}>
              <div class="testimonial-image" style={styles.testimonialImage}>
                <img
                  src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8MTcyOTI1OHx8ZW58MHx8fHx8"
                  alt="Testimonial 1"
                  style={styles.testimonialImageImg}
                />
              </div>
              <div class="testimonial-text" style={styles.testimonialText}>
                <p class="testimonial-author" style={styles.testimonialAuthor}>
                  Alice Johnson
                </p>
                <p class="testimonial-role" style={styles.testimonialRole}>
                  Editor Staff
                </p>
                <p class="testimonial-message" style={styles.testimonialMessage}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, perspiciatis repellat maxime, adipisci non ipsam at itaque rerum vitae, necessitatibus nulla animi expedita cumque provident inventore? 
                Voluptatum in tempora earum deleniti, culpa odit veniam, ea reiciendis sunt ullam temporibus aut!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      latest: {
        maxWidth: '100%',
        display: 'flex',
      },
      latestImage: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '20px',
        padding: '0 20px',
        maxWidth: '100%'
      },
      latestImageImg1: {
        maxWidth: 'calc(50% - 10px)', // Each image takes up 50% of the container width with 10px spacing between them
        marginTop: '50px',
      },
      latestImageImg2: {
        maxWidth: 'calc(50% - 10px)', // Each image takes up 50% of the container width with 10px spacing between them
        marginBottom: '50px',
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
      header: {
        position: "relative",
        height: "600px",
        width: "100%",
        backgroundImage:
          'url("https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
      headerBefore: {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "70%",
        height: "100%",
        background:
          "linear-gradient(to right, rgba(255, 255, 153, 0.8) 0%, rgba(255, 255, 153, 0.5) 70%, rgba(255, 255, 153, 0) 100%)",
      },
      headerContent: {
        position: "absolute",
        top: "50%",
        right: "20%",
        transform: "translateY(-50%)",
        color: "#000",
        fontFamily: 'serif',
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
      aboutSection: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "50px auto",
        width: "80%",
        maxWidth: "1300px",
        gap: "20px",
        fontFamily:'serif'
      },
      mission: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      },
      vision: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      },
      text: {
        marginBottom: "20px",
      },
      aboutImage: {
        width: "100%",
      },
      aboutImageImg: {
        maxWidth: "100%",
        height: "auto",
        border: "1px solid #2E8B57",
        borderRadius: "15px",
      },
      testimonialContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        maxWidth: "1300px",
        margin: "0 auto",
        gap: "10px",
      },
      testimonial: {
        width: "calc(33.33% - 20px)",
        padding: "20px",
        marginBottom: "20px",
      },
      testimonialContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      testimonialImage: {
        width: "150px",
        height: "150px",
        overflow: "hidden",
        borderRadius: "50%",
        marginBottom: "5px",
      },
      testimonialImageImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      testimonialText: {
        textAlign: "center",
      },
      testimonialMessage: {
        marginBottom: "10px",
        fontFamily: "serif",
        fontSize: "14px",
      },
      testimonialAuthor: {
        fontWeight: "bold",
        fontFamily: "serif",
        fontSize: "25px",
        marginBottom: "2px",
      },
      testimonialRole: {
        fontStyle: "italic",
        fontSize: "14px",
        margin: "0",
      },
      testimonialHeading: {
        fontWeight: "bold",
        fontFamily: "serif",
        fontSize: "50px",
        textAlign: 'center'
      },
  };

  function About() {
    return (
      <div className="App">
        <div className="App">
          <Header />
          <AboutSection />
          <LatestSection />
          <Testimonial />
          <Footer />
          <div className="main"></div>
        </div>
      </div>
    );
  }
  export default About;