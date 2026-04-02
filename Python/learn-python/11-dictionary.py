# dictionary - a collection of key-value pairs

student = {
    "name": "Alice",
    "age": 21,
    "is_active": True,
    "courses": ["Math", "CompSci"]
}

# NOTE - Keys must be immutable types (string, number, tuple) and unique, values can be of any type

# creating dictionary
empty_dict = {}
person = {
    "first_name": "John",
    "last_name": "Doe",
    "age": 30,
    "is_employee": False
}
user = dict(username="johndoe", email="kVp0G@example.com", age=30) # using dict constructor - keys become string and arguments

# accessing dictionary elements - if you try to access a key that doesn't exist, it raises a KeyError
print(student["name"])  # Output: Alice

# safer to use get method to avoid KeyError
print(student.get("age"))  # Output: 21
print(student.get("address", "Not Found"))  # Output: Not Found

# modifying dictionary
student["age"] = 22  # Update age
student["address"] = "123 Main St"  # Add new key-value pair
print(student)

# removing elements
del student["is_active"]  # Remove key-value pair
print(student)