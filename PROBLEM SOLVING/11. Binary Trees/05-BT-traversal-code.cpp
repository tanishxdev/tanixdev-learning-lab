#include <bits/stdc++.h>
using namespace std;

/*
    =========================
    NODE DEFINITION
    =========================
    Each node contains:
    - data  : value of node
    - left  : pointer to left child
    - right : pointer to right child
*/
class Node
{
public:
  int data;
  Node *left;
  Node *right;

  // Constructor to initialize node
  Node(int value)
  {
    data = value;    // store node value
    left = nullptr;  // initially no left child
    right = nullptr; // initially no right child
  }
};

/*
    =========================
    TREE CREATION + TRAVERSALS
    =========================
*/
class Solution
{
public:
  /*
      Create a simple binary tree

              1
             / \
            2   3
           / \
          4   5
  */
  Node *createTree()
  {
    // Create root node
    Node *root = new Node(1);

    // Create children
    root->left = new Node(2);
    root->right = new Node(3);

    root->left->left = new Node(4);
    root->left->right = new Node(5);

    // Return root address (entry point of tree)
    return root;
  }

  /*
      =========================
      PREORDER TRAVERSAL
      Order: Root -> Left -> Right
      =========================
  */
  void preorder(Node *root)
  {
    // Base case: if node is null, stop
    if (root == nullptr)
      return;

    // Step 1: Visit root first
    cout << root->data << " ";

    // Step 2: Traverse left subtree
    preorder(root->left);

    // Step 3: Traverse right subtree
    preorder(root->right);
  }

  /*
      =========================
      INORDER TRAVERSAL
      Order: Left -> Root -> Right
      =========================
  */
  void inorder(Node *root)
  {
    // Base case
    if (root == nullptr)
      return;

    // Step 1: Traverse left subtree
    inorder(root->left);

    // Step 2: Visit root
    cout << root->data << " ";

    // Step 3: Traverse right subtree
    inorder(root->right);
  }

  /*
      =========================
      POSTORDER TRAVERSAL
      Order: Left -> Right -> Root
      =========================
  */
  void postorder(Node *root)
  {
    // Base case
    if (root == nullptr)
      return;

    // Step 1: Traverse left subtree
    postorder(root->left);

    // Step 2: Traverse right subtree
    postorder(root->right);

    // Step 3: Visit root
    cout << root->data << " ";
  }

  /*
      =========================
      BFS / LEVEL ORDER TRAVERSAL
      Uses Queue (FIFO)
      =========================
  */
  void bfs(Node *root)
  {
    // If tree is empty
    if (root == nullptr)
      return;

    // Queue to store nodes level-wise
    queue<Node *> q;

    // Push root node first
    q.push(root);

    // Process until queue becomes empty
    while (!q.empty())
    {
      // Get front node of queue
      Node *curr = q.front();
      q.pop();

      // Visit current node
      cout << curr->data << " ";

      // Push left child if exists
      if (curr->left != nullptr)
        q.push(curr->left);

      // Push right child if exists
      if (curr->right != nullptr)
        q.push(curr->right);
    }
  }
};

int main()
{
  Solution solution;

  // Create binary tree
  Node *root = solution.createTree();

  /*
      Tree structure:

              1
             / \
            2   3
           / \
          4   5
  */

  // Preorder traversal
  cout << "Preorder: ";
  solution.preorder(root);
  cout << endl;

  // Inorder traversal
  cout << "Inorder: ";
  solution.inorder(root);
  cout << endl;

  // Postorder traversal
  cout << "Postorder: ";
  solution.postorder(root);
  cout << endl;

  // BFS traversal
  cout << "BFS (Level Order): ";
  solution.bfs(root);
  cout << endl;

  return 0;
}

// Time Complexity Analysis:

// Preorder   → TC: O(n) | SC: O(h)   (recursion stack, worst O(n), best O(log n))
// Inorder    → TC: O(n) | SC: O(h)   (recursion stack, worst O(n), best O(log n))
// Postorder  → TC: O(n) | SC: O(h)   (recursion stack, worst O(n), best O(log n))
// BFS        → TC: O(n) | SC: O(w)   (queue size = max width, worst O(n))

// Mental Model (one-line each)

// Preorder  -> root first
// WHY:
// Root is processed before children, so while copying the tree,
// we create the node first, then attach left and right subtrees
// in the same structure.

// Inorder   -> sorted order in BST
// WHY:
// In BST, left subtree contains smaller values and right contains larger.
// Inorder visits: Left -> Root -> Right,
// which naturally prints values in ascending (sorted) order.

// Postorder -> delete tree safely
// WHY:
// Children are processed before parent,
// so we delete left and right subtrees first,
// then delete the root, avoiding dangling pointers.

// BFS       -> level by level
// WHY:
// BFS uses a queue and visits nodes level-wise,
// so the first time we reach a node is via the shortest path.
// Also processes all nodes of one level together,
// which helps in width / level-based problems.
