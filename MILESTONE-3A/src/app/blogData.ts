type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  key: string;
};

const blogs: Blog[] = [
  /*{
      title: "AI Chat Bot For Cal Poly",
      date: "27 Oct 2024",
      description:
        "I had the pleasure to meet Cristian, a senior CS major at Cal Poly today. " +
        "He is working on an AI chatbot specifically designed to help Cal Poly students. " +
        "Through it, students can make schedules, get help with work, decide professors for next term, make friends, etc. " +
        "I would love to contribute to this project, and am looking forward to making & training" +
        "a neural network, which would recommend professors, based on the student's style and preference of learning.",
      image: "header-chat-box.png",
      imageAlt: "Generic Chat Bot Visualization",
      slug: "index.html",
    },*/

  {
    title: "CalHacks 11.0",
    date: "23 Oct 2024",
    description:
      "Just returned from my first hackathon, CalHacks 11.0. It was an absolute blast! " +
      "I had lots of fun working with my team.",
    image: "/calhackspic.jpg",
    imageAlt: "A Picture From CalHacks 11.0",
    slug: "/blogs/blog_1_CalHacks",
    key: "1",
  },

  {
    title: "Hack4Impact Bootcamp",
    date: "17 Oct 2024",
    description:
      "I am extremely excited to have been selected for the Hack4Impact Bootcamp! " +
      "Developing this blog using Typescript is part of my first Milestone!",
    image: "/h4i.png",
    imageAlt: "Hack4Impact Logo",
    slug: "/blogs/blog_2_H4I",
    key: "2",
  },
];

export default blogs;
