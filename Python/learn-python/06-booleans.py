# Booleans in Python

is_logged_in = True
has_permission = False
is_admin = True

print(is_logged_in)      # Output: True
print(has_permission)    # Output: False
print(is_admin)         # Output: True

# Boolean operations
print(is_logged_in and has_permission)  # Output: False
print(is_logged_in or has_permission)   # Output: True
print(not is_admin)                     # Output: False

# falsy values in Python
falsy_values = [
  False,
  None,
  0,
  0.0,
  "",      # empty string
  [],       # empty list
  {},        # empty dict
  (),        # empty tuple
  set()     # empty set
]

# checking falsy values

if "":
    print("This string is truthy")
else:
    print("This string is falsy")  # This will be printed