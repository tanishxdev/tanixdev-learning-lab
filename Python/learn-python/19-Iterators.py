# Example

nums = [1, 2, 3, 4, 5]

it = iter(nums)

print(next(it))  # Output: 1
print(next(it))  # Output: 2


# Iterator Characteristics

nums1 = [10, 20, 30]

it1 = iter(nums1)

for num in it1:
    print(num)  # Outputs: 10, 20, 30

# Once an iterator is exhausted, it cannot be reused

for num in it1:
    print(num)  # No output, as the iterator is exhausted