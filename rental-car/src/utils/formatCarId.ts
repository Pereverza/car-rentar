export const formatCarId = (id: string): string => {
  if (id.length > 6) {
    return `ID: ${id.slice(0, 6)}...`; // якщо ID довгий — обрізаємо і додаємо ...
  } else {
    return `ID: ${id}`; // якщо короткий — показуємо як є
  }
};
