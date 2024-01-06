export default class LinkedList {
    constructor() {
      this.head = null;
      this.listSize = 0;
    }
  
    Node(element) {
      return {
        element,
        next: null,
      };
    }
  
    append(element) {
      let node = this.Node(element);
      let current;
  
      if (this.head === null) this.head = node;
      else {
        current = this.head;
  
        while(current.next) {
          current = current.next
        }
  
        current.next = node;
      }
      this.listSize++
    }
  
    insert(position, element) {
      //Validar el rango
      if (position >= 0 && position <= this.listSize) {
        let node = this.Node(element)
        let current = this.head
        let previous
        let index = 0
  
        //Agregar un elemento al inicio de la lista
        if(position === 0) {
          node.next = current
          this.head = node
        } else {
          //Recorrer la lista hasta la posición indicada
          while(index++ < position) {
            previous = current 
            current = current.next
          }
          node.next = current
          previous.next = node
        }
  
        this.listSize++
        return true
      }
      return false
    }
  
    removeAt(position) {
      // Validar el rango
      if(position > -1 && position < this.listSize) {
        let current = this.head
        let previous
        let index = 0
  
        //Quitamos el primer elemento si posicion es 0
        if(position === 0) {
          this.head = current.next
        } else {
          //Recorremos la lista hasta la posicion indicada
          while(index++ < position) {
            previous = current
            current = current.next
          }
          //Enlazamos el elemento anterior con el next del current (saltamos el elemento para eliminarlo)
          previous.next = current.next
        }
        this.listSize--
        //Retornar el elemento eliminado
        return current.element
      }
      return null
    }
  
    remove(element) {
      let index = this.indexOf(element)
      return this.removeAt(index)
    }
  
    indexOf(element) {
      let current = this.head
      let index = 0
  
      while(current) {
        if (current.element === element) {
          return index
        }
        index++
        current = current.next
      }
      return -1
    }
  
    hasElements() {
      return this.listSize > 0
    }
  
    size() {
      return this.listSize
    }
  
    print() {
      let current = this.head
      let string = ''
      let index = 0
  
      while(current) {
        string += `[${index}]${current.element}${current.next ? '=>' : ''}`
        current = current.next
        index++
      }
      return string
    }
    
  }
  