function uniqueElements(A1, A2) {
  const uniqueA1 = A1.filter((element) => !A2.includes(element));
  const uniqueA2 = A2.filter((element) => !A1.includes(element));

  return [...uniqueA1, ...uniqueA2];
}

const A1 = [1, 2, "a"];
const A2 = [1, 3, "b"];
const output = uniqueElements(A1, A2);
console.log(output);
