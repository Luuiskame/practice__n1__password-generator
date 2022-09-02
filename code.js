(function(){
    // variables and general objects
   
    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('number__of-caracters')

    var settings = {
        caracteres: parseInt(inputCaracteres.value),
        simbols: true,
        numbers: true,
        capitalLetters: true,
        lowercase: true
    }

    var caracteres = {
        numbers: '0 1 2 3 4 5 6 7 8 9',
        simbols: '! @ # $ % & / ? ¡ ¿ * { } ( ) - + : ; < > ',
        capitalLetters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    // events

    // event to prevent the app to make a submit
    app.addEventListener('submit', function(e){
        e.preventDefault();
    });

    app.elements.namedItem('btn__plus-one').addEventListener('click',function(){
        settings.caracteres++;
        inputCaracteres.value = settings.caracteres
    })

    app.elements.namedItem('btn__minus-one').addEventListener('click',function(){
        if (settings.caracteres > 1) {
            settings.caracteres--;
        inputCaracteres.value = settings.caracteres
        }
    })

    
    app.elements.namedItem('btn__simbols').addEventListener('click',function(){
        btnToggle(this) 
        settings.simbols = !settings.simbols
    });

    app.elements.namedItem('btn__numbers').addEventListener('click',function(){
        btnToggle(this)
    });

    app.elements.namedItem('btn__capital-letters').addEventListener('click',function(){
        btnToggle(this)
    });

    app.elements.namedItem('btn__generator').addEventListener('click', function(){
        generatePassword();
    })

    app.elements.namedItem('input__password').addEventListener('click',function(){
        copyPassword();
    })
    
    
    // functions
    function btnToggle(trueToFalse){
        trueToFalse.classList.toggle('false');
        trueToFalse.childNodes[0].classList.toggle('fa-check');
        trueToFalse.childNodes[0].classList.toggle('fa-times');
    }

    function generatePassword(){
        var finalCaracters = '';
        var password = '';

        for (propertie in settings){
            if (settings[propertie] == true) {
                finalCaracters += caracteres[propertie] + ' ';
            }
        }
        finalCaracters = finalCaracters.trim();
        finalCaracters = finalCaracters.split(' ');

        for (var i = 0; i < settings.caracteres; i++) {
            password += finalCaracters[Math.floor(Math.random() * finalCaracters.length)];
        }
        app.elements.namedItem('input__password').value = password;
    }

    function copyPassword(){
        app.elements.namedItem('input__password').select();
        document.execCommand('copy');
        document.getElementById('alert__copied').classList.add('active');

        setTimeout(function(){
            document.getElementById('alert__copied').classList.remove('active');
        },2000);
    }

    generatePassword();

}())