function printName(callBack) {
  setTimeout(() => {
    console.log("Tejas");
    callBack();
  }, 2000);
}

function PrintsurName(params) {
  console.log("Chaudhari");
}

printName(PrintsurName);
// PrintsurName();
