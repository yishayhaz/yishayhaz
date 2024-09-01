import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import { Socials } from "~/components/socials";

export const HomeScreen = component$(() => {
  return (
    <>
      <div class="watermark">
        <span>about me.</span>
      </div>
      <section class={styles.home_screen}>
        <h1>im yishay hazan</h1>
        <p>
          Hey there! I'm Yishay, an experienced developer specializing in
          building design systems for large & complex projects. My background
          spans full-stack applications, mobile apps, and software. in my free
          time, I played with tons of technologies and frameworks!
        </p>
        <Link href="/projects">
          See my work
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <Socials />
      </section>
    </>
  );
});
