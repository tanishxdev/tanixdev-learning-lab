#include <iostream>
using namespace std;

// Node structure
class Node
{
public:
    int data;
    Node *next;

    Node(int val)
    {
        data = val;
        next = nullptr;
    }
};

// Function to delete K-th node (1-based)
Node *deleteK(Node *head, int K)
{

    // Case 1: Empty list
    if (head == nullptr)
    {
        return head;
    }

    // Case 2: Deleting head node
    if (K == 1)
    {
        Node *temp = head; // store old head
        head = head->next; // move head
        delete temp;       // free memory
        return head;
    }

    Node *temp = head;    // current node
    Node *prev = nullptr; // previous node
    int count = 0;

    // Traverse list
    while (temp != nullptr)
    {
        count++;

        // When K-th node is found
        if (count == K)
        {

            // prev exists because K != 1
            prev->next = temp->next; // bypass K-th node
            delete temp;             // delete K-th node
            break;
        }

        prev = temp;       // move prev
        temp = temp->next; // move temp
    }

    // If K > length, loop ends naturally and list is unchanged
    return head;
}

// Helper function to print list
void traverse(Node *head)
{
    Node *temp = head;
    while (temp != nullptr)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main()
{
    /*
        Initial list:
        10 -> 20 -> 30 -> 40 -> NULL
    */

    Node *head = new Node(10);
    head->next = new Node(20);
    head->next->next = new Node(30);
    head->next->next->next = new Node(40);

    int K = 3;

    head = deleteK(head, K);

    traverse(head);

    return 0;
}

/*
DRY RUN (K = 3)

Initial Linked List:
head → 10 → 20 → 30 → 40 → NULL

--------------------------------------------------
Call: head = deleteK(head, 3)
--------------------------------------------------

Inside deleteK(head, K):

K = 3, so we do NOT delete the head.

Initialize:
temp = head → 10 → 20 → 30 → 40 → NULL
prev = NULL
count = 0

------------------------------------
Iteration 1:
------------------------------------
count = 1
temp → 10
count != K

Move pointers:
prev = 10
temp = 20

------------------------------------
Iteration 2:
------------------------------------
count = 2
temp → 20
count != K

Move pointers:
prev = 20
temp = 30

------------------------------------
Iteration 3:
------------------------------------
count = 3
temp → 30  (this is the K-th node)

Now delete it:

prev → 20
temp → 30
temp->next → 40

prev->next = temp->next
So:
20 → 40

delete temp
Node containing 30 is removed from memory.

Linked List becomes:
head → 10 → 20 → 40 → NULL

Loop breaks.

--------------------------------------------------
Back in main:
--------------------------------------------------

head → 10 → 20 → 40 → NULL

--------------------------------------------------
Call: traverse(head)
--------------------------------------------------

temp → 10 → 20 → 40 → NULL
print 10
print 20
print 40
stop

Output:
10 20 40
*/
