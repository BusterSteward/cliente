function anyoBisiesto(a){
    let res=false;
    if(a%4==0){
        res=true;
    }
    else if(a%100==0 && a%400==0)
        res=true;

    return res;
}