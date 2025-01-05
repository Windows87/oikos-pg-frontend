const formatBirthday = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("pt-BR", { month: "long" });
  return `${day}/${month.charAt(0).toUpperCase() + month.slice(1).slice(0, 2)}`;
};

export default formatBirthday;
