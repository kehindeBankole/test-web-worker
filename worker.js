// for (let x = 0; x < 5000000000; x++) {
//   1 + 2;
// }
addEventListener("message", async (event) => {
  console.log(event.data);
  postMessage(event.data * 100000000);
});
console.log("slow done");
