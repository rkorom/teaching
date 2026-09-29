class Film:
    def __init__(self, cim, rendezo, korhatar, jatekido, bevetel, ev):
        self.cim = cim
        self.rendezo = rendezo
        self.korhatar = korhatar
        self.jatekido = jatekido
        self.bevetel = bevetel
        self.ev = ev

filmek = []

with open("forras.csv", "r", encoding="utf-8") as file:
    file_content = file.read()
    for sor in file_content:
        sor = file_content.strip().split(";")
        if sor:
            filmek.append(Film)

db = 0
for filmek[0] in sor:
        db += 1
        print(db)

korhatar = {}
for filmek[2] in sor:
    if filmek[2] == "c":
        korhatar.keys()
        print(f'Családi filmek darabszáma : {korhatar.items()} db')
    elif filmek[2] == "f":
        korhatar.keys()
        print(f'Felnőtt korhatáros filmek darabszáma : {korhatar.items()} db')
    elif filmek[2] == "a":
        korhatar.keys()
        print(f'Általános besorolású filmek darabszáma : {korhatar.items()} db')

nev = input("Kérem a rendező nevét:")