import { Link } from "@builder.io/qwik-city";
import styles from "./style.module.scss";
import { component$, $, QwikMouseEvent } from "@builder.io/qwik";

export type BreadcrumbsProps = {
  links: { href?: string; label: string }[];
};

export const Breadcrumbs = component$(({ links }: BreadcrumbsProps) => {
  return (
    <div class={styles.breadcrumbs}>
      {links.map((link, idx) => (
        <>
          <Link href={link.href}>{link.label}</Link>
          {idx < links.length - 1 ? <span>/</span> : null}
        </>
      ))}
    </div>
  );
});
