var str = "";

function evaluate() { //evaluates the string that has been built by the calculator function
  var state = "START";
  var first = true;
  var operator;
  var num1;
  var num2;
  var result;
  for (int x = 0; x < str.length; x++) {
    var char = str.charAt(x);
    if (char == "\0") {
      return result;
    }
    switch (state) {
      case "START":
        if (parseInt(char) == NaN) {
          state = "ERROR";
        } else {
          state = "NUM1";
        }
        break;
      case "NUM1":
        if (parseInt())
    }
  }
}

function updateDisplay() {
  document.getElementById("display").value = str;
}

function input(input) { //accepts input to be evaluated/displayed
  str += String(input);
  updateDisplay();
}

function clearDisplay() { //clears the display and the input string
  str = "";
  updateDisplay();
}
