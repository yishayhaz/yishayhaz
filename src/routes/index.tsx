import { HomeScreen } from "~/screens/home";
import type { DocumentHead } from "@builder.io/qwik-city";

export default HomeScreen;

export const head: DocumentHead = {
  meta: [
    {
      name: "Yishay Hazan",
      content: "A Full Stack Developer",
    },
  ],
};
