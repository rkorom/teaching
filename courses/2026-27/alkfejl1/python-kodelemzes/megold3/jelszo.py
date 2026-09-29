jelszo=input("Jelszó: ")

if len(jelszo)<8:
    print("A jelszó túl rövid!")
    hosszu=False
else:
    hosszu=True

num="0123456789"
for i in jelszo:
    if i in num:
        szamos=True
        break
    else:
        szamos=False
        

if szamos==False:
    print("A jelszó nem tartalmaz számjegyet!")

if hosszu==True and szamos==True:
    print("A jelszó megfelelő.")
