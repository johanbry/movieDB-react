export const minutesToHours = (minutes) => {
  const remaining_minutes = minutes % 60;
  const hours = (minutes - remaining_minutes) / 60;
  return `${hours}h ${remaining_minutes}m`;
};

export const roundToOneDec = (num) => {
  return Math.round(num * 10) / 10;
};
