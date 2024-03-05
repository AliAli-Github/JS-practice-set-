let value = 0;
document.getElementById("increment").onclick = () => {
    value++;
    document.getElementById("number").innerHTML = value;
}
document.getElementById("decrement").onclick = () => {
    if (value > 0) {
        value--;
        document.getElementById("number").innerHTML = value;
    }
}