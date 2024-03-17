import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import { getImagePath, titleize } from "~/utils";
import type { Project } from "~/types";
import db from "~/db/projects.json";
import { Image } from "~/components/image";

export const ProjectScreen = component$(() => {
  const location = useLocation();
  const data = useStore<{ project: Project; isLoading: boolean }>({
    isLoading: true,
  } as { isLoading: boolean; project: Project });

  useTask$(() => {
    const project = db.find((p) => p.folder === location.params.project);

    if (!project) {
      throw new Error("Project not found");
    }

    data.project = project as Project;
    data.isLoading = false;
  });

  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div class={styles.project_screen}>
      <Image src={getImagePath(data.project.folder, data.project.thumbnail)} />
      <h1>{titleize(data.project.name)}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        molestiae, hic corporis assumenda nulla velit similique, fugiat et optio
        veritatis eos laudantium. Blanditiis deleniti expedita qui! Quod ut cum
        unde.
      </p>
      <div class={styles.gallery}>
        {data.project.gallery.map((path, idx) => (
          <div key={idx}>
            <Image src={getImagePath(data.project.folder, path)} />
          </div>
        ))}
      </div>
    </div>
  );
});
