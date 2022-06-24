output(x);

function a() {
  const y = 2;
  output(z);
}

function b() {
  const z = 3;
  output(y);
}

a();
b();

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

