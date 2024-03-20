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
      <h1>Reach out.</h1>
      <Socials />
    </section>
  );
});
