class StringBuilder {
  #value;
  getValue() {
    return this.#value;
  }

  padEnd() {}
  padStart() {}
  padBoth() {}
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
