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

// task1()
//   .then((resolve) => {
//     console.log(resolve);
//     return task2();
//   })
//   .then((resolve) => {
//     console.log(resolve);
//     return task3();
//   })
//   .then((resolve) => {
//     console.log(resolve);
//     console.log("ALL DONE");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async/await
async function allpromise() {
  const response1 = await task1();
  console.log(response1);
  const response2 = await task2();
  console.log(response2);
  const response3 = await task3();
  console.log(response3);
  console.log("ALL DONE");
}
allpromise();
