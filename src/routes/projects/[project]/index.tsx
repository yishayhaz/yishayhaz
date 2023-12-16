import { ProjectScreen } from "~/screens/project";
import { type RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler = async ({ json, params }) => {
  json(200, {
    name: params.project,
  });
};

export default ProjectScreen;
