const greeter = (person: string) => {
  return `Hello, ${person}!`;
};

function testGreeter() {
  const user = "Grant";
  Logger.log(greeter(user));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function main() {
  testGreeter();
}
