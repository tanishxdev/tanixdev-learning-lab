## Concept: Divisor Symmetry

**Divisor symmetry** ka simple idea hai:

> Agar koi number `i`, number `n` ko divide karta hai,
> to ek **paired divisor** bhi hota hai: `n / i`.

Matlab **divisors always pair me aate hain**.

---

## Example: n = 36

Agar hum 36 ke divisors check karein:

| i (first divisor) | paired divisor = n / i |
| ----------------- | ---------------------- |
| 1                 | 36                     |
| 2                 | 18                     |
| 3                 | 12                     |
| 4                 | 9                      |
| 6                 | 6                      |

Pairs:

```
1 × 36
2 × 18
3 × 12
4 × 9
6 × 6
```

Yaha notice karo:

```
1 ka pair 36
2 ka pair 18
3 ka pair 12
4 ka pair 9
6 ka pair 6
```

Isko hi **Divisor Symmetry** bolte hain.

---

# Important Observation

Divisors **mirror pattern** me aate hain.

Agar hum list karein:

```
1  2  3  4  6  9  12  18  36
```

Middle element ke around symmetry hai.

```
1 ↔ 36
2 ↔ 18
3 ↔ 12
4 ↔ 9
6 ↔ 6
```

---

# Biggest Insight

Agar `i` divisor hai:

```
n % i == 0
```

to automatically ek aur divisor milta hai:

```
n / i
```

Example:

```
36 % 3 == 0
```

To:

```
3 divisor hai
36 / 3 = 12 bhi divisor hai
```

Isliye **do divisors ek saath milte hain**.

---

# Isse kya benefit?

Agar brute force karein:

```
1 → n tak check
```

Time Complexity:

```
O(n)
```

But symmetry use karke:

```
1 → √n tak check
```

Kyuki **√n ke baad sirf mirrored divisors aate hain**.

Example:

```
√36 = 6
```

Isliye sirf check karna hai:

```
1 2 3 4 5 6
```

Aur pairs automatically mil jayenge.

---

# Visual Understanding

```
Number = 36

Left side divisors     Right side divisors

1  ------------------- 36
2  ------------------- 18
3  ------------------- 12
4  ------------------- 9
6  ------------------- 6
```

Middle point:

```
√36 = 6
```

Yaha symmetry meet karti hai.

---

# Real Thinking (DSA Mindset)

When you see:

- **Divisors**
- **Factor counting**
- **Perfect number**
- **Prime check**
- **GCD / factor problems**

Immediately think:

```
Divisors come in pairs
```

So check only:

```
1 → √n
```

---

# Small Example

Number = 20

Check till:

```
√20 ≈ 4
```

Check:

```
1 → pair = 20
2 → pair = 10
3 → not divisor
4 → pair = 5
```

All divisors:

```
1 2 4 5 10 20
```

---

# One Line Memory Trick

```
If i divides n,
then (n / i) is also a divisor.
```

---
