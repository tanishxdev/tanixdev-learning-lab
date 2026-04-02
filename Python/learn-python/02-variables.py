# data types
a = 10          # integer
b = 3.14        # float
c = "Hello"     # string
d = True        # boolean
e = [1, 2, 3]   # list
f = (4, 5, 6)   # tuple
g = {7, 8, 9}   # set
h = {'key': 'value'}  # dictionary
g = None        # NoneType

# printing data types
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(f))
print(type(g))
print(type(h))
print(type(g))

# multiple variable assignment
x, y, z = 1, 2.5, "World"
p = q = r = 0

print(x)
print(y)
print(z)
print(p)
print(q)
print(r)

# internal wokrings of variables - object  references

var_a = 10; # assigning integer object 10 to var_a
var_b = var_a; # var_b references the same object as var_a
print(id(var_a))  # prints the memory address of var_a
print(id(var_b))  # prints the memory address of var_b

print(id(var_a) == id(var_b))  # True, both reference the same object in memory