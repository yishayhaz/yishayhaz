export const titleize = (str: string) => {
  return str.split(" ").map(capitalize).join(" ");
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getImagePath = (folder: string, name: string) => {
  return `/projects/${folder}/${name}`;
};

export const mdStringToHtml = (str: string) => {
  // get link (e.g. [link](https://www.example.com)) and convert to html
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  str = str.replace(linkRegex, '<a href="$2" target="_blank">$1</a>');

  return str;
};

export const titleToId = (title: string) => {
  return title.toLowerCase().replace(/ /g, "-");
};
