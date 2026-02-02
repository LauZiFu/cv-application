const camelToTitleCase = (str: string) => {
  return (
    str.slice(0, 1).toUpperCase() +
    str.slice(1).replace(/[A-Z]/g, (letter) => ` ${letter}`)
  );
};

export { camelToTitleCase };
