import {
  $,
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import projects from "~/db/projects.json";
import { getGalleryPath } from "~/utils";

export const ProjectsScreen = component$(() => {
  const filter = useSignal("all");

  const setFilter = $((tag: string) => {
    window.location.hash = tag;

    filter.value = tag;
  });

  const tags = useComputed$(() => {
    return ["all", ...new Set(projects.flatMap((project) => project.tags))];
  });

  const _projects = useComputed$(() => {
    if (filter.value === "all") return projects;
    return projects.filter((project) => project.tags.includes(filter.value));
  });

  useVisibleTask$(({ cleanup }) => {
    const tag = window.location.hash.slice(1);
    if (tag) {
      filter.value = tag;
    }
    cleanup(() => {
      filter.value = "all";
    });
  });

  return (
    <section class={styles.projects_screen}>
      <h1>Projects.</h1>
      <div class={styles.tags}>
        {tags.value.map((tag, idx) => (
          <button
            key={idx}
            onClick$={() => {
              setFilter(tag);
            }}
            class={filter.value === tag ? styles.active : ""}
          >
            #{tag}
          </button>
        ))}
      </div>
      <div class={styles.projects}>
        {_projects.value.map((project, idx) => (
          <Link
            class={styles.project}
            key={project.id}
            style={{ height: project.cardHeight + "px" }}
            href={project.id}
          >
            <img
              src={getGalleryPath(project.id, project.thumbnail)}
              alt=""
              width={1000}
              height={1000}
            />
            <div class={styles.content}>
              <div class={styles.tags}>
                {project.tags.map((tag, idx) => (
                  <span key={idx}>#{tag}</span>
                ))}
              </div>
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
