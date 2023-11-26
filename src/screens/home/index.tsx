import { component$ } from "@builder.io/qwik";
import { Cursor } from "~/components/cursor";

export const HomeScreen = component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>

      <Cursor />
    </>
  );
});
