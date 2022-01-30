export const connectClassnames = (...classnames) => {
  const formattedClassnames = classnames.filter(Boolean);
  return formattedClassnames.join(' ');
};
