function ojo() {
   
    
    if (Password.type == 'password') {
        Password.type = 'text';
    } else if (Password.type == 'text') {
        Password.type = 'password';
    }
}
