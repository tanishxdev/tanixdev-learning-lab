# set - unordered, mutable, no duplicate elements

# creating sets
empty_set = set()
num_set = {1, 2, 3, 4, 5}
mixed_set = {1, "two", 3.0, True}
nested_set = {1, (2, 3), (4, 5)}  # sets can contain immutable objects like tuples

# accessing set elements - sets are unordered, so no indexing or slicing
num_set.add(6)
print(num_set)  # Output: {1, 2, 3, 4, 5, 6}  

num_set.remove(3) # Remove element 3 from the set, error if not found. better to use discard to avoid error
print(num_set)  # Output: {1, 2, 4, 5, 6}

num_set.discard(10) # Remove element 10 if present, no error if not found
print(num_set)  # Output: {1, 2, 4, 5, 6}

# membership testing
print(4 in num_set)  # Output: True
print(10 in num_set)  # Output: False

# common operations
# union - combining two sets and removing duplicates (OR operation)
set_a = {1, 2, 3}
set_b = {3, 4, 5}

print(set_a.union(set_b))  # Output: {1, 2, 3, 4, 5}

# intersection - common elements in both sets (AND operation)
print(set_a.intersection(set_b))  # Output: {3}

# difference - elements in set_a but not in set_b (AND NOT operation)
print(set_a.difference(set_b))  # Output: {1, 2}

# symmetric difference - elements in either set_a or set_b but not both (XOR operation)
print(set_a.symmetric_difference(set_b))  # Output: {1, 2, 4, 5}