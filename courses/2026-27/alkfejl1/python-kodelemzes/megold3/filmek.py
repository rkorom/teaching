class Film:
    def __init__(self,cim,rendezo,korhatar,jatekido,bevetel,ev):
        self.cim=cim
        self.rendezo=rendezo
        self.korhatar=korhatar
        self.jatekido=jatekido
        self.bevetel=bevetel
        self.ev=ev


file=open("forras.csv","r",encoding="utf8")
content=[]
content=file.read().split("\n")
adat=[]
for i in content:
    adat.append(content[1].split(";"))
    
#print(adat[0][0])

file.close()

def beado(Film):
    for i in adat:
        (Film)= cim=adat[i][0] 

#a feladatrész
print(f"A forrás {len(adat)} db film adatait tartalmazza.")

#b 