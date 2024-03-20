import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Socials } from "~/components/socials";
import { Breadcrumbs } from "~/components/breadcrumbs";

export const ReachOutScreen = component$(() => {
  return (
    <section class={styles.contact_screen}>
      <Breadcrumbs
        links={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Reach out",
          },
        ]}
      />
      <article>
        <h1>Reach out.</h1>
        <p>
          Want to talk about a project? Or just want to say hi?
          <br />
          Let's connect.
        </p>
      </article>
      <Socials />
    </section>
  );
});
