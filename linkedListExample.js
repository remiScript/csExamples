class LinkedList {
    constructor(){
        //at first, this list is empty, no data, head is null
        this.head = null;
    }
    //now, we need a method for adding data to this linked list
    append(data){
        const newNode = new Node(data);
        //we want to check if the list has a head, or this.head = null
        if(!this.head){
            //and if there isn't a head, make the newNode we just created be the head
            this.head = newNode;
            return;
        }
        //this is how we ensure the newNode goes onto the end of the list
        //we create a variable called "current" which represents a position in an iterative list
        let current = this.head;
        //while there's something after the node we're currently on, meaning "while we aren't the last node in the list"
        while (current.next !== null){
            //set current to the next node, which will cycle until we are, in fact, the last node in the list
            current = current.next;
        }
        //once we've broken out of that loop, and are on the last item, set the next item to newNode;
        current.next = newNode;
    }
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    size(){
        let count = 0;
        //first we need to know if theres even a head node
        if(this.head !== null){
            //cool, now we'll call that the "current" node
            let current = this.head;
            //as long as there is a "current" node
            while(current){
                //add one to the counter and move onto the next
                count++;
                current = current.next;
            }
        }
        console.log('size = ' + count)
        return count;
    }
    findHeadNode(){
        if(this.head == null){
            console.log('yarr, they took me head in the warrr');
            return null;
        } else{
            console.log('head is: ' + this.head.data);
            return this.head.data;
        }
    }
    findTailNode(){
        if(this.head !== null){
            //cool, now we'll call that the "current" node
            let current = this.head;
            //as long as there is a "current" node
            while(current.next){
                //move onto the next
                current = current.next;
            }
            console.log('last is ' + current.data)
            return current.data;
        } else {
            console.log('empty list')
        }
    }
    findNodeAtIndex(x){
        if(this.head !== null){
            let index = 0;
            let current = this.head;
            while(index < x){
                current = current.next;
                index++;
            }
            console.log('at index ' + x + ' node data is: ' + current.data)
        }
    }
    removeTailNode(){
        if(this.head !== null){
            //cool, now we'll call that the "current" node
            let current = this.head;
            let previous = null;
            //as long as there is a "current" node
            while(current.next !== null){
                previous = current;
                //move onto the next
                current = current.next;
            }
            current = null;
            previous.next = null;
            return this;
        } else {
            console.log('empty list')
        }


    }
    listContains(x){
        //check for a list with somethin in it
        if(this.head !==null){
            //current nose is head node
            let current = this.head;
            //as long as they don't match, keep moving forward and check for a null value, that means we're at the end of the list
            while(current.data !== x){
                current = current.next;
                if(current == null){
                    return false;
                }
            } return true;
        }
        //otherwise tell the user the list is empty
        else {
            console.log('empty list');
            return;
        }
    }
    findIndexOf(x){
        if(this.head !== null){
            let current = this.head;
            let index = 0;
            while(current.data !== x){
                current = current.next;
                index++;
                if(current == null){
                    return null;
                }
            } return index;
        }
    }
    printList(){
        if(this.head !== null){
            let current = this.head;
            let outputString = '';
            while(current !== null){
                outputString+= `(${current.data}) -> `
                console.log(current.data)
                current = current.next;
            }
            outputString+= `(null)`
            console.log(outputString)
        }
    }
}


class Node {
    constructor(data){
        //the data argument, passed in here, is going to be the value for the data key on this object
        this.data = data;
        //next is null, by default, when we create the new node
        this.next = null;
    }


}


//example uses:
let myList = new LinkedList;
myList.append(55);
myList.append(10);
myList.append(11);
myList.append(12);
myList.append(8);
myList.append(119);
myList.append(86);


console.log(myList);
myList.size();
