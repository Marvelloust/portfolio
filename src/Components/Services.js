const Header = () => {
  return (
    <header className="header" style={styles.header}>
      <div style={styles.headerBefore}></div>
      <div className="header-content" style={styles.headerContent}>
        <h1 style={styles.h1}>Welcome to Our Website</h1>
        <p style={styles.p}>
          Discover the best services and solutions for your needs.
        </p>
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

const ImageDisplay = () => {
  return (
    <div style={styles.imageContainer}>
    <h1 style={styles.headerForm}>SERVICES OFFERED</h1>
      <div className="image-display" style={styles.imageDisplay}>
          <div className="image" style={styles.image}>
            <img
              src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
              style={styles.imageImg}
            />
            <p style={styles.imageText}>
              Climate Change
              <br />
              Explore the impacts of climate change and learn how to reduce
              carbon emissions for a sustainable future.
            </p>
            <button style={styles.btn}>Learn More</button>
          </div>
          <div className="image" style={styles.image}>
            <img
              src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 2"
              style={styles.imageImg}
            />
            <p style={styles.imageText}>
              Wildlife Conservation
              <br />
              Discover efforts to protect endangered species and preserve
              biodiversity in natural habitats.
            </p>
            <button style={styles.btn}>Learn More</button>
          </div>
          <div className="image" style={styles.image}>
            <img
              src=""
              alt="Image 3"
              style={styles.imageImg}
            />
            <p style={styles.imageText}>
              Ocean Cleanup
              <br />
              Support initiatives to clean up marine debris and safeguard the
              health of our oceans and coastal ecosystems.
            </p>
            <button style={styles.btn}>Learn More</button>
          </div>
        </div>
      <div className="image-display" style={styles.imageDisplay}>
        <div className="image" style={styles.image}>
          <img
            src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 1"
            style={styles.imageImg}
          />
          <p style={styles.imageText}>
            Renewable Energy
            <br />
            Embrace renewable energy solutions like solar and wind power to
            reduce reliance on fossil fuels.
          </p>
          <button style={styles.btn}>Learn More</button>
        </div>
        <div className="image" style={styles.image}>
          <img
            src="https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 2"
            style={styles.imageImg}
          />
          <p style={styles.imageText}>
            Forest Conservation
            <br />
            Contribute to reforestation efforts and protect vital forest
            ecosystems from deforestation and degradation.
          </p>
          <button style={styles.btn}>Learn More</button>
        </div>
        <div className="image" style={styles.image}>
          <img
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 3"
            style={styles.imageImg}
          />
          <p style={styles.imageText}>
            Sustainable Living
            <br />
            Adopt eco-friendly habits and practices to live more sustainably and
            reduce your environmental footprint.
          </p>
          <button style={styles.btn}>Learn More</button>
        </div>
      </div>
      <div className="image-display" style={styles.imageDisplay}>
        <div className="image" style={styles.image}>
          <img
            src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 1"
            style={styles.imageImg}
          />
          <p style={styles.imageText}>
            Clean Water Access
            <br />
            Support initiatives to provide clean and safe drinking water to
            communities in need around the world.
          </p>
          <button style={styles.btn}>Learn More</button>
        </div>
        <div className="image" style={styles.image}>
          <img
            src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 2"
            style={styles.imageImg}
          />
          <p style={styles.imageText}>
            Eco-Friendly Transportation
            <br />
            Explore sustainable transportation options like electric vehicles
            and public transit to reduce emissions.
          </p>
          <button style={styles.btn}>Learn More</button>
        </div>
        <div className="image" style={styles.image}>
          <img
            src="https://images.pexels.com/photos/850216/pexels-photo-850216.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Image 3"
            style={styles.imageImg}
          />
          <p style={styles.imageText}>
            Waste Reduction
            <br />
            Join the movement to minimize waste generation and promote recycling
            and composting practices.
          </p>
          <button style={styles.btn}>Learn More</button>
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
    headerForm: {
        fontSize: "50px",
        textAlign: 'center'
      },
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
    fontFamily: "serif",
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
  imageDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    width: "80%",
    maxWidth: "1300px",
  },
  image: {
    flex: "0 0 calc(33.33% - 10px)",
    marginBottom: "10px",
    border: "1px solid #2E8B57",
    borderRadius: "15px",
  },
  imageImg: {
    width: "100%",
    height: "auto",
    borderRadius: "15px",
  },
  imageResponsive: {
    "@media only screen and (max-width: 768px)": {
      flex: "0 0 calc(50% - 10px)",
    },
  },
  imageText: {
    padding: "10px",
  },
  imageContainer: {
    padding: '10px',
    marginTop: '10px',
    fontFamily: 'serif'
  }
};

function Services() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <ImageDisplay />
        <Footer />
        <div className="main"></div>
      </div>
    </div>
  );
}
export default Services;
