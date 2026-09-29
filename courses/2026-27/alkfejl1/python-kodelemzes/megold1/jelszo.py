jelszo = input("Adjon meg egy jelszót:")

if len(jelszo) < 8:
    print("A jelszó túl rövid!")
nemszam = 0
if len(jelszo) >= 8: 
    for i in jelszo:
        if i == "0" or i == "1" or i == "2" or i == "3" or i == "4" or i == "5" or i == "6" or i == "7" or i == "8" or i == "9"  : 
            print("A jelszó megfelelő.")       
            break     
        else:
            nemszam += 1
    if nemszam == len(jelszo):
        print("A jelszó nem tartalmaz számjegyet!")

