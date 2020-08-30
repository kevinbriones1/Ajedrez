function selecciona(x,y){

    if((movimiento['seleccionar']['x']==0|| pieza[x][y]['color']==movimiento['seleccionar']['color'])&& pieza[x][y]['color']==turno){
       if(movimiento['seleccionar']['x']!=0){
             /* Regresa el color original */
        RegresarColor();
    }
    if(pieza[x][y]['pieza']){
        movimiento['seleccionar']['x']=x;
        movimiento['seleccionar']['y']=y;
        movimiento['seleccionar']['pieza'] = pieza[x][y]['pieza'];
        movimiento['seleccionar']['color'] = pieza[x][y]['color'];
        
        ContadorPosible = PosiblesMovimientos();
    }
} else if(VerificarPosibilidad(x,y,ContadorPosible)){

   if(pieza[x][y]['pieza']=='Rey'){
       alert(movimiento['seleccionar']['color']+" Gano ");
       window.location.reload();
   } 
        /* Convertir peon a otra Pieza */
    if(movimiento['seleccionar']['pieza']=='Peon' && movimiento['seleccionar']['color']=='Blanco' && x==1){
       document.getElementById('escogerBlanco').style.display='block';
       document.getElementById('fondo').style.display='block'; 
       xe=x; ye=y;
    }  
    if(movimiento['seleccionar']['pieza']=='Peon' && movimiento['seleccionar']['color']=='Negro' && x==8){
        document.getElementById('escogerNegro').style.display='block';
        document.getElementById('fondo').style.display='block'; 
        xe=x; ye=y;
     }  
    if(pieza[x][y]['color']!= movimiento['seleccionar']['color']){
        movimiento['destino']['x'] = x;
        movimiento['destino']['y'] = y;
            if(pieza[x][y]['pieza']){
                movimiento['destino']['pieza'] = pieza[x][y]['pieza'];
                movimiento['destino']['color'] = pieza[x][y]['color'];
            }

        document.getElementById("t"+movimiento['seleccionar']['x']+""+movimiento['seleccionar']['y']).className = "";
        document.getElementById("t"+x+""+y).className = movimiento['seleccionar']['pieza']+"-"+movimiento['seleccionar']['color'];
        pieza[x][y]['pieza']=movimiento['seleccionar']['pieza'];
        pieza[x][y]['color']=movimiento['seleccionar']['color'];

        pieza[movimiento['seleccionar']['x']][movimiento['seleccionar']['y']]['pieza']=false;
        pieza[movimiento['seleccionar']['x']][movimiento['seleccionar']['y']]['color']=false;

        movimiento['seleccionar']['x'] = 0;
        movimiento['seleccionar']['y'] = 0;
        movimiento['seleccionar']['pieza'] = "0";
        movimiento['seleccionar']['color'] = "0";
    }
    RegresarColor();
    if(turno=="Blanco"){turno="Negro";} else{turno="Blanco";}

}
}
function escoger(piezae,colore){
    pieza[xe][ye]['pieza']=piezae;
    document.getElementById("t"+xe+""+ye).className = piezae+"-"+colore;
    document.getElementById('escoger'+colore).style.display='none';
    document.getElementById('fondo').style.display='none';
    
}