# Creating and Using Modules in Python

# math_utils.py   → module
# main.py         → uses that module

# Built-in Modules (VERY IMPORTANT)

import math

print ("Square root of 16 is:", math.sqrt(16))
print ("Value of Pi is:", math.pi)

import random

print ("Random number between 1 and 10 is:", random.randint(1, 10))

import datetime

now = datetime.datetime.now()
print ("Current date and time is:", now)