// resolve has a direct connection with then
// reject has a direct connectiono with catch

// promise 1 -> how to create a promise

const promiseOne = new Promise((resolve, reject) => {
  // resolve and reject
  // async task
  setTimeout(() => {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("promise consumed");
});

// promise 2 -> there is no need of hold any variable

new Promise((resolve, reject) => {
  // async task
  setTimeout(() => {
    console.log("async task 2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise 2 consumed");
});

// promise 3 -> how data is send -> usually the data is an object

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      userName: "alien",
      email: "alienX@gmail.com",
    });
  }, 1000);
});

promise3.then((user) => {
  // then accept a callback and the data is holded in the parameter
  console.log(user);
});

// promise 4 -> handling errors

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 2);
    // let rn = 1;
    if (rn == 0) {
      reject("error: something went wrong");
    } else {
      resolve({
        userName: "anshul122",
        email: "anshulp122@gmail.com",
      });
    }
  }, 1000);
});

// promise4
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// then chaining

promise4
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log("i am anshul pandey");
