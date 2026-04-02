# type casting

# implicit type casting
int_var = 10        # integer
float_var = 3.5     # float
result = int_var + float_var  # integer is implicitly converted to float
print(result)       # outputs 13.5

# explicit type casting
int("5")        # integer
float("5")      # float
str("5")        # string
bool("5")       # boolean
print(int("5"))      # outputs 5
print(float("5"))    # outputs 5.0
print(str("5"))      # outputs '5'
print(bool("5"))     # outputs True

# trap
# int("5.5")    # raises ValueError
print(int(float("5.5")))  # outputs 5

print("False")   # outputs True
print(bool(""))        # outputs False

# string 
str_var = "Hello, World!"
print(str_var)              # outputs "Hello, World!"

# indexing
print(str_var[0])           # outputs 'H'
print(str_var[-1])          # outputs '!'

# slicing
print(str_var[0:5])        # outputs 'Hello'
print(str_var[7:])         # outputs 'World!'

# methods
print(len(str_var))        # outputs 13
print(str_var.upper())     # outputs 'HELLO, WORLD!'
print(str_var.lower())     # outputs 'hello, world!'

# operations
greeting = "Hello" + ", " + "Python!"
print(greeting)            # outputs 'Hello, Python!'
repeat = "Ha" * 3
print(repeat)              # outputs 'HaHaHa'

# membership
print("World" in str_var)  # outputs True
print("Python" not in str_var)  # outputs True
