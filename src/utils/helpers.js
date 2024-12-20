import { format, parseISO } from "date-fns";

export const formatDate = (dateString) => {
  try {
    if (!dateString) throw new Error("Invalid date string");
    const dateObject = parseISO(dateString);
    return format(dateObject, "MMM dd, yy");
  } catch (error) {
    console.error("Date formatting error:", error);
    return "Invalid Date";
  }
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const calculateBalancesReversed = (
  transactions,
  initialBalance = 0,
  newPagination
) => {
  let balance = initialBalance;

  const reversedTransactions = [...transactions].reverse();

  const withBalances = reversedTransactions.map((transaction) => {
    balance +=
      transaction.is_inflow === 1
        ? Number(transaction.amount)
        : Number(-transaction.amount);
    return { ...transaction, balance };
  });

  const from = newPagination.from;
  const to = newPagination.to;
  return withBalances.reverse().slice(from, to);
};
