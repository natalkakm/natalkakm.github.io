const validate = () => {
    if( document.form.name.value == "" ) {
        alert( "Please provide your name!" );
        document.form.name.focus() ;
        return false;
}
}

