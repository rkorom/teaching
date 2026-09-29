ido=0
while not 0<ido<25:
    ido=int(input("Hány órán át parkoltál: "))

def dijszamitas(orak):
    osszeg=0
    if orak==1:
        osszeg=500
    if 3>=orak>=2:
        osszeg=1000
    if 6>=orak>=4:
        osszeg=1500
    if orak>=7:
        osszeg=2000
    print(f"Fizetendő összeg: {osszeg} Ft")

dijszamitas(ido)