import React, { useEffect, useState } from "react";
import DataFetcher from "./Datafetcher";
import projectimg1 from "./img/projetimg1.jpeg";
import projectimg2 from "./img/projetimg2.jpeg";
import projectimg3 from "./img/projetimg3.jpeg";
import projectimg4 from "./img/projetimg4.jpeg";
import projectimg5 from "./img/projetimg5.png";
import projectimg6 from "./img/projetimg6.png";
import projectimg7 from "./img/projetimg7.png";
import blogimg1 from "./img/port6.jpg";
import blogimg2 from "./img/blog1.jpg"; 
import blogimg3 from "./img/blog2.jpg";
import blogimg4 from "./img/blog3.jpg";
import blogimg5 from "./img/port1.jpg";
import blogimg6 from "./img/port3.jpg";
import CV from './CV.pdf';
import profileimg from "./img/profileimg.jpg";
import './App.css';

const Header = () => {
  return (
    <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img src={profileimg} alt="" />
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Omoleye Marvellous.</span>
                    A Web Developer.
                </h1>
                <p>
                  Hello and thank you for visiting. Explore my creative world, where I 
                  express my passion through various mediums. Whether you're a potential 
                  client or a fellow artist, feel free to browse my work. If you have 
                  questions or want to collaborate, please reach out. Let's embark on this 
                  creative journey together!
                </p>
                <div class="btn-con">
                <a href={CV} download={CV.pdf} target="blank" class="main-btn">
                        <span class="btn-text">Download CV</span>
                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>
    </header>
  );
};

