//when requiring this module without assign in to a variable it will automatically excused the function as long as its already invoked in the module itself. like this showNumbers()
function showNumbers() {
  const number = 15;
  if (number > 10) {
    console.log("big number");
  } else {
    console.log("small number");
  }
}

showNumbers();
