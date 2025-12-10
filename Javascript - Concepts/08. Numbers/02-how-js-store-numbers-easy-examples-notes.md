

# **0. FINAL TRUTH (Simplest Form) — JavaScript Numbers**

JavaScript **sirf ek hi type ka number use karta hai**:

**64-bit floating point (IEEE-754 Double Precision)**

Matlab:

* JS mein **int**, **float**, **long**, **short** — kuch nahi.
* Sab kuch ek hi format mein store hota hai.
* Har number = sign + exponent + mantissa.

Bas.

Ab chalo step-by-step samjhate hain.

---

# **1. JS Numbers = ALWAYS 64-bit Floating Point (IEEE-754)**

Aap jab JS mein likhte ho:

```js
let x = 5;
let y = 5.7;
let z = -12;
```

Computer inko **binary floating point** form mein store karta hai, chahe wo integer ho ya decimal.

Isliye JS mein yeh issues aate hain:

```js
0.1 + 0.2 = 0.30000000000000004
```

Because **sab kuch binary floating point** hai.

Yeh fundamental rule clear hona chahiye.

---

# **2. Lekin fir GFG integer storage kyu sikha raha hai?**

Because JS engine **internally** kabhi-kabhi integer operations optimize kar deta hai:

* Agar number integer ho → internally **two’s complement** use hota hai
* Agar floating ho → IEEE floating point use hota hai

Lekin **developer ke liye, dono SAME hi behave karte hain**.

Isliye aapko integer storage sirf **conceptually** samajhna hota hai.

Chalo simplest version mein samjhaata hoon.

---

# **3. Integer Storage — simple se simple explanation**

### 3.1 Unsigned integers

Binary numbers bas **0 aur 1 ka sequence**:

4 → `100`
78 → `1001110`

Yeh bilkul simple storage.

### 3.2 Problem — negative number kaise store hoga?

Binary mein sirf 0 aur 1 hote hain, to:

`-6` ko kaise represent karein?

Iske liye methods banaye gaye:

1. Signed Magnitude
2. One’s Complement
3. Two’s Complement (FINAL BEST METHOD)

---

# **4. Signed Magnitude (Simple idea)**

Leftmost bit = sign bit

* `0` → positive
* `1` → negative

Example:

```
+6 = 000110
-6 = 100110
```

### Problem:

Addition fail ho jaata hai.

```
100110 (-6)
+000110 (+6)
----------------
101100  // 44 (wrong)
```

Isliye yeh method “reject” ho gaya.

---

# **5. One’s Complement (Thoda better)**

Negative number store karne ke liye:

* All bits flip → 0 becomes 1, 1 becomes 0

Example:
Binary: `11001001`
One’s comp: `00110110`

Phir negative numbers store ho jaate hain.

### Problem:

Zero do tareh se store hota hai (+0 & −0), arithmetic still problematic.

Example:

```
3  → 000011
-2 → 111101  (one's complement)
-----------------
000000      // +0  WRONG! Expected: 1
```

Isliye yeh bhi reject.

---

# **6. Two’s Complement (Final real-world system)**

Steps:

1. One’s complement lo
2. +1 add karo

Example: 24 → `011000`

```
One's = 100111
Two's = 100111 + 1 = 101000
```

### Why this is best?

* Addition/subtraction correctly work
* Only 1 representation of zero
* Fastest hardware-level operations

Isi liye **modern CPUs + JavaScript engines** integers ko **two’s complement** mein handle kar lete hain.

---

# **7. JavaScript integers summary (beginners ke liye)**

1. JS mein har number floating-point hota hai
2. Par agar number integer hai, JS engine internally two’s complement math use karta hai
3. Aapko difference kabhi dikhega hi nahi — JS automatically handle karta hai

---

# **8. Now the main part: Floating Point Storage (IEEE-754)**

Yeh sabse important hai.

Har floating number 3 parts mein store hota hai:

```
1) Sign bit (1 bit)
2) Exponent (11 bits)
3) Mantissa / Fraction (52 bits)
```

Total = 64 bits.

Example:

`101.101₂` ko convert karte hain.

Normalize form:

```
101.101 → 1.01101 × 2²
```

So:

* Sign = 0 (positive)
* Exponent = 2 (with bias added)
* Mantissa = 01101

---

# **9. Bias — simplest explanation**

Exponent negative ho sakti hai.

Binary negative exponent store karna mushkil hota hai → isliye bias use hota hai.

Formula:

```
bias = 2^(bits-1) - 1
```

64-bit floating point → 11 bits exponent

```
bias = 2^10 - 1 = 1023
```

So:

```
Stored exponent = exponent + bias
```

---

# **10. Why JS numbers are inaccurate? (very important)**

Because **binary floating point** decimal numbers ko exact represent nahi kar sakta.

Example:

```
0.1 binary mein repeating fraction ban jaata hai
```

Isliye:

```js
0.1 + 0.2
```

gives:

```
0.30000000000000004
```

---

# **11. Associativity problem**

```js
(0.1 + 0.2) + 0.3
0.1 + (0.2 + 0.3)
```

Output:

```
0.6000000000000001
0.6
```

Because rounding at each step is slightly different.

---

# **12. FINAL SUMMARY (Ultra simple)**

If you want to remember the whole topic in **one page**, here it is:

1. JS uses **64-bit floating point format for ALL numbers**
2. Integers internally two’s complement operations use kar sakte hain
3. Floating numbers = sign + exponent + mantissa
4. Bias exponent store karne ke liye use hota hai
5. Decimal fractions = exact store nahi hote → precision errors
6. Floating arithmetic is approximate → associativity fails
7. Irrational numbers exact store nahi hote

---
