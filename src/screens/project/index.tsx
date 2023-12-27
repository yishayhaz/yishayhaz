import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import { titleize } from "~/utils";

export const ProjectScreen = component$(() => {
  const location = useLocation();
  const name = useSignal("");

  useTask$(async () => {
    const response = await fetch(location.url, {
      method: "POST",
    });
    const json = await response.json();

    name.value = titleize(json.name);
  });

  return (
    <div class={styles.project_screen}>
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        molestiae, hic corporis assumenda nulla velit similique, fugiat et optio
        veritatis eos laudantium. Blanditiis deleniti expedita qui! Quod ut cum
        unde.
      </p>
      <div class={styles.gallery}>
        {Array(9)
          .fill("")
          .map((_, idx) => (
            <div key={idx}>
              <img
                src={"https://source.unsplash.com/random?q=" + idx}
                alt=""
                width={200}
                height={200}
              />
            </div>
          ))}
      </div>
    </div>
  );
});
