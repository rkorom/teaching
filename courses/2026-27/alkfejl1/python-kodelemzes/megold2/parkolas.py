def dijszamitas(parkolas):
    while True:
        if parkolas >= 1 and parkolas <= 24:
            if parkolas == 1:
                print("Fizetendő összeg: 500 Ft")
            elif parkolas == 2 and parkolas == 3:
                print("Fizetendő összeg: 1000 Ft")
            elif parkolas == 4 and parkolas == 5 and parkolas == 6:
                print("Fizetendő összeg: 1500 Ft")
            else:
                print("Fizetendő összeg: 2000 Ft")
                break
        else:
            print("Adja meg újra!")
            break

print(dijszamitas(int(input("Adja meg a parkolás idejét órában: "))))