# basic example of if-else statement

age = 20

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")

# if and else can be used alone
is_raining = False
if is_raining:
    print("Take an umbrella.")
if not is_raining:
    print("No need for an umbrella.")

# else if example - when multiple conditions are needed

score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

# 9. Comparison Operators used in conditions
# ==, !=, >, <, >=, <=

number = 10
if number == 10:
    print("Number is equal to 10.")
if number != 5:
    print("Number is not equal to 5.")
if number > 5:
    print("Number is greater than 5.")
if number < 15:
    print("Number is less than 15.")
if number >= 10:
    print("Number is greater than or equal to 10.")
if number <= 20:
    print("Number is less than or equal to 20.")

# if vs elif vs else 

# if statements are checked independently, and the first one that is True is executed
# elif statements are checked only if the previous if or elif was False
# else is executed only if all previous if and elif conditions were False

# logical Operators used in conditions
# and, or, not

temperature = 25
if temperature > 20 and temperature < 30:
    print("The weather is nice.")
if temperature < 15 or temperature > 30:
    print("The weather is extreme.")
if not (temperature < 0):
    print("It's not freezing.")

# truthy and Falsy values 
# In Python, certain values are considered "truthy" or "falsy" in conditional statements.
# Truthy values include non-zero numbers, non-empty strings, non-empty containers (lists, dictionaries, etc.), and True itself.
# Falsy values include zero, empty strings, empty containers, and False itself.

value = ""
if value:
    print("This is a truthy value.")
else:
    print("This is a falsy value.")