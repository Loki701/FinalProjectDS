import sys


class MinHeap:
    def __init__(self):
        self.size = 0
        self.heap = [0]
        self.heap[0] = sys.float_info.min

    # Function to swap two nodes of the heap
    def swap(self, first, second):
        (self.heap[first], self.heap[second]) = (
            self.heap[second], self.heap[first])

    # Function to heapify the node at pos
    def HeapifyDown(self, ind):
        largestVal = ind
        leftChild = 2 * largestVal + 1
        rightChild = 2 * largestVal + 2

        if leftChild < self.size and self.heap[leftChild].price < self.heap[largestVal].price:
            largestVal = leftChild
        if rightChild < self.size and self.heap[rightChild] < self.heap[largestVal].price:
            largestVal = rightChild

        if(largestVal != ind):
            temp = self.heap[ind]
            self.heap[ind] = self.heap[largestVal]
            self.heap[largestVal] = temp
            self.HeapifyDown(largestVal)

    # Function to insert a node into the heap
    def insert(self, ele):
        ++self.size
        self.heap[self.size - 1] = ele

        curr = self.size

        while self.heap[curr].price < self.heap[self.parent(curr)].price:
            self.swap(curr, self.parent(curr))
            curr = self.parent(curr)

    # Function to remove and return the minimum
    # element from the heap
    def Remove(self):
        self.heap[0] = self.heap[self.size - 1]
        --self.size
        self.HeapifyDown(0)

    def Peak(self):
        return self.heap[0]
