// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
      this.data = data;
      this.next = next || null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  insertFirst(data) {
      this.head = new Node(data, this.getFirst());
  }
  size() {
      let copy = this.head;
      let i = 0;
      while (copy) {
          i++;
          copy = copy.next;
      }
      return i;
  }
  getFirst() {
      return this.head;
  }
  getLast() {
      if (!this.head) {
          return null;
      }
      let copy = this.head;
      while (copy.next) {
          copy = copy.next
      }
      return copy;
  }
  clear() {
      let copy = this.head;
      while (this.head) {
          this.head = this.head.next;
      }
  }
  removeFirst() {
      this.head = this.head.next;
  }

  removeLast() {

      if (!this.head) {
          return;
      }

      if (!this.head.next) {
          this.head = null;
          return;
      }

      let copy1 = this.head;
      let copy2 = this.head.next;
      while (copy2.next) {
          copy1 = copy2;
          copy2 = copy2.next;
      }
      copy1.next = null;
  }
  insertLast(data) {

      let las = this.getLast();
      if (las) {
          las.next = new Node(data);
          return las.next;
      } else {
          this.head = new Node(data);
          return this.head;
      }
  }

  getAt(int) {
      let copy = this.head;
      let i = 0;
      while (copy) {
          if (int == i) {
              return copy;
          }
          copy = copy.next;
          i++;
      }
      return null
  }
  removeAt(int) {
      if (!this.head) {
          return null
      }
      if (int == 0) {
          this.head = this.head.next;
      }
      let copy = this.head;
      let i = 0;
      while (copy) {
          if (i == int - 1) {
              if (copy.next) {
                  copy.next = copy.next.next;
                  return;
              } else {
                  copy.next = null;
                  return;
              }
          }
          copy = copy.next;
          i++;
      }
  }
  insertAt(data, int) {
      if (!this.head) {
          this.head = new Node(data);
          return;
      }
      if (int == 0) {
          this.insertFirst(data);
      }
      let size = this.size();
      if (int <= size) {
          let copy = this.head;
          let copy2 = this.head.next;
          let i = 1;
          while (copy2) {
              if (i === int) {
                  copy.next = new Node(data, copy2);
                  return;
              }
              copy = copy2;
              copy2 = copy2.next;
              i++;
          }

          copy.next = new Node(data, copy2);
      } else if (int > size) {
          this.insertLast(data);
      }
  }

  forEach(func) {
          if (!this.head) {
              return null;
          }
          let copy = this.head;
          while (copy) {
              func(copy);
              copy = copy.next;
          }

      }
      [Symbol.iterator]() {
          let current = this.head;

          return {
              next() {
                  if (current) {
                      const value = current;
                      current = current.next;
                      return { value, done: false };
                  } else {
                      return { done: true };
                  }
              }
          };
      }

}
const list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

list.insertAt('Helloo', 30);
console.log(list.getLast());

module.exports = { Node, LinkedList };
