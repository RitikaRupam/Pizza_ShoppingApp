/*
Network Talk--> HTTP/HTTPs
Async calls, Promise
a) then  b) catch
*/
// makeNetworkCall('https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json');
 async function makeNetworkCall(URL){
    try{
    const response= await fetch(URL);
    const data= await response.json();   //await means aync wait
    console.log("data is",data);
    return data;
    }
    catch(err){
        throw err;
    }
    /*const promise= fetch(URL);   //predefined methods from ECMA 6. Wrapper method in XML HTTP request.
    promise.then((response)=>{
        const promise2 =response.json();  //convert json into object
        
        promise2.then(data=>{

        }).catch(err=>{         //invalid json

        })
    }).catch((err)=>{       //url problem or network down

    });
    */
}
export default makeNetworkCall;

