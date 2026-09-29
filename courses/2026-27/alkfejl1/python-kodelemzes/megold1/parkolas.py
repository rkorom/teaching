ido = int(input("Adja meg a parkolás idejét órában:"))

def dijszamitas(n): 
    if n == 1 :
        return("Fizetendő összeg: 500 Ft")
    if  n <= 3 and n >= 2 :
        return("Fizetendő összeg: 1000 Ft")
    if  n <= 6  and n >= 4 :
        return("Fizetendő összeg: 1500 Ft")
    if  n >= 7 :
        return("Fizetendő összeg: 2000 Ft")
 
while ido > 24 or ido < 1:    
    ido = int(input("Adja meg a parkolás idejét órában:"))
print(dijszamitas(ido))