# basic example

i = 1

while i <= 5:
    print(f"Iteration {i}")
    i += 1


# while loop with else

i = 1

while i <= 5:
    print(f"Iteration {i}")
    i += 1
else:
    print("Loop completed")

# break and continue
i = 1
while i <= 10:
    if i == 6:
        print("Breaking the loop at iteration 6")
        break
    print(f"Iteration {i}")
    i += 1

i = 1
while i <= 10:
    if i % 2 == 0:
        i += 1
        continue
    print(f"Odd Iteration {i}")
    i += 1