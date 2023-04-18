export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  return formattedDate;
}

export function unformatDate(dateString: string): string {
  const dateParts = dateString.split("/");
  const dateObject = new Date(
    parseInt(dateParts[2]),
    parseInt(dateParts[1]) - 1,
    parseInt(dateParts[0])
  );

  const formattedDate = dateObject.toISOString().split("T")[0];

  return formattedDate;
}
