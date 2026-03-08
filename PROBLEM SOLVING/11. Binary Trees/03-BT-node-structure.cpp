
// ref for visualization : https://medium.com/@andrewjoliver/the-software-bakers-dozen-stacks-binary-search-trees-f84589d0ed76
#include <iostream>
using namespace std;

// Class representing a Node in the Binary Tree
class Node
{
public:
    int data;    // Stores value of the node
    Node *left;  // Pointer to left child (address of another Node)
    Node *right; // Pointer to right child (address of another Node)

    // Constructor
    Node(int key)
    {
        data = key;      // Assign value
        left = nullptr;  // Initially no left child
        right = nullptr; // Initially no right child
    }
};

// Class handling Binary Tree creation logic
class Solution
{
public:
    /*
        IMPORTANT QUESTION:
        Why return type is Node* and NOT Node?

        Answer:
        - A binary tree is built dynamically in heap memory using 'new'
        - 'new' always returns ADDRESS of memory, not the object itself
        - Root is the entry point of the tree
        - To access entire tree, we must return the ADDRESS of root
        - Hence return type must be Node*
    */
    Node *createBinaryTree()
    {
        /*
            new Node(1)
            - Allocates memory in HEAP
            - Returns address of that memory
            - That address is stored in root (Node*)
        */
        Node *root = new Node(1);

        /*
            root->left stores address of another Node
            Again:
            - new Node(2) returns address
            - left expects Node* (address)
        */
        root->left = new Node(2);

        /*
            Same logic for right child
        */
        root->right = new Node(3);

        /*
            Creating left child of node 3
            root->right gives Node*
            root->right->left stores address of Node(5)
        */
        root->right->left = new Node(5);

        /*
            Returning ADDRESS of root node
            This address represents entire tree
        */
        return root;
    }
};

int main()
{
    Solution solution;

    /*
        root is a POINTER
        It stores ADDRESS of the root node
        Without pointer, tree structure would be lost
    */
    Node *root = solution.createBinaryTree();

    // Accessing data using pointer dereferencing
    cout << "Binary Tree created:" << endl;
    cout << "Root: " << root->data << endl;
    cout << "Left child of root: " << root->left->data << endl;
    cout << "Right child of root: " << root->right->data << endl;

    return 0;
}

/*

## COMPLETE DRY RUN (Step-by-step, memory level)

### Step 1: `main()` starts

```cpp
Solution solution;
```

* `solution` object created on **stack**

---

### Step 2: Call function

```cpp
Node* root = solution.createBinaryTree();
```

Control enters `createBinaryTree()`

---

### Step 3: Create root node

```cpp
Node* root = new Node(1);
```

**Heap memory:**

```
Address 1000:
data = 1
left = nullptr
right = nullptr
```

**Stack:**

```
root → 1000
```

---

### Step 4: Create left child

```cpp
root->left = new Node(2);
```

**Heap memory:**

```
Address 2000:
data = 2
left = nullptr
right = nullptr
```

**Links:**

```
root(1000)->left = 2000
```

---

### Step 5: Create right child

```cpp
root->right = new Node(3);
```

**Heap memory:**

```
Address 3000:
data = 3
left = nullptr
right = nullptr
```

**Links:**

```
root(1000)->right = 3000
```

---

### Step 6: Create left child of node 3

```cpp
root->right->left = new Node(5);
```

**Heap memory:**

```
Address 4000:
data = 5
left = nullptr
right = nullptr
```

**Links:**

```
3000->left = 4000
```

---

### Step 7: Return root

```cpp
return root;
```

Returned value:

```
Address 1000
```

---

### Step 8: Back to `main`

```cpp
Node* root = solution.createBinaryTree();
```

Now `main`’s `root` points to:

```
1000
```

Tree structure in memory:

```
        1(1000)
       /       \
   2(2000)   3(3000)
              /
           5(4000)
```

---

## 🤔 WHY `Node*` IS ABSOLUTELY NECESSARY (deep analysis)

### ❌ If function returned `Node` (wrong)

```cpp
Node createBinaryTree();  // WRONG
```

Problem:

* Tree nodes live in heap
* Returning `Node` copies only ONE node
* Left/right pointers break or point to invalid memory
* Tree structure is LOST

---

### ✅ With `Node*` (correct)

```cpp
Node* createBinaryTree();
```

Why correct:

* Pointer stores address of root
* Address links entire tree
* All children accessible
* Efficient (no copying)
* Standard industry practice

---

### One-line rule to remember

```
If data is created using `new`, you MUST return a pointer.
```
*/