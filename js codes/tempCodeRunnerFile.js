function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ghar jana h ");
    }, 3000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("khana khaya");
    }, 1000);
  });
}
function task3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("sona h");
    }, 500);
  });
}
