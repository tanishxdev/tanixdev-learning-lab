# basic example
arr = [1, 2, 3, 4, 5]

# accessing elements
first_element = arr[0]
last_element = arr[-1]

print("First element:", first_element)
print("Last element:", last_element)

# modifying elements
arr[2] = 10
print("Modified array:", arr)

# appending elements
arr.append(6)
print("Array after appending 6:", arr)

# removing elements
arr.remove(4)
print("Array after removing 4:", arr)

# inserting elements
arr.insert(2, 15)
print("Array after inserting 15 at index 2:", arr)

# slicing arrays
sub_array = arr[1:4]
print("Sliced array (index 1 to 3):", sub_array)

# iterating through arrays
print("Iterating through array:")
for element in arr:
    print(element)

# array length
array_length = len(arr)
print("Length of the array:", array_length)

# common operations
sampleArray = [1, 2, 3, 4, 5]

# sum
sum_of_elements = sum(sampleArray)
print("Sum of elements in the array:", sum_of_elements)

# average
average = sum_of_elements / len(sampleArray)
print("Average of elements in the array:", average)

# maximum
max_element = max(sampleArray)
print("Maximum element in the array:", max_element)

# minimum
min_element = min(sampleArray)
print("Minimum element in the array:", min_element)

# sorting

sorted_array = sorted(sampleArray)
print("Array sorted in ascending order:", sorted_array)

sorted_array_reversed = sorted(sampleArray, reverse=True)
print("Array sorted in descending order:", sorted_array_reversed)
