console.log("Hello world");

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    newNode.nextNode = current;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.head ? this.head.value : null;
  }

  tail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return this.head ? current.value : null;
  }

  at(index) {
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === index) return current.value;
      current = current.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;
    while (current.nextNode) {
      if (!current.nextNode.nextNode) {
        current.nextNode = null;
        return;
      }
      current = current.nextNode;
    }
    return current.value;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.value === value) {
        return count;
      }

      current = current.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    let elements = [];
    let current = this.head;
    while (current) {
      elements.push(`( ${current.value} )`);
      current = current.nextNode;
    }

    elements.push(`${current}`);

    return elements.join(" -> ");
  }
}
