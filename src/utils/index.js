// convert to dolar string
export const formatToCurrency = (val) =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);
