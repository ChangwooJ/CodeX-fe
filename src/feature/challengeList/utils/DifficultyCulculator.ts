export const DifficultyCulculator = (difficulty: number) => {
  const colors: Record<number, string> = {
    1: "#1EFF00",
    2: "#0070DD",
    3: "#A335EE",
    4: "#FF8000",
    5: "#4B0082",
  };
  
  return colors[difficulty] || "gray";
};