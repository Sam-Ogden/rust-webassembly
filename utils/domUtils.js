export const appendStringToBody = (str) => {
  const node = document.createTextNode(str);
  document.body.append(node);
};
