function IniciaJuego(){
   turno = "Blanco";
   
        /* Piezas Negras */
   document.getElementById("t11").className = "Torre-Negro";
   document.getElementById("t12").className = "Caballo-Negro";
   document.getElementById("t13").className = "Alfil-Negro";
   document.getElementById("t14").className = "Reina-Negro";
   document.getElementById("t15").className = "Rey-Negro";
   document.getElementById("t16").className = "Alfil-Negro";
   document.getElementById("t17").className = "Caballo-Negro";
   document.getElementById("t18").className = "Torre-Negro";

   document.getElementById("t21").className = "Peon-Negro";
   document.getElementById("t22").className = "Peon-Negro";
   document.getElementById("t23").className = "Peon-Negro";
   document.getElementById("t24").className = "Peon-Negro";
   document.getElementById("t25").className = "Peon-Negro";
   document.getElementById("t26").className = "Peon-Negro";
   document.getElementById("t27").className = "Peon-Negro";
   document.getElementById("t28").className = "Peon-Negro";


        /*Piezas Blancas */
    document.getElementById("t81").className = "Torre-Blanco";
    document.getElementById("t82").className = "Caballo-Blanco";
    document.getElementById("t83").className = "Alfil-Blanco";
    document.getElementById("t84").className = "Reina-Blanco";
    document.getElementById("t85").className = "Rey-Blanco";
    document.getElementById("t86").className = "Alfil-Blanco";
    document.getElementById("t87").className = "Caballo-Blanco";
    document.getElementById("t88").className = "Torre-Blanco";
     
    document.getElementById("t71").className = "Peon-Blanco";
    document.getElementById("t72").className = "Peon-Blanco";
    document.getElementById("t73").className = "Peon-Blanco";
    document.getElementById("t74").className = "Peon-Blanco";
    document.getElementById("t75").className = "Peon-Blanco";
    document.getElementById("t76").className = "Peon-Blanco";
    document.getElementById("t77").className = "Peon-Blanco";
    document.getElementById("t78").className = "Peon-Blanco";

        /* Array de las pocisiones*/
    Crear_array();
    function Crear_array(){
        var x, y;

        pieza = new Array();

        for(x=1;x<=8;x++){

            pieza[x] = new Array();

                for(y=1;y<=8;y++){
                    pieza[x][y] = new Array();
                    pieza[x][y]['pieza'] = false;
                    pieza[x][y]['color'] = false;
                }
    }
}

        /* Posiciona piezas negras en el array */
    pieza[1][1]['pieza']="Torre";       pieza[1][1]['color']="Negro";   pieza[1][1]['mov']=0;
    pieza[1][2]['pieza']="Caballo";     pieza[1][2]['color']="Negro";   pieza[1][2]['mov']=0;
    pieza[1][3]['pieza']="Alfil";       pieza[1][3]['color']="Negro";   pieza[1][3]['mov']=0;
    pieza[1][4]['pieza']="Reina";       pieza[1][4]['color']="Negro";   pieza[1][4]['mov']=0;
    pieza[1][5]['pieza']="Rey";         pieza[1][5]['color']="Negro";   pieza[1][5]['mov']=0;
    pieza[1][6]['pieza']="Alfil";       pieza[1][6]['color']="Negro";   pieza[1][6]['mov']=0;
    pieza[1][7]['pieza']="Caballo";     pieza[1][7]['color']="Negro";   pieza[1][7]['mov']=0;
    pieza[1][8]['pieza']="Torre";       pieza[1][8]['color']="Negro";   pieza[1][8]['mov']=0;

    pieza[2][1]['pieza']="Peon";       pieza[2][1]['color']="Negro";   pieza[2][1]['mov']=0;
    pieza[2][2]['pieza']="Peon";       pieza[2][2]['color']="Negro";   pieza[2][2]['mov']=0;
    pieza[2][3]['pieza']="Peon";       pieza[2][3]['color']="Negro";   pieza[2][3]['mov']=0;
    pieza[2][4]['pieza']="Peon";       pieza[2][4]['color']="Negro";   pieza[2][4]['mov']=0;
    pieza[2][5]['pieza']="Peon";       pieza[2][5]['color']="Negro";   pieza[2][5]['mov']=0;
    pieza[2][6]['pieza']="Peon";       pieza[2][6]['color']="Negro";   pieza[2][6]['mov']=0;
    pieza[2][7]['pieza']="Peon";       pieza[2][7]['color']="Negro";   pieza[2][7]['mov']=0;
    pieza[2][8]['pieza']="Peon";       pieza[2][8]['color']="Negro";   pieza[2][8]['mov']=0;

        /* Posiciona piezas blancas en el array */
    pieza[8][1]['pieza']="Torre";       pieza[8][1]['color']="Blanco";   pieza[8][1]['mov']=0;
    pieza[8][2]['pieza']="Caballo";     pieza[8][2]['color']="Blanco";   pieza[8][2]['mov']=0;
    pieza[8][3]['pieza']="Alfil";       pieza[8][3]['color']="Blanco";   pieza[8][3]['mov']=0;
    pieza[8][4]['pieza']="Reina";       pieza[8][4]['color']="Blanco";   pieza[8][4]['mov']=0;
    pieza[8][5]['pieza']="Rey";         pieza[8][5]['color']="Blanco";   pieza[8][5]['mov']=0;
    pieza[8][6]['pieza']="Alfil";       pieza[8][6]['color']="Blanco";   pieza[8][6]['mov']=0;
    pieza[8][7]['pieza']="Caballo";     pieza[8][7]['color']="Blanco";   pieza[8][7]['mov']=0;
    pieza[8][8]['pieza']="Torre";       pieza[8][8]['color']="Blanco";   pieza[8][8]['mov']=0;

    pieza[7][1]['pieza']="Peon";        pieza[7][1]['color']="Blanco";   pieza[7][1]['mov']=0;
    pieza[7][2]['pieza']="Peon";        pieza[7][2]['color']="Blanco";   pieza[7][2]['mov']=0;
    pieza[7][3]['pieza']="Peon";        pieza[7][3]['color']="Blanco";   pieza[7][3]['mov']=0;
    pieza[7][4]['pieza']="Peon";        pieza[7][4]['color']="Blanco";   pieza[7][4]['mov']=0;
    pieza[7][5]['pieza']="Peon";        pieza[7][5]['color']="Blanco";   pieza[7][5]['mov']=0;
    pieza[7][6]['pieza']="Peon";        pieza[7][6]['color']="Blanco";   pieza[7][6]['mov']=0;
    pieza[7][7]['pieza']="Peon";        pieza[7][7]['color']="Blanco";   pieza[7][7]['mov']=0;
    pieza[7][8]['pieza']="Peon";        pieza[7][8]['color']="Blanco";   pieza[7][8]['mov']=0;

        /* Mueve Piezas */
    movimiento = new Array();

    movimiento['seleccionar'] = new Array();
    movimiento['seleccionar']['x'] = 0;
    movimiento['seleccionar']['y'] = 0;
    movimiento['seleccionar']['pieza'] = "0";
    movimiento['seleccionar']['color'] = "0";

    movimiento['destino'] = new Array();
    movimiento['destino']['x'] = 0;
    movimiento['destino']['y'] = 0;
    movimiento['destino']['pieza'] = "0";
    movimiento['destino']['color'] = "0";

        /* Posibles movimientos */
    posibles = new Array();
}