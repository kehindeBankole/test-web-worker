const slow = document.getElementById("slow");
const hello = document.getElementById("hello");

slow.addEventListener("click", slowOp);
hello.addEventListener("click", helloOp);

function slowOp() {
  const worker = new Worker("worker.js");
  worker.postMessage(10)
  worker.addEventListener("message",(e)=>{
    console.log(e.data)
  })
}

function helloOp() {
  console.log("hello");
}
