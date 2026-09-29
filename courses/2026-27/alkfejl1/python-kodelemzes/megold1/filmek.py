
class Film:
    def __init__(self,cim,rendezo,korhatar,jatekido,bevetel,ev):
        self.cim = cim
        self.rendezo = rendezo
        self.korhatar = korhatar
        self.jatekido = jatekido
        self.bevetel = bevetel
        self.ev = ev

korhatar = dict()
filmek = []
with open("forras.txt","r",encoding="utf-8") as f:
    sorok = f.read().split("\n")
    sorok.pop(0)
    for sor in sorok:
        i = sor.split(";")
        filmek.append(Film(i[0],i[1],i[2],i[3],i[4],i[5]))
        if i[2] not in korhatar:
            korhatar[i[2]] = 1
        else:
            korhatar[i[2]] += 1
#--------------------------------------------------
print()
print("a. feladatrész")
print(f"A forrás {len(filmek)} db film adatait tartalmazza.")

#--------------------------------------------------
print()
print("B. feladat")
for i in korhatar.keys():
    if i == "f":
        print(f"Felnőtt korhatáros filmek darabszáma: {korhatar.get(i)} db")
    if i == "c":
        print(f"Családi filmek darabszáma: {korhatar.get(i)} db")
    if i == "a":
        print(f"Általános besorolású filmek darabszáma: {korhatar.get(i)} db")

#--------------------------------------------------
print()
print("c. feladat")
rendezo = input("Kérem a rendező nevét:")
talalt = 0
for i in filmek:
    if i.rendezo == rendezo:
        talalt += 1
if talalt == 0:
    print("Ettől a rendezőtől nincs film a forrásban.")
else:
    print(f"{talalt} film található.")


#--------------------------------------------------
print()
print("d. feladat")

print("A legrövidebb film adatai:")

rovid = filmek[0]
for i in filmek:
    if i.jatekido < rovid.jatekido:
        rovid = i

print(f"Cím:{rovid.cim} ")
print(f"Rendező:{rovid.rendezo}  ")

if rovid.korhatar == "f":
       print(f"Korhatár: felnőtt")
if rovid.korhatar == "c":
       print(f"Korhatár: családi")
if rovid.korhatar == "a":
       print(f"Korhatár: általános")
       

print(f"Játékidő:{rovid.jatekido} perc")
print(f"Bevétel: {rovid.bevetel} Ft")
print(f"Bemutató éve:{rovid.ev}") 