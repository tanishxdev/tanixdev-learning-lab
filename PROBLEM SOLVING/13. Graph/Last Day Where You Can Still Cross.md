# PROBLEM (Original Statement)

You are given:

- `row` and `col` → dimensions of a grid.
- A list `cells`, where `cells[i] = [ri, ci]`.

On day `i` (1-indexed), the cell `(ri, ci)` becomes flooded (water).

Initially:

- All cells are land.

Each day:

- One new cell becomes water.

Return the **last day** when it is still possible to walk from the **top row to the bottom row**, moving only:

- Up
- Down
- Left
- Right

And only through **land cells**.

---

## Topics / Patterns

**Topics:**

- Binary Search
- Graph Traversal (BFS / DFS)
- Disjoint Set Union (Advanced solution)

**Patterns:**

1. Binary Search on Answer
   Because:
   - If crossing is possible on day D,
   - Then it is also possible for any day < D.
   - Monotonic property.

2. Grid Traversal
   Check if path exists from top to bottom.

3. Reverse Simulation + DSU (Optimal trick)

---

## BREAKDOWN PROBLEM

We have a grid.

Each day:

- One land cell becomes water.

We must find:

- The last day where a path exists from top row to bottom row.

Important:

Path must:

- Start from any cell in first row
- End at any cell in last row
- Move only on land

---

## CONSTRAINT UNDERSTANDING

Typical constraints:

- 1 ≤ row, col ≤ 200
- 1 ≤ cells.length ≤ row \* col

Worst-case grid size:
200 × 200 = 40,000 cells

Total days = 40,000

If we try to simulate each day fully:

- For each day → BFS (40,000)
- Total → 40,000 × 40,000 = 1.6 billion → too slow.

We need better.

---

# BRUTE FORCE APPROACH

## First Thought Intuition

Simulate day by day:

For each day:

1. Mark that cell as water.
2. Run BFS from top row.
3. Check if bottom reachable.
4. Stop when impossible.

Return previous day.

Feels natural.

---

## Thought Process (Step-wise)

1. Create grid initially all land.
2. For day = 1 to totalDays:
   - Flood the cell.
   - Run BFS from all top-row land cells.
   - If bottom reachable → continue.
   - Else → return day - 1.

---

## Pseudocode

```
initialize grid as land

for day in 1 to N:
    flood cells[day]

    if not canCross(grid):
        return day - 1

return N
```

---

## Time Complexity

Each day BFS = O(row \* col)

Total days = row \* col

Total:
O((row\*col)²)

Too slow.

---

## Does This Approach Fail?

YES.

Because:
40,000² = 1.6B operations.

We need optimization.

---

# BETTER APPROACH

Now observe something critical.

Monotonic Property:

If you can cross on day D,
You can also cross on day D-1.

Because earlier days have more land.

Meaning:

Feasibility is monotonic decreasing.

So we can:

Binary Search on day.

---

# OPTIMAL APPROACH (Binary Search + BFS)

## First Thought Intuition

Instead of simulating every day:

Binary search the last valid day.

For a given day:

- Build grid up to that day.
- Check if crossing possible.

---

## Thought Process (Step-wise)

1. low = 1
2. high = totalDays
3. While low <= high:
   - mid = (low + high) / 2
   - Build grid with first mid cells flooded.
   - Run BFS.
   - If path exists:
     → try later days (low = mid + 1)
   - Else:
     → try earlier days (high = mid - 1)

Return high.

---

## Checking Feasibility (Key Part)

To check crossing:

1. Initialize visited array.
2. Push all land cells in top row into queue.
3. BFS:
   - Move 4 directions.

4. If reach bottom row → return true.

---

## Pseudocode

```
function canCross(day):
    create grid
    mark first 'day' cells as water

    queue = all top row land cells

    while queue not empty:
        cell = pop
        if cell in bottom row:
            return true

        explore neighbors

    return false
```

---

## CODE

### C++

#### V1 (Only Required Function)

```cpp
bool canCross(int row, int col, vector<vector<int>>& cells, int day) {

    vector<vector<int>> grid(row, vector<int>(col, 0));

    // Mark flooded cells
    for (int i = 0; i < day; i++) {
        grid[cells[i][0] - 1][cells[i][1] - 1] = 1;
    }

    queue<pair<int,int>> q;
    vector<vector<int>> visited(row, vector<int>(col, 0));

    // Add top row land cells
    for (int c = 0; c < col; c++) {
        if (grid[0][c] == 0) {
            q.push({0, c});
            visited[0][c] = 1;
        }
    }

    int directions[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};

    while (!q.empty()) {

        auto [r, c] = q.front();
        q.pop();

        if (r == row - 1)
            return true;

        for (auto& d : directions) {

            int nr = r + d[0];
            int nc = c + d[1];

            if (nr >= 0 && nr < row &&
                nc >= 0 && nc < col &&
                grid[nr][nc] == 0 &&
                !visited[nr][nc]) {

                visited[nr][nc] = 1;
                q.push({nr, nc});
            }
        }
    }

    return false;
}

int latestDayToCross(int row, int col, vector<vector<int>>& cells) {

    int low = 1;
    int high = cells.size();
    int ans = 0;

    while (low <= high) {

        int mid = low + (high - low) / 2;

        if (canCross(row, col, cells, mid)) {
            ans = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return ans;
}
```

---

## Time and Space Complexity

Binary search: log(N)

Each BFS: O(row \* col)

Total:
O((row*col) * log(row\*col))

≈ 40,000 \* log(40,000)

Efficient.

Space:
O(row\*col)

---

# EVEN MORE OPTIMAL APPROACH (DSU + Reverse Simulation)

Now comes advanced trick.

Instead of forward simulation:

Think reverse.

At last day:
All cells water.

We reverse days:
Convert water → land.

And union adjacent land cells.

Goal:
Check when top and bottom become connected.

---

## Key Insight

We create:

- Virtual top node
- Virtual bottom node

When:

- Any cell in top row becomes land → connect to top node.
- Any cell in bottom row becomes land → connect to bottom node.

As soon as:
top and bottom nodes connected

That day (in reverse) gives answer.

---

## Why Reverse Helps?

Because:
Instead of removing edges,
We add edges (which DSU handles easily).

DSU handles dynamic connectivity efficiently.

---

## Time Complexity

O(N α(N))

Almost linear.

This is the most optimal.

---

# Pattern Recognition Mindset

When you see:

- “Last day”
- “Maximum day such that condition holds”
- Monotonic feasibility

Think:
Binary Search on Answer.

When you see:

- Dynamic connectivity
- Cells turning on/off

Think:
Reverse + DSU trick.

---

This problem teaches:

Level 1 → BFS
Level 2 → Binary Search + BFS
Level 3 → Reverse Simulation + DSU

---
