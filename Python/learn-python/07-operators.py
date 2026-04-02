var_a = 10
var_b = 3

# Arithmetic
print("Addition:", var_a + var_b)
print("Subtraction:", var_a - var_b)
print("Multiplication:", var_a * var_b)
print("Division:", var_a / var_b) # float division
print("Floor Division:", var_a // var_b) # integer division
print("Modulus:", var_a % var_b)
print("Exponentiation:", var_a ** var_b)

# Comparison
print("Equal:", var_a == var_b)
print("Not Equal:", var_a != var_b)
print("Greater Than:", var_a > var_b)
print("Less Than:", var_a < var_b)
print("Greater Than or Equal To:", var_a >= var_b)
print("Less Than or Equal To:", var_a <= var_b)

# Assignment

var_c = var_a  # simple assignment
print("var_c:", var_c)

var_c += var_b  # compound assignment
print("var_c after += :", var_c)
var_c *= 2      # compound assignment
print("var_c after *= :", var_c)

# Logical

print("AND:", (var_a > 5) and (var_b < 5))
print("OR:", (var_a < 5) or (var_b < 5))
print("NOT:", not (var_a > 5))

# Bitwise
print("Bitwise AND:", var_a & var_b)
print("Bitwise OR:", var_a | var_b)
print("Bitwise XOR:", var_a ^ var_b)
print("Bitwise NOT:", ~var_a)
print("Left Shift:", var_a << 1)
print("Right Shift:", var_a >> 1)


# Membership
print("Membership in list:", 3 in [1, 2, 3, 4, 5])
print("Membership in tuple:", 3 in (1, 2, 3, 4, 5))
print("Membership in set:", 3 in {1, 2, 3, 4, 5})
print("Membership in dictionary:", 3 in {'a': 1, 'b': 2, 'c': 3})

# Identity
list1 = [1, 2, 3]
list2 = list1
list3 = [1, 2, 3]

print("list1 is list2:", list1 is list2)
print("list1 is list3:", list1 is list3)
print("list1 == list3:", list1 == list3)

