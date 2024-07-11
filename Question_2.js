function evaluateExpression(expression) {
    return Function('"use strict"; return (' + expression + ')')();
}
console.log(evaluateExpression("2+3-1"));
