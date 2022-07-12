def pares(n: int):
    while n >= 2:
        if n % 2 == 0:
            print(f"{n}^2 = {n**2}")
        n -= 1

while(True): #loop infinito até que ache um break
    n = int(sys.stdin.readline("Número: "))
    if n == 0:
        break
    if n >= 2:
        pares(n)