const Main = () => {
  const [fullImage, setFullImage] = useState(null);

  const openFullImage = (imageSrc) => {
    setFullImage(imageSrc);
  };

  const closeFullImage = () => {
    setFullImage(null);
  };

  const portfolioItems = [
    { imageSrc: projectimg1 },
    { imageSrc: projectimg2 },
    { imageSrc: projectimg3 },
    { imageSrc: projectimg4 },
    { imageSrc: projectimg5 },
    { imageSrc: projectimg6 },
    { imageSrc: projectimg7 }
  ];
  return (
    <main>
        <section class="container about" id="about">
            <div class="main-title">
                <h2>About <span>me</span><span class="bg-text">my stats</span></h2>
            </div>
            <div class="about-container">
                <div class="left-about">
                    <h4>Information About me</h4>
                    <p>
                      I am a passionate and versatile creative, and this portfolio is a 
                      glimpse into my artistic journey. My love for the arts knows no bounds, 
                      and I've explored a wide range of mediums to bring my visions to life. 
                      From photography to graphic design and beyond, I've dedicated myself to 
                      excellence in every project. I'm here to collaborate, to inspire, and 
                      to connect with fellow creators. Feel free to dive into my work and 
                      reach out with any questions or ideas. Let's embark on a shared 
                      creative adventure <br /> <br /> 
                      In my artistic world, each project is a canvas for self-expression, and 
                      I aim to leave a mark that resonates with those who view my work. Thank 
                      you for joining me on this creative exploration. I look forward to 
                      sharing my passion with you and connecting with like-minded individuals 
                      who appreciate the beauty of the arts. Together, we can make magic 
                      happen.





                    </p>
                    <div class="btn-con">
                    <a href={CV} download={CV.pdf} target="blank" class="main-btn">
                            <span class="btn-text">Download CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                </div>
                <div class="right-about">
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">100+</p>
                            <p class="small-text">Projects <br /> Completed</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">2+</p>
                            <p class="small-text">Years of <br /> experience</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">80+</p>
                            <p class="small-text">Happy <br /> Clients</p>
                        </div>
                    </div>
                    <div class="about-item">
                        <div class="abt-text">
                            <p class="large-text">40+</p>
                            <p class="small-text">Customer <br /> reviews</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-stats">
                <h4 class="stat-title">My Skills</h4>
                <div class="progress-bars">
                    <div class="progress-bar">
                        <p class="prog-title">html5</p>
                        <div class="progress-con">
                            <p class="prog-text">80%</p>
                            <div class="progress">
                                <span class="html"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">css3</p>
                        <div class="progress-con">
                            <p class="prog-text">95%</p>
                            <div class="progress">
                                <span class="css"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Javascript</p>
                        <div class="progress-con">
                            <p class="prog-text">65%</p>
                            <div class="progress">
                                <span class="js"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">PHP</p>
                        <div class="progress-con">
                            <p class="prog-text">87%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">ReactJS</p>
                        <div class="progress-con">
                            <p class="prog-text">75%</p>
                            <div class="progress">
                                <span class="react"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">NodeJS</p>
                        <div class="progress-con">
                            <p class="prog-text">87%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">MySQL</p>
                        <div class="progress-con">
                            <p class="prog-text">88%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Figma</p>
                        <div class="progress-con">
                            <p class="prog-text">90%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div> 
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">Bootstrap</p>
                        <div class="progress-con">
                            <p class="prog-text">90%</p>
                            <div class="progress">
                                <span class="node"></span>
                            </div>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <p class="prog-title">C#</p>
                        <div class="progress-con">
                            <p class="prog-text">65%</p>
                            <div class="progress">
                                <span class="python"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 class="stat-title">My Timeline</h4>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2010 - present</p>
                    <h5>Web Developer<span> - Vircrosoft</span></h5>
                    <p>
                      As a web developer at Vircrosoft, I played a pivotal role in crafting innovative solutions for our clients. My work focused on creating dynamic and user-friendly websites, ensuring seamless user experiences. I was part of a dynamic team that pushed the boundaries of web development and design.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2008 - 2011</p>
                    <h5>Software Engineer<span> - Boogle, Inc.</span></h5>
                    <p>
                      At Boogle, Inc., my role as a software engineer involved developing cutting-edge applications to enhance user engagement. My contributions helped streamline processes and improve user satisfaction. It was an incredible experience in a company known for its commitment to technological excellence.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2016 - 2017</p>
                    <h5>C++ Programmer<span> - Slime Tech</span></h5>
                    <p>
                      During my tenure at Slime Tech, I served as a C++ programmer, working on projects that required precision and efficiency. My coding skills and problem-solving abilities were put to the test, and I excelled in developing robust software solutions.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2009 - 2013</p>
                    <h5>Business Degree<span> - Sussex University</span></h5>
                    <p>
                      I pursued my passion for business with a degree from Sussex University, gaining a strong foundation in management, finance, and entrepreneurship. This knowledge has been invaluable in my tech career, enabling me to approach projects with a strategic mindset.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2013 - 2016</p>
                    <h5>Computer Science Degree<span> - Lincoln University College</span></h5>
                    <p>
                      I embarked on a journey at Lincoln University College to further hone my technical skills with a focus on computer science. This educational endeavor has expanded my knowledge and allowed me to stay at the forefront of technological advancements.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="tl-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="tl-duration">2017 - present</p>
                    <h5>3d Animation<span> - Lincoln University College</span></h5>
                    <p>
                      At Lincoln University College, my current focus is on 3D animation, where I'm exploring the world of immersive and visually stunning digital experiences. I am passionate about pushing the boundaries of creativity in this exciting field
                    </p>
                </div>
            </div>
        </section>
        <section class="container" id="portfolio">
            <div class="main-title">
                <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
            </div>
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="image">
                <img src={item.imageSrc} alt="" />
              </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="https://github.com/Marvelloust/Marvelloust.github.io" target="_blank" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-figma"></i>
                            </a>
                            <a href="https://youtube.com/@MarvellousOmoleye?si=xnDrNawU-qhWA0Xy" target="_blank" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <button onClick={() => openFullImage(item.imageSrc)} className="icon">
                                <i class="fas fa-expand"></i>
                            </button>
                        </div>
                    </div>
                </div>
          ))}
            </div>
        </section>
        <section class="container" id="blogs">
            <div class="blogs-content">
                <div class="main-title">
                    <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
                </div>
                <div class="blogs">
                    <div class="blog">
                        <img src={blogimg1} alt="" />
                        <div class="blog-text">
                            <h4>
                                How to Create Your Own Website
                            </h4>
                            <p>
                              Are you eager to build your own website from scratch? This comprehensive guide will walk you through the process, from selecting the right platform to customizing the design and adding content. Start your online journey today.
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src={blogimg2} alt="" />
                        <div class="blog-text">
                            <h4>
                                How to Become an Expert in Web Design
                            </h4>
                            <p>
                              Unlock the secrets of web design excellence. Discover valuable insights, essential tools, and best practices to propel yourself towards becoming a true expert in the field of web design. Elevate your skills and make a lasting impact on the digital world.
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src={blogimg3} alt="" />
                        <div class="blog-text">
                            <h4>
                                Become a Web Designer in 10 Days
                            </h4>
                            <p>
                              Dreaming of a career in web design? Our 10-day crash course is your ticket to success. Dive into the fundamentals, gain hands-on experience, and develop the skills needed to kickstart your journey as a web designer.
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src={blogimg4} alt="" />
                        <div class="blog-text">
                            <h4>
                                Debbuging made easy with Web Inspector
                            </h4>
                            <p>
                              Navigate the complexities of debugging web applications effortlessly with the Web Inspector tool. This guide provides step-by-step instructions and expert tips to help you identify and fix issues, ensuring smooth and error-free web development.
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src={blogimg5} alt="" />
                        <div class="blog-text">
                            <h4>
                                Get started with Web Design and UI Design
                            </h4>
                            <p>
                              Embark on your creative journey into web and UI design. This introductory guide will equip you with the basics of design principles, user interfaces, and the art of crafting visually engaging web experiences.
                            </p>
                        </div>
                    </div>
                    <div class="blog">
                        <img src={blogimg6} alt="" />
                        <div class="blog-text">
                            <h4>
                                This is what you need to know about Web Design
                            </h4>
                            <p>
                              From responsive design to user experience, we cover it all. This informative article is your one-stop resource for comprehensive knowledge about the world of web design. Stay informed and create impactful web solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container contact" id="contact">
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div class="contact-content-con">
                    <div class="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                          Do you have questions or wish to get in touch? Feel free to reach out by using the contact information below. I'm here to assist you and look forward to connecting.
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Nigeria, Abuja.
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: omoleyemarvellous@gmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: Lincoln University College, Abuja</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: 08075808142</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: Yoruba, English, A little bit of French</span>
                                </p>
                            </div>
                          <p>Please don't hesitate to contact me with any inquiries or opportunities. Your message is important to me, and I will respond promptly.</p>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="https://www.facebook.com/profile.php?id=100084254672795" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://x.com/Marvellous86429?t=aS9HD7yyuC5VQWppNiWfIw&s=08" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="https://github.com/Marvelloust/Marvelloust.github.io" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="https://youtube.com/@MarvellousOmoleye?si=xnDrNawU-qhWA0Xy" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="right-contact">
                        <form action="" class="contact-form">
                            <div class="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME" />
                                <input type="email" required placeholder="YOUR EMAIL" />
                            </div>
                            <div class="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT" />
                            </div>
                            <div class="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div class="submit-btn">
                                <a href={CV} download={CV.pdf} target="blank" class="main-btn">
                                    <span class="btn-text">Download CV</span>
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Modal or Lightbox for full image view */}
      {fullImage && (
        <div className="modal-overlay" onClick={closeFullImage}>
          <div className="modal">
            <button className="close-btn" onClick={closeFullImage}><i class="fas fa-times"></i></button>
            <img src={fullImage} alt="Full Image" />
          </div>
        </div>
      )}
    </main>
  );
};

const Controls = () => {
  const [activeId, setActiveId] = useState("home"); // State to manage active button

  // Function to handle click on control buttons
  const handleControlClick = (id) => {
    setActiveId(id); // Set the active button id
  };

  return (
    <div className="controls">
      <div
        className={`control ${activeId === "home" ? "active-btn" : ""}`}
        data-id="home"
        onClick={() => handleControlClick("home")} // Pass "home" as id when clicked
      >
        <i className="fas fa-home"></i>
      </div>
      <div
        className={`control ${activeId === "about" ? "active-btn" : ""}`}
        data-id="about"
        onClick={() => handleControlClick("about")} // Pass "about" as id when clicked
      >
        <i className="fas fa-user"></i>
      </div>
      <div
        className={`control ${activeId === "portfolio" ? "active-btn" : ""}`}
        data-id="portfolio"
        onClick={() => handleControlClick("portfolio")} // Pass "portfolio" as id when clicked
      >
        <i className="fas fa-briefcase"></i>
      </div>
      <div
        className={`control ${activeId === "blogs" ? "active-btn" : ""}`}
        data-id="blogs"
        onClick={() => handleControlClick("blogs")} // Pass "blogs" as id when clicked
      >
        <i className="far fa-newspaper"></i>
      </div>
      <div
        className={`control ${activeId === "contact" ? "active-btn" : ""}`}
        data-id="contact"
        onClick={() => handleControlClick("contact")} // Pass "contact" as id when clicked
      >
        <i className="fas fa-envelope-open"></i>
      </div>
    </div>
  );
};

const Theme = () => {
  return (
    <div class="theme-btn">
        <i class="fas fa-adjust"></i>
    </div>
  );
};

function MyComponent() {
  useEffect(() => {
    function handleClick(event) {
      const buttons = document.querySelectorAll(".control");
      buttons.forEach(button => {
        button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
        })
      });

      const themeButton = document.querySelector(".theme-btn");
      if (themeButton) {
        themeButton.addEventListener("click", () => {
          document.body.classList.toggle("light-mode");
        });
      }
    }

    handleClick();

    // Clean up event listeners when component unmounts
    return () => {
      const buttons = document.querySelectorAll(".control");
      buttons.forEach(button => {
        button.removeEventListener("click", handleClick);
      });

      const themeButton = document.querySelector(".theme-btn");
      if (themeButton) {
        themeButton.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      {/* Your JSX content */}
    </div>
  );
}

const Link = () => {
  useEffect(() => {
    // Create link elements for each resource and append them to the document head
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    iconLink.integrity = 'sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==';
    iconLink.crossOrigin = 'anonymous';
    iconLink.referrerPolicy = 'no-referrer';
    document.head.appendChild(iconLink);

    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap';
    document.head.appendChild(fontLink);

    // Cleanup function to remove the link elements when the component unmounts
    return () => {
      document.head.removeChild(iconLink);
      document.head.removeChild(fontLink);
    };
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div>
      {/* Your React component JSX */}
    </div>
  );
};

function App() {
  return (
      <div className="main-content">
      <Header />
      <Main />
      <Controls />
      <Theme />
      <MyComponent />
      <Link />
      </div>
  );
}

export default App;
