import { $, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import { getGalleryPath, titleize } from "~/utils";
import type { Project } from "~/types";
import db from "~/db/projects.json";
import { GalleryModal } from "~/components/gallery_modal";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { Markdown } from "~/components/markdown";

export const ProjectScreen = component$(() => {
  const location = useLocation();
  const data = useStore<{ project: Project; isLoading: boolean }>({
    isLoading: true,
  } as { isLoading: boolean; project: Project });
  const showImg = useSignal<string>("");

  useTask$(() => {
    const project = db.find((p) => p.id === location.params.project);

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
    <>
      {showImg.value.length ? (
        <GalleryModal
          show
          onClose={$(() => {
            showImg.value = "";
          })}
          src={showImg.value}
          alt="image"
        />
      ) : null}
      <article class={styles.project_screen}>
        <Breadcrumbs
          links={[
            { href: "/projects", label: "Projects" },
            { label: data.project.name },
          ]}
        />
        <div class={styles.block}>
          <h1>{titleize(data.project.name)}</h1>
          <span>{data.project.timeline}</span>
        </div>
        {data.project.content.map((content, idx) => (
          <div class={styles.block} key={idx}>
            <h2>
              <Link class={styles.anchor}>#</Link>
              {content.title}
            </h2>
            {content.content && (
              <div class={styles.content}>
                <Markdown content={content.content} />
              </div>
            )}
            {content.gallery ? (
              <div class={styles.gallery}>
                {content.gallery.map((path, idx) => (
                  <div
                    key={idx}
                    onClick$={() => {
                      showImg.value = path;
                    }}
                  >
                    {path.endsWith(".mp4") ? (
                      <>
                        <video
                          src={getGalleryPath(data.project.id, path)}
                          width={300}
                          height={300}
                        />
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                        </svg>
                      </>
                    ) : (
                      <img
                        src={getGalleryPath(data.project.id, path)}
                        width={300}
                        height={300}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
        <div class={styles.contact}>
          <a href="/contact">Contact me</a>
        </div>
      </article>
    </>
  );
});
