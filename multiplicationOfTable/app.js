var table = parseInt(prompt("Enter Number"));

if( table === 0){
    console.log(` Table of ${table} does not exist`);
}
else{
for( var i=1 ; i <=10 ; i++ ){
    console.log(`${table} x ${i} = ${table*i}`);
}
}