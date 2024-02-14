import {
  mobile,
  backend,
  creator,
  framerMotion,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  evently,
  food_delivery_app,
  bank_modern_app,
  gpt3,
  Nextjs,
  facebook,
  instagram,
  linkedin,
} from "../assets";

export const navSocialMediaLins = [
  {
    title: "facebook",
    img: facebook,
    link: "https://www.facebook.com/profile.php?id=61551102866898&mibextid=ZbWKwL",
  },
  {
    title: "instagram",
    img: instagram,
    link: "https://www.instagram.com/hamza_aoun0?igsh=NGVhN2U2NjQ0Yg==",
  },
  {
    title: "linkedin",
    img: linkedin,
    link: "www.linkedin.com/in/hamza-aoun",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "UI/UX Designer",
    icon: figma,
  },
];

const technologies = [
  {
    index: 0,
    name: "HTML 5",
    icon: html,
  },
  {
    index: 1,
    name: "CSS 3",
    icon: css,
  },
  {
    index: 2,
    name: "JavaScript",
    icon: javascript,
  },
  {
    index: 3,
    name: "TypeScript",
    icon: typescript,
  },
  {
    index: 4,
    name: "React JS",
    icon: reactjs,
  },
  {
    index: 5,
    name: "Next 14",
    icon: Nextjs,
  },
  {
    index: 6,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    index: 7,
    name: "Framer Motion",
    icon: framerMotion,
  },
  {
    index: 8,
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    index: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    index: 10,
    name: "Three JS",
    icon: threejs,
  },
  {
    index: 11,
    name: "git",
    icon: git,
  },
  {
    index: 12,
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Evently App",
    description:
      "A full-stack, responsive event application, this project implements pages for event browsing, searching, categorizing events without login, authenticating user with clerk, purchasing tickets with stripe, creating, editing, and deleting event. Associate tickets to specific events and users. Provide a way for users to view their purchased tickets. All from the UI without visiting MongoDB ",
    tags: [
      {
        name: "Next 14",
        color: "blue-text-gradient",
      },
      {
        name: "MogoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn-ui",
        color: "orange-text-gradient",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/HAMZA-AOUN/event_platform",
    demo: "https://event-platform-nine-teal.vercel.app/",
    video_link:
      "https://drive.google.com/file/d/1IJFF50NMu2lf2cb80K_IW29Pe36iJwRW/view?usp=drivesdk",
  },

  {
    name: "Food Delivery App",
    description:
      "full stack food delivery application, this project allows to the admin to add new items, edit existing items, delete items all from the user interface without visiting the firebase, and to maintain all the things over the firestore cloud database, Providing ordering and delivery services to customers under the supervision of the admin ",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: food_delivery_app,
    source_code_link: "https://github.com/HAMZA-AOUN/restaurant-delivery",
    demo: "https://restaurant-delivery-five.vercel.app/",
    video_link:
      "https://drive.google.com/file/d/1I3IhTPQdzWFlI7D6HKfcgK4wWkRP-m6a/view?usp=drivesdk",
  },

  {
    name: "Bank Modern App",
    description:
      "Fully Responsive Website with Modern UI/UX in React JS with Tailwind css",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: bank_modern_app,
    source_code_link: "https://github.com/HAMZA-AOUN/bank_modern_app",
    demo: "https://hamza-aoun.github.io/bank_modern_app/",
    video_link: "",
  },

  {
    name: "GPT3 app",
    description:
      "Fully Responsive Website with Modern UI/UX in React JS with CSS",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/HAMZA-AOUN/GPT3",
    demo: "https://gpt-3-gules-nine.vercel.app/",
    video_link: "",
  },

  // {
  //   name: "Gym Exercises App",
  //   description:
  //     "React 18 Fitness Exercises App With APIs | RapidAPI. With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details ",
  //     tags: [
  //     {
  //       name: "ReactJS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: " Material UI (V5) ",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "RapidAPI",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, projects };
