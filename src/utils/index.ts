export const titleize = (str: string) => {
  return str.split(" ").map(capitalize).join(" ");
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getGalleryPath = (folder: string, name: string) => {
  return `/projects/${folder}/${name}`;
};

export const isVideo = (src: string) => {
  return src.endsWith(".mp4");
};
