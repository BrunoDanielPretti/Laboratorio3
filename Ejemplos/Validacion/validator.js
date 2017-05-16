$(document).ready(function() {
    $('#formulario').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {            
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'Por favor. Ingrese su E-Mail'
                    },
                    emailAddress: {
                        message: 'Por favor. Ingrese un E-Mail válido'
                    }
                }
            },           
            inputPassword: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor. Ingrese su dirección'
                    }
                }
            }                       
            }
        })
        .on('success.form.bv', function(e) {                       
            e.preventDefault();
            alert("ola q ase");
            

           
           
        });
});

