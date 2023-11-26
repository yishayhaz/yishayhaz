import { component$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./style.module.scss";

export const Cursor = component$(() => {
  useVisibleTask$(({ cleanup }) => {
    const cursor = document.querySelector(
      `.${styles.cursor}`
    ) as HTMLDivElement;
    const cursorDot = document.querySelector(
      `.${styles.cursor_dot}`
    ) as HTMLDivElement;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.classList.remove(styles.cursor_hidden);
      cursorDot.classList.remove(styles.cursor_dot_hidden);

      const { clientX: x, clientY: y } = e;

      cursor.animate(
        {
          transform: `translate(${x - cursor.offsetWidth / 2}px, ${
            y - cursor.offsetHeight / 2
          }px)`,
        },
        {
          duration: 800,
          fill: "forwards",
        }
      );

      cursorDot.animate(
        {
          transform: `translate(${x - cursorDot.offsetWidth / 2}px, ${
            y - cursorDot.offsetHeight / 2
          }px)`,
        },
        {
          duration: 20,
          fill: "forwards",
        }
      );

      cursor.classList.add(styles.cursor_hidden);
      cursorDot.classList.add(styles.cursor_dot_hidden);
    };

    window.addEventListener("mousemove", handleMouseMove);

    cleanup(() => {
      window.removeEventListener("mousemove", handleMouseMove);
    });
  });

  return (
    <>
      <div class={styles.cursor} />
      <div class={styles.cursor_dot} />
    </>
  );
});
