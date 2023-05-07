import { format } from "date-fns";

export const DAYS_OF_WEEK: Record<string, string> = {
  today: "hoje",
  sunday: "domingo",
  monday: "segunda",
  tuesday: "terça",
  wednesday: "quarta",
  thursday: "quinta",
  friday: "sexta",
  saturday: "sábado",
};

export const formatDate = (date: Date, formatString: string = "dd/MM") => {
  return format(date, formatString);
};

export const getDayOfWeek = (date: Date) => {
  return format(date, "EEEE");
};

export const formatDateToHours = (date: Date) => {
  let hours: string | number = date.getHours();

  if (hours <= 9) {
    hours = `0${hours}`;
  }

  return `${hours}h`;
};
