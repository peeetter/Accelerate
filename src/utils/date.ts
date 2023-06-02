import swedish from "date-fns/locale/sv";
import { format } from "date-fns";

// Returnerar tex "24 oktober"
export const formatDateMonth = (date: string | Date): string =>
  format(new Date(date), "d MMM", {
    locale: swedish,
  });
