# Function to swap two nodes of the heap


def swap(list, first, second):
    (list[first], list[second]) = (
        list[second], list[first])

# Function to heapify the node at pos


def Heapify(list, size, ind):
    lowestVal = ind
    leftChild = 2 * lowestVal + 1
    rightChild = 2 * lowestVal + 2

    if leftChild < size and list[leftChild].price < list[lowestVal].price:
        lowestVal = leftChild
    if rightChild < size and list[rightChild].price < list[lowestVal].price:
        lowestVal = rightChild

    if(lowestVal != ind):
        temp = list[ind]
        list[ind] = list[lowestVal]
        list[lowestVal] = temp
        Heapify(list, size, lowestVal)


def Print(list):
    print(list[0].price)
    for i in range(0, len(list)):
        print(f"Parent: {list[i].price}")
