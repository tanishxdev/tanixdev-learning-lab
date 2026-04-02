# creating a tuple - ordered, immutable collection, allows duplicate values

tubles = (1, 2, 3, 4, 5)
mixed = (1, "two", 3.0, True)
nested = (1, (2, 3), (4, (5, 6)))

# accessing tuple elements using indexing (VERY IMPORTANT)
t = (10, 20, 30, 40, 50) # index: 0    1    2    3    4
print(t[0])    # Output: 10
print(t[2])    # Output: 30
# Negative Indexing
print(t[-1])   # Output: 50
print(t[-3])   # Output: 30

# Slicing Tuples (Very Important)
print(t[1:4])  # Output: (20, 30, 40)
print(t[:3])   # Output: (10, 20, 30)
print(t[2:])   # Output: (30, 40, 50)

# tubles are immutable
# t[0] = 100  # This will raise a TypeError

# but it contains mutable objects
t2 = (1, 2, [3, 4], 5)
t2[2][0] = 30
print(t2)  # Output: (1, 2, [30, 4], 5)

# packing and unpacking
t3 = 1, 2, 3  # packing
a, b, c = t3  # unpacking

print(a)  # Output: 1
print(b)  # Output: 2
print(c)  # Output: 3

# common methods
t4 = (5, 10, 15, 10, 20, 10)
count_10 = t4.count(10)  # Count occurrences of 10
print(count_10)  # Output: 3

