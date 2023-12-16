import { component$, useTask$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import type { Project } from "~/types";

export const ProjectsScreen = component$(() => {
  const projects = useSignal<Project[]>([]);

  useTask$(async () => {
    try {
      const res = await fetch("http://localhost:5173/db/projects.json");
      projects.value = await res.json();
    } catch {
      /**/
    }
  });

  return (
    <section class={styles.projects_screen}>
      <h1>Projects.</h1>
      <div class={styles.projects}>
        {projects.value.map((project, idx) => (
          <Link
            class={styles.project}
            key={idx}
            style={{ height: project.cardHeight + "px" }}
            href={`${project.name.toLowerCase().replaceAll(" ", "-")}`}
          >
            <img
              src={`/projects/${project.thumbnail}`}
              alt=""
              width={1000}
              height={1000}
            />
            <div class={styles.content}>
              <h2>{project.name}</h2>
              <time>{project.timeline}</time>
              <p>{project.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
});
