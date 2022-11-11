function vectorSimetrico(v){
    
    let long=v.length
    for(let i=0;i<long;i++){
        if(v[i]!=v[(long-1)-i])
            return false;
    }
    return true;
}