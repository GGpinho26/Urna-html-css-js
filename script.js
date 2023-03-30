let nulos = 0;
let num_chapa01 = "11";
let num_chapa02 = "45";
let vt_chapa1 = 0;
let vt_chapa2 = 0;


function inserir(value) {
    if(document.getElementById("campo1").value == "") {
        document.getElementById("campo1").value = value;
    } else {
        if(document.getElementById("campo2").value == "") {
            document.getElementById("campo2").value = value;
        }
    
    }

}

function votoBranco() {
    
    alert("Voto contabilizado!");
    nulos+=1;
    limpa();
}

function votar() {
    if(document.getElementById("campo1").value == "" || document.getElementById("campo2").value == "") {
        alert("Insira os números dos candidatos para votar!");
    } else {
        comp = ""+document.getElementById("campo1").value+document.getElementById("campo2").value;
        if(comp == num_chapa01) {
            alert("Voto Contabilizado! (11)");
            vt_chapa1+=1;
            limpa();
        } else if(comp == num_chapa02) {
            alert("Voto Contabilizado! (45)");
            vt_chapa2+=1;
            limpa();
        } else {
            alert("Insira os números corretos dos candidatos!");
        }
        
        
    }
    
}

function limpa() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function resultado() {
    alert("Voltos nulos: "+nulos+"\nVotos Chapa "+num_chapa01+": "+vt_chapa1+"\nVotos Chapa "+num_chapa02+": "+vt_chapa2);
}