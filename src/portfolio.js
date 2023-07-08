/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false, // Set to false to use static SVG
};

const greeting = {
  username: "Cecy Flores",
  title: "Hi all, I'm Cecy",
  subTitle: emoji(
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other libraries and frameworks.💻"
  ),
  resumeLink:
    "https://docs.google.com/document/d/19MUsZhGVGP3pTCabNHVSbrA6PK4tHVW0yyaRoCZI0vo/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anacecyflores",
  linkedin: "https://www.linkedin.com/in/anacecyflores/",
  gmail: "anacecyflores1@gmail.com",
  gitlab: "https://gitlab.com/anacecyflores",
  medium: "https://medium.com/@anacecyflores",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About me ",
  subTitle: "Currently transitioning from educationto the world of tech!",
  skills: [
    emoji(
      "⚡ Developing applications and creating projects to continue to grow!"
    ),
    emoji("⚡ Currently pursuing an AWS Cloud Practirioner certification"),
    emoji("⚡ Check out my latest projects and collaborations below"),

    emoji("⚡ I enjoy creating water-color art"),

    emoji("⚡ I am learning e-commerce by building my own site!"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northwestern University",
      logo: require("./assets/images/northwesternLogo.png"),
      subHeader: "Fullstack Web Development Bootcamp",
      duration: "March 2022 - September 2022",
      desc: "3- Month bootcamp & independant study for AWS certification",
      descBullets: [
        "Learned a variety of fullstack components that drove my career switch from education to web development.",
      ],
    },
    {
      schoolName: "Concordia University Chicago",
      logo: require("./assets/images/concordiaLogo.png"),
      subHeader:
        "Bachelor of Science in History & Bachelor of Science in Secondary Education",
      duration: "August 2015 - May 2019",
      desc: "History & Education Major with minor in Spanish, ESL and Economics",
      descBullets: [
        "Graduated top of my glass with a disctinction from the History Departmen and 2015 A Golden Apple Scholar.",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Midwest Development",
      companylogo: require("./assets/images/midwestLogo.png"),
      date: "June 2022 – Present",
      desc: "I have expertise in creating and designing responsive applications and landing sites for small business owners  by utilizing Next.js, Node.js, and WooCommerce. Successfully demonstrated my ability to handle the communication between the frontend and backend of web applications.",
      descBullets: ["Lupita’s HVAC", "Arzet Home Improvement"],
    },
    {
      role: "Front-End Developer Freelance",
      company: "MalagaCo Rental",
      companylogo: require("./assets/images/computerLogo.jpg"),
      date: "April 2023 – Present",
      desc: "I have hands-on experience in developing and designing user-friendly websites and web applications using React. Consistently met or exceeded project deadlines, with an average completion time of one week for each project.",
    },
    {
      role: "Bilingual Resource, History Teacher",
      company: "Palatine School District 15",
      companylogo: require("./assets/images/D15Logo.png"),
      date: "August 2021 – Present",
      desc: "Transitioning from an educator background into web-development.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "On-going Projects",
  subtitle: "Check out my current projects.",
  projects: [
    {
      image: require("./assets/images/worldviewLogo.png"),
      projectName: "Worldview",
      projectDesc:
        "WorldView is an educational application built with React.js, GraphQL, MongoDB, Three.js, and React-three-fiber. It serves as a visual educational resource, allowing students of all ages to explore historical moments from different centuries worldwide. Sign up to save your favorite historical moments for later reference.As a history educator, I always struggled to find engaging and fun resources for my students to access geography and history at the same time. By creating this, I am developing a program that future students can use to learn a bout events that happened though out history based on key words such as wars, revolutions or even inventions. They will also be able to learn history about a specific country or decade by navigating this react-based globe! Super ecxited to continue to work on this program.🌎",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://my-world-view.herokuapp.com/ ",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/cecyStudio.png"),
      projectName: "Cecy Studio",
      projectDesc:
        "With a focus on leveraging my personal art, I have honed my skills in creating visually appealing Shopify-based e-commerce sites that captivate audiences and drive sales.In my journey as an e-commerce entrepreneur, I have demonstrated proficiency in various aspects of online business. From setting up and customizing Shopify stores to implementing effective marketing strategies, I have developed a well-rounded skill set that allows me to navigate the dynamic world of e-commerce with confidence.Driven by a desire to continuously improve, I embrace digital marketing techniques to promote my artwork and drive traffic to my e-commerce site. Through social media platforms and content creation, I leverage my online presence to connect with art enthusiasts, share insights into my artistic process, and foster a loyal customer base. With a keen eye for analytics, I am adept at monitoring and analyzing key performance metrics to make data-driven decisions. By understanding customer behavior and identifying trends, I optimize my marketing strategies and product offerings, ensuring continued growth and success.",

      Description: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "www.cecystudio.com",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Check out my sample work  "),
  subtitle: "Landing pages and more !",

  achievementsCards: [
    {
      title: "Lupita’s HVAC",
      subtitle:
        "A Landing Page for a Midwest Development client using Next.js and TypeScript. This responsive website showcases the client's HVAC services and provides a user-friendly experience for visitors to learn more about their offerings.",
      image: require("./assets/images/lupitaLogo.png"),
      imageAlt: "Lupita's HVAC Logo",
      footerLink: [
        {
          name: "Visit site",
          url: "lupitahvac.com",
        },
      ],
    },
    {
      title: "Arzet Home Improvement-",
      subtitle:
        " Landing Page for a Midwest Development client, utilizing HTML, CSS, SCSS, and JavaScript. Additionally, I incorporated other tools such as Netlify and gulp.js to optimize the project's deployment and build process. This showcases the client's services and provides a visually appealing and user-friendly experience for potential customers.",
      image: require("./assets/images/arzetLogo.png"),
      imageAlt: "Arzet Logo",
      footerLink: [
        {
          name: "Visit site",
          url: "arzethomeimprovement.com",
        },
      ],
    },

    {
      title: "Get Higher",
      subtitle:
        "This project utilized the Google Job Search API to provide location and career-based job postings, along with a personalized aptitude test for recommending suitable career options. It also features a user login system for saving progress, information, and job interests in our database, along with integrated components like Google Maps, an individualized quiz, a calendar for reminders, and a dashboard, creating a comprehensive job-seeking experience within a single platform.",
      image: require("./assets/images/getHigherLogo.png"),
      imageAlt: "Get Higher Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://get-higher.herokuapp.com ",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@anacecyflores/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/anacecyflores-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Check out my favorite Podcast 🎙️"),
  subtitle: "Murder Mysteries",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://open.spotify.com/show/1cpyLfDHP1cNnyOb478qrts"],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "I would love to connect and work together!",
  number: "773.704.9030",
  email_address: "anacecyflores1@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
