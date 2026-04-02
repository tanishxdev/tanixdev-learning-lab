# string example
my_string = "Hello, World!"
print(my_string)

# multi-line string
multi_line_string = """This is a multi-line
string example."""
print(multi_line_string)

# string is immutable 
immutable_string = "Immutable"
# immutable_string[0] = 'i'  # This will raise an error
print(immutable_string)

# then how to modify a string?
modified_string = "i" + immutable_string[1:]
print(modified_string)

# indexing 
index_string = "Indexing"
print(index_string[0])  # First character
print(index_string[-1]) # Last character

# slicing - string[start:end:step]
slice_string = "SlicingExample"
print(slice_string[0:7])    # 'Slicing'
print(slice_string[7:])      # 'Example'
print(slice_string[:7])      # 'Slicing'

# concatenation
concat_string1 = "Hello, "
concat_string2 = "World!"

full_string = concat_string1 + concat_string2
print(full_string)

# trap

# "age" + 20  # This will raise a TypeError

# correct way

"age" + str(20)  # This works
print("age" + str(20))

# methods
method_string = "  hello world  "
print(method_string.upper())      # '  HELLO WORLD  '
print(method_string.strip())      # 'hello world'
print(method_string.replace("world", "there"))  # '  hello there  ' 
print(method_string.split())      # ['hello', 'world']
print("world" in method_string)  # True 
print("Python" in method_string) # False
for char in method_string:
    print(char)

for char in "Python":
    print(char) 

# == vs is
str1 = "test"
str2 = "test"
print(str1 == str2)  # True, values are equal
print(str1 is str2)  # True, may refer to the same object in memory
str3 = str1
print(str1 is str3)  # True, both refer to the same object
str4 = "test!"
print(str1 is str4)  # False, different objects in memory