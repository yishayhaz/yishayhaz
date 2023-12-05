import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

const projects = [
  {
    height: 350,
    name: "Shoppa",
    description: "An online ecommerce marketplace.",
    thumbnail: "shoppa.png",
    time: "Jan - Nov 2023",
  },
  {
    height: 350,
    name: "3 Walls",
    description: "An immersive learning expirence",
    thumbnail: "shoppa.png",
    time: "Oct 2022 - Present",
  },
  {
    height: 350,
    name: "Proprep",
    description: "Study STEM online",
    thumbnail: "shoppa.png",
    time: "june 2022 - june 2023",
  },
];

export const ProjectsScreen = component$(() => {
  return (
    <main class={styles.projects_screen}>
      <h1>Projects.</h1>
      <div class={styles.projects}>
        {projects.map((project, idx) => (
          <div
            class={styles.project}
            key={idx}
            style={{ height: project.height + "px" }}
          >
            <img
              src={`/projects/${project.thumbnail}`}
              alt=""
              width={1000}
              height={1000}
            />
            <div class={styles.content}>
              <h2>{project.name}</h2>
              <time>{project.time}</time>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
});
