const isR18Plus = (age) => { 
   let promise = new Promise((resolve, reject) => {
        if( age > 18){
            resolve("Anda sudah dewasa");
        } else{
            reject("Anda masih dibawah umur");
        }
    })

    return promise
}
const printR18Plus = async () => {
  const underAge = await isR18Plus(10).then(y => y).catch(y => y);;
  const properAge = await isR18Plus(19).then(y => y).catch(y => y);;

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();
