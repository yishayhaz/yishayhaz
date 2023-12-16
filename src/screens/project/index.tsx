import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export const ProjectScreen = component$(() => {
  const location = useLocation();
  const name = useSignal("");

  useTask$(async () => {
    const response = await fetch(location.url, {
      method: "POST",
    });
    const json = await response.json();

    name.value = json.name;
  });

  return <div>Hello {name}</div>;
});
