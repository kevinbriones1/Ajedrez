function PosiblesMovimientos(){
    var x,y;
    var contador=0;
    var i;
    x= movimiento['seleccionar']['x'];
    y= movimiento['seleccionar']['y'];

    document.getElementById('t'+x+y).style.backgroundColor = "#0b5345";
    posibles[contador] = "t"+x+y; contador++;

            /* Peon */
    if(pieza[x][y]['pieza']=='Peon'){
        if(pieza[x][y]['color'] =="Blanco"){

                if(!pieza[x-1][y]['pieza']){
                    posible(x-1,y);
                }if(y-1>0 && pieza[x-1][y-1]['pieza']){
                    posible(x-1,y+1);
                }if(y+1<9 && pieza[x-1][y+1]['pieza']){
                    posible(x-1,y+1);
                } 
                if(x==7){
                    if(!pieza[x-2][y]['pieza'] && !pieza[x-1][y]['pieza']){
                        posible(x-2,y);
                    }
                }
        }
        if(pieza[x][y]['color'] =="Negro") {

            if(!pieza[x+1][y]['pieza']){
                posible(x+1,y);
            }if(y-1>0 && pieza[x+1][y-1]['pieza']){
                posible(x+1,y-1);
            }if(y+1<9 && pieza[x+1][y+1]['pieza']){
                posible(x+1,y+1);
            } 
            if(x==2){
                if(!pieza[x+2][y]['pieza'] && !pieza[x+1][y]['pieza']){
                    posible(x+2,y);
                }
            }
    }    
    }

            /* Caballo */
        if(pieza[x][y]['pieza'] == 'Caballo'){
            posible(x-1,y-2);
            posible(x+1,y+2);
            posible(x+1,y-2);
            posible(x-1,y+2);
            posible(x-2,y-1);
            posible(x+2,y+1);
            posible(x+2,y-1);
            posible(x-2,y+1);
        }

            /* Rey */
        if(pieza[x][y]['pieza']=='Rey'){
            posible(x-1,y);
            posible(x,y-1);
            posible(x-1,y-1);
            posible(x+1,y);
            posible(x,y+1);
            posible(x+1,y+1);
            posible(x-1,y+1);
            posible(x+1,y-1);
        }

            /* Torre */
        if(pieza[x][y]['pieza']=='Torre'){
            for(i=1;posible(x-i,y);i++);
            for(i=1;posible(x+i,y);i++);
            for(i=1;posible(x,y-i);i++);
            for(i=1;posible(x,y+i);i++);
        }
        
            /* Alfil */
        if(pieza[x][y]['pieza']=='Alfil'){
            for(i=1;posible(x-i,y-i);i++);
            for(i=1;posible(x+i,y+i);i++);
            for(i=1;posible(x-i,y+i);i++);
            for(i=1;posible(x+i,y-i);i++);
        }

            /* Reina */
        if(pieza[x][y]['pieza']=='Reina'){
            for(i=1;posible(x-i,y-i);i++);
            for(i=1;posible(x+i,y+i);i++);
            for(i=1;posible(x-i,y+i);i++);
            for(i=1;posible(x+i,y-i);i++);
            for(i=1;posible(x-i,y);i++);
            for(i=1;posible(x+i,y);i++);
            for(i=1;posible(x,y-i);i++);
            for(i=1;posible(x,y+i);i++);
        }

    function posible(px,py){
        if(px>0 && px<9 && py>0 && py<9 && pieza[px][py]['color']!= movimiento['seleccionar']['color']){
            document.getElementById('t'+(px)+(py)).style.backgroundColor = "#3C9";
            posibles[contador] = "t" + (px) + (py); contador++;

                if(!pieza[px][py]['pieza']){
                    return true;
                }                
        } else {
            return false;
        }
    }
    return contador;
}
    function RegresarColor(){
        var rc;
        for(rc=0;rc<posibles.length;rc++){
            document.getElementById(posibles[rc]).style.backgroundColor = "";
        }
    }
    function VerificarPosibilidad(x,y,contador){
        var u=0;
        var cp;
        var div = "t"+x+y;

            for(cp=1;cp<contador;cp++){
                if(posibles[cp]==div){
                    u ++;
                }
                if(u>0){
                    return 1;
                }
            }
    }