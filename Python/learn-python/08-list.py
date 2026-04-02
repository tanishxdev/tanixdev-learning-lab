# creating list
import copy


empty = []
num = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, True]
nested = [1, [2, 3], [4, [5, 6]]]

# Indexing Lists (VERY IMPORTANT)
nums = [10, 20, 30, 40, 50]
print(nums[0])    # Output: 10
print(nums[2])    # Output: 30

# Negative Indexing
print(nums[-1])   # Output: 50
print(nums[-3])   # Output: 30

# Slicing Lists (Very Important)
print(nums[1:4])  # Output: [20, 30, 40]
print(nums[:3])   # Output: [10, 20, 30]
print(nums[2:])   # Output: [30, 40, 50]
print(nums[:])    # Output: [10, 20, 30, 40, 50]

# * slicing create a new list

# list are mutable

nums[0] = 100
print(nums)  # Output: [100, 20, 30, 40, 50]

# common operations
nums.append(60)  # Add 60 at the end
print(nums)  # Output: [100, 20, 30, 40, 50, 60]

nums.remove(30)  # Remove first occurrence of 30
print(nums)  # Output: [100, 20, 40, 50, 60]

nums.sort()  # Sort the list
print(nums)  # Output: [20, 40, 50, 60, 100]

nums.pop()  # Remove and return the last item
print(nums)  # Output: [20, 40, 50, 60]

length = len(nums) # Length of the list
print(length) # Output: 4

nums.insert(2, 25) # Insert 25 at index 2
print(nums)  # Output: [20, 40, 25, 50, 60]

for x in nums:
    print(x)  # Output each element in the list

print(50 in nums)  # Check if 50 is in the list, Output: True
print(100 in nums)  # Check if 100 is in the list, Output: False


nums.clear()  # Clear the list
print(nums)  # Output: []

# 11. Copying Lists (INTERVIEW FAVORITE TRAP)
original = [1, 2, 3]

# Shallow Copy
copy1 = original

copy1.append(4)
print("Original after modifying copy1:", original)  # Output: [1, 2, 3, 4]  
print("copy1:", copy1)  # Output: [1, 2, 3, 4]