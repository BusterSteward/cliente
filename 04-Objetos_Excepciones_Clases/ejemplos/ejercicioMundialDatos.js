var nombres=["españa","argentina","croacia","marruecos","francia","qatar","ecuador","arabia","uruguay","costa rica","japon","corea del sur",
"ghana","brasil","senegal","paises bajos","mexico","alemania","canada","portugal","suiza","camerun","australia","serbia","dinamarca",
"belgica","inglaterra","eeuu","gales","tunez","iran","polonia"];

var equipos=[];
for(let i=0;i<32;i++){
    equipos.push(new Equipo(nombres[i],"entrenador "+i));
}

var qatar2022=new Mundial();
for(let i=0;i<32;i++){
    qatar2022.setEquipo(equipos[i]);
}
qatar2022.generarGrupos();
console.log(qatar2022.gruposToString());
qatar2022.generarFasePrevia();
