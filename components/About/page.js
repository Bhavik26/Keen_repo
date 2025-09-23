import React, { useState } from "react";
import { CardStyle5, SectionTitle } from "../sofbox";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const About = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, maxLines = 4) => {
    const words = text.split(' ');
    const wordsPerLine = 8; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) {
      return { text, needsTruncation: false };
    }
    
    return {
      text: words.slice(0, maxWords).join(' ') + '...',
      needsTruncation: true
    };
  };

  const centerStyle = {
    textAlign: 'center',
  };

  const allCards = [
    {
      step: 1,
      media: "/assets/images/services/icon1.png",
      title: "Python Machine Learning Training in Udaipur – 6-Month Internship Training for MCA and B.Tech in Udaipur",
      text: "We are happy to assist you in your career-oriented 6 Month Internship Program of January 2025 in our organisation. Keen Infotech is going to conduct an eligibility examination for all BE/B.Tech/MCA students for live project-based 6 Month Internship in our workshop.",
    },
    {
      step: 2,
      media: "/assets/images/services/icon2.png",
      title: "B.Tech 30/45 Days Summer Training in PHP, ASP.NET, Python, JAVA, J2EE, AWS, Live Project",
      text: "Live Project Training for B.Tech final semester students. Industrial training prepares trainees for jobs that are based on manual or practical activities, related to a specific trade or technical education domain as the trainee directly develops expertise in a particular group of techniques or technology.",
    },
    {
      step: 3,
      media: "/assets/images/services/icon3.png",
      title: "6 Months Internship Training for Python",
      text: "Importance and introduction to Python and its installation; OOP, expressions, data types, looping, etc. Functions, operations, and class defining. Machine Learning algorithms in Python. Course completion certificate from Intellipaat. Skills to crack Python professional certification.",
    },
    {
      step: 4,
      media: "/assets/images/services/icon1.png",
      title: "Cloud Architect, DevOps Engineer, and AWS Developer Training",
      text: "Keen Infotech offers a range of AWS courses, from basic AWS Fundamentals to advanced topics like AWS Solutions Architect and AWS DevOps. These courses are designed for different skill levels and focus on real-world applications through practical labs and live projects. This training prepares you for roles like Cloud Architect, DevOps Engineer, and AWS Developer.",
    },
    {
      step: 5,
      media: "/assets/images/services/icon2.png",
      title: "PHP-Professional Website Development Training",
      text: "PHP Summer Training 2018. PHP is a server-side, HTML-embedded scripting language. It provides web developers with a full suite of tools for building dynamic and efficient internet-based applications. All software runs on certain languages. One language that is very popular for software development is PHP. Summer Training and Industrial Training in Udaipur. Python Summer Training in Udaipur.",
    },
    {
      step: 6,
      media: "/assets/images/services/icon3.png",
      title: "Summer Training in AWS, Java, and Android App Development for B.Tech/MCA",
      text: "Android is fast becoming one of the biggest platforms for programmers, and cloud server AWS is essential today. There is a huge demand for skilled Android Developers all over the world. Most businesses across multiple domains are building Android Apps both for enterprise and retail products. Whether you are a student or in the IT industry, possessing Android development skills will help you take the next big leap in your career.",
    },
    {
      step: 7,
      media: "/assets/images/services/icon2.png",
      title: "Core Java & Advanced Java Training, JSP, Spring MVC, and Struts Training",
      text: "The Java platform at its core, is a way of computing that is based on the power of networks and the idea that the same software should run on different kinds of computers, consumer gadgets and other devices. The architecture-neutral nature of Java technology is extremely important in a networked world where one cannot predict what kind of devices our partners, suppliers and employees may use to connect to you.",
    },
    {
      step: 8,
      media: "/assets/images/services/icon3.png",
      title: "B.Tech/MCA Summer Training in PHP, ASP.NET, Java & Android",
      text: "Keen Infotech Technologies is a growing training center in Udaipur for training students to build their careers in web technology and the IT industry. We are among the few PHP Training, ASP.NET Training, Java training institutes in Jaipur with roots in software and web technology development.",
    },
    {
      step: 9,
      media: "/assets/images/services/icon3.png",
      title: "6-Month Internship Training – Machine Learning",
      text: "Keen Infotech Python Artificial Intelligence Workshop – Udaipur. Introduction to Deep Learning and Artificial Intelligence. Supervised Learning: Regression and Classification. Introduction to Neural Networks and Deep Learning: Perceptron, multilayer networks, backpropagation. Working with Spyder and Jupyter Notebook. Introduction to Matplotlib, SciPy, and NumPy.",
    },
    {
      step: 10,
      media: "/assets/images/services/icon3.png",
      title: "Data Science & Data Analysis Internships – Machine Learning",
      text: "Keen Infotech offers a range of data science and IT-related courses, including the Machine Learning Data Analysis course. This program covers key topics like data analysis with Python (using libraries like NumPy and pandas), data visualization (with tools like Seaborn), and machine learning concepts such as supervised and unsupervised learning, clustering, and data preprocessing techniques.",
    },
    {
      step: 11,
      media: "/assets/images/services/icon3.png",
      title: "Tableau and Power BI Training at Keen Infotech, Udaipur",
      text: "Keen Infotech, a leading IT training institute based in Udaipur, offers comprehensive training in Tableau and Power BI, two of the most popular tools for data visualization and business intelligence. These courses are designed for both beginners and professionals seeking to enhance their analytical skills and gain expertise in modern BI tools.",
    },
    {
      step: 12,
      media: "/assets/images/services/icon3.png",
      title: "DevOps Training at Keen Infotech, Udaipur",
      text: "Keen Infotech, a leading IT training institute in Udaipur, offers a specialized DevOps Training Program designed to meet the growing demand for professionals skilled in bridging the gap between development and operations. The course is ideal for IT professionals, system administrators, and developers aiming to streamline workflows and enhance productivity in software development and deployment processes.",
    },
    {
      step: 13,
      media: "/assets/images/services/icon3.png",
      title: "Keen Infotech Launches Go Language Training in Udaipur!",
      text: "We are excited to announce the launch of our Go Language Training Program at Keen Infotech, Udaipur! This course is designed for developers, students, and professionals looking to enhance their programming skills with Google's Go (Golang)—one of the fastest-growing languages in modern software development. Why Learn Go? High Performance & Efficiency: Go is known for its speed, simplicity, and concurrency support. Ideal for Web Development & Cloud Computing: Used by leading companies like Google, Uber, and Dropbox. Strong Career Opportunities: Increasing demand for Go developers in the industry. Course Highlights: Beginner to Advanced Training Hands-on Coding & Real-world Projects Expert Instructors with Industry Experience Flexible Timings & Weekend Batches Available",
    },
    {
      step: 14,
      media: "/assets/images/services/icon3.png",
      title: "Are you looking for a career-boosting summer training and internship opportunity?",
      text: "Are you looking for a career-boosting summer training and internship opportunity? Keen Infotech, Udaipur, is offering 30-day, 45-day, and 60-day training programs designed to provide students with hands-on learning and real-world experience. Whether you are a student or a professional looking to upskill, this program is perfect for you!",
    },
    {
      step: 15,
      media: "/assets/images/services/icon3.png",
      title: "Keen Infotech - Summer Training 2025",
      text: "Keen Infotech, located in Udaipur, Rajasthan, offers both online and offline summer training programs in various IT domains. These programs are designed to enhance technical skills and provide practical experience to students and professionals. For the summer of 2025, Keen Infotech is expected to continue offering these training programs. However, specific details such as course offerings, schedules, and enrollment procedures may not yet be available. To obtain the most accurate and up-to-date information, please contact Keen Infotech directly through their official website or reach out to their administrative office. Students in the 3rd and 4th year of B.E./B.Tech, Students in the 2nd and 3rd year of BCA/MCA. Courses Offered: Machine Learning and Data Analysis, DevOps, Go Language",
    },
  ];

  return (
    <>
      <section
        id="how-it-works"
        className="overview-block-ptb it-works about-section"
        style={{ textAlign: 'center' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 style={{
                ...centerStyle,
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '30px',
                lineHeight: '1.2'
              }}>
                About Keen Infotech Development and Internship Training Company in Udaipur Rajasthan India
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: '#333',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  About Keen Infotech
                  <div style={{
                    width: '80px',
                    height: '3px',
                    background: '#87CEEB',
                    margin: '10px auto 0',
                    borderRadius: '2px'
                  }}></div>
                </h2>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                  maxWidth: '900px',
                  margin: '0 auto',
                  textAlign: 'justify'
                }}>
                  KEEN INFOTECH Technologies is a Leading Software-Website-Mobile Apps development & IT Training Provider Company. KEEN INFOTECH Technologies is also leading IT Training Service Provider in Udaipur that provides comprehensive education and training in various fields of Information Technology, Software - Website & Mobile Apps Developments. KEEN INFOTECH is providing Winter Training / Summer Training / Live Project Internship Program 2025 in Udaipur for B.Tech/M.Tech/BCA/MCA/B.Sc/M.Sc students in own Training-Development Centre with Live Projects. KEEN INFOTECH is registered by Govt. of Rajasthan & ISO 9001:2008 Certified Training Institute in Udaipur. (Certificate No. 21502041521).
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div style={{
                textAlign: 'center',
                marginBottom: '50px'
              }}>
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  color: '#333',
                  position: 'relative',
                  display: 'inline-block'
                }}>
                  Python Machine Learning Training In Udaipur Python AWS React Angular Mern Stack Php Digital Marketing Core Java,Advance Java,Android App Development, MVC,Web API,PHP,Cakephp, CodeIgniter, Training & Development
                  <div style={{
                    width: '80px',
                    height: '3px',
                    background: '#87CEEB',
                    margin: '10px auto 0',
                    borderRadius: '2px'
                  }}></div>
                </h2>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#666',
                  maxWidth: '900px',
                  margin: '0 auto',
                  textAlign: 'justify'
                }}>
                  KEEN INFOTECH, a complete software development and training company is set up with a purpose of providing quality development and training empowering the skills of professionals for Software Development & Software Quality Testing (SQT). KEEN INFOTECH leads in giving the real time practice and project training on ASP.NET 4.5, PHP, CakePHP, CodeIgniter, Core Java, Advanced Java, Android Application Development, ASP.NET Silverlight Web Application Development, WPF, XML, XAML, VB.NET, VC#.NET, Oracle, SQL, C, C++, and Software Testing, including both manual and automated testing in Udaipur. Keen Infotech is a software development company located in Udaipur, Rajasthan. It was founded in 2010 and has since grown to become one of the leading software development companies in the region. Keen Infotech offers a wide range of software development services, including web development, mobile app development, and custom software development. The company has a team of experienced and skilled developers who are committed to providing high-quality software solutions to its clients. Keen Infotech has a strong reputation for quality work and customer service. The company has received numerous awards for its excellence in software development.
                </p>
              </div>
            </div>
          </div>
          {/* Slider Container */}
          <div className="row">
            <div className="col-sm-12">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                dir="ltr"
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                style={{ padding: '20px 0' }}
              >
                {allCards.map((card, index) => {
                  const { text: truncatedText, needsTruncation } = truncateText(card.text);
                  const isExpanded = expandedCards[index];

                  return (
                    <SwiperSlide key={index}>
                      <div style={{
                        background: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        height: '400px',
                        width: '100%',
                        display: 'grid',
                        gridTemplateRows: 'auto auto 1fr auto',
                        gap: '0px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        margin: '0 auto',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}>
                        <div style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          background: '#87CEEB',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 15px',
                          color: 'white',
                          fontSize: '20px',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {card.step}
                        </div>
                        <h5 style={{
                          fontWeight: 'bold',
                          marginBottom: '10px',
                          fontSize: '16px',
                          lineHeight: '1.3',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          flexShrink: 0
                        }}>
                          {card.title}
                        </h5>
                        <div style={{
                          fontSize: '14px',
                          color: '#666',
                          lineHeight: '1.5',
                          textAlign: 'justify',
                          flex: 1,
                          overflowY: isExpanded ? 'auto' : 'hidden',
                          maxHeight: isExpanded ? '220px' : '180px',
                          paddingRight: isExpanded ? '5px' : '0',
                          scrollbarWidth: isExpanded ? 'thin' : 'none',
                          scrollbarColor: isExpanded ? '#87CEEB transparent' : 'transparent'
                        }}>
                          <div style={{
                            display: '-webkit-box',
                            WebkitLineClamp: isExpanded ? 'unset' : 8,
                            WebkitBoxOrient: 'vertical',
                            textOverflow: isExpanded ? 'unset' : 'ellipsis',
                            overflow: 'visible'
                          }}>
                            {isExpanded ? card.text : truncatedText}
                          </div>
                        </div>
                        {needsTruncation && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpanded(index);
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#007bff',
                              cursor: 'pointer',
                              fontSize: '14px',
                              marginTop: '10px',
                              padding: '5px 0',
                              flexShrink: 0,
                              alignSelf: 'flex-start'
                            }}
                          >
                            {isExpanded ? 'Read Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
