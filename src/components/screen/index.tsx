import { Slot, component$ } from "@builder.io/qwik";
import "./style.scss";

export const Screen = component$(() => {
  return (
    <main class="screen">
      <Slot />
    </main>
  );
});
