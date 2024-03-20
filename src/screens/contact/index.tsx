import { component$ } from "@builder.io/qwik";
import styles from "./style.module.scss";
import { Socials } from "~/components/socials";
import { Breadcrumbs } from "~/components/breadcrumbs";

export const ContactScreen = component$(() => {
  return (
    <section class={styles.contact_screen}>
      <Breadcrumbs
        links={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Contact me",
          },
        ]}
      />
      <h1>Contact me.</h1>
      <Socials />
    </section>
  );
});
