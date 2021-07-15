export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const generateKey = (pre: string) => {
  return `${pre.toLowerCase()}_${ new Date().getTime() }`;
}