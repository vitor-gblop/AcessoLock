let gn = new General;

// initial_config for firebase
{
    firebaseConfig = {
        databaseURL: 'https://acessolocklandpage-default-rtdb.firebaseio.com/'
    };
        
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
}

function submissaoDeInteresse()
{   
    let nome = document.getElementById("nome_field").value;
    let email = document.getElementById("email_field").value;
    let interesse = document.getElementById("interesse_field").value;
    let PFPJ = document.getElementById("PfPj_field").value;

    let rString = gn.randomString(5);

    database.ref("Interessados/" + rString).set({
        nome: nome,
        email: email,
        interesse: interesse,
        PFouPJ: PFPJ
    });

    window.alert("Obrigado pelo Interesse!")

    setTimeout(()=>{
        location.reload();
    }, 1000);
}