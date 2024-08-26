export const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1) || "";
};

export const formatDate = (date) => {
  const formattedDate = new Date(date).toDateString().slice(3);
  return formattedDate;
};
