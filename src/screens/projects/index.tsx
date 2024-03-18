import { component$, useTask$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import type { Project } from "~/types";
import projects from "~/db/projects.json";
import { getImagePath } from "~/utils";

export const ProjectsScreen = component$(() => {
  return (
    <section class={styles.projects_screen}>
      <h1>Projects.</h1>
      <div class={styles.projects}>
        {projects.map((project, idx) => (
          <Link
            class={styles.project}
            key={idx}
            style={{ height: project.cardHeight + "px" }}
            href={`${project.name.toLowerCase().replaceAll(" ", "-")}`}
          >
            <img
              src={getImagePath(project.folder!, project.thumbnail)}
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
