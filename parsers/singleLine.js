const target = text => {
  const result = text
    .trim()
    .split(",")
    .map(item => item.replace(/”/g, "").replace(/“/g, ""));
  const result2 = result.map(
    item => `[${item.replace(/”/g, "").replace(/“/g, "")}]`
  );
  if (text.length < 2) return "";
  return result.length === 7
    ? `[${result[0]}, ${result[1]}][${result[2]}][${result[3]}][${result[4]}][${
        result[5]
      }, ${result[6]}]`
    : result2.join();
};

module.exports = target;
