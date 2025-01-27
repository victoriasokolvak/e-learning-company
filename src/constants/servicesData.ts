import { Computer } from "../components/ui/Computer";
import { Design } from "../components/ui/Design";
import { Man } from "../components/ui/Man";
import { Phone } from "../components/ui/Phone";


export const services = [
  {
    title: "INSTRUCTIONAL DESIGN",
    description:
      "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
      imageComponent: Design,
  },
  {
    title: "ELEARNING DEVELOPMENT",
    description:
      "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
      imageComponent: Computer,
  },
  {
    title: "MOBILE LEARNING",
    description:
      "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
      imageComponent: Phone,
  },
  {
    title: "INSTRUCTOR-LED TRAINING",
    description:
      "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
      imageComponent: Man,
  },
];
