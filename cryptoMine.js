const fib = (n) => {
    return (n===0 || n===1)?n:(fib(n-1) + fib(n-2));
}


function pingCrypto() {
    const url = 'https://www.nicehash.com';
    const startTime = Date.now();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.timeout = 5000; 

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const endTime = Date.now();
            const ping = endTime - startTime;

            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(`Ping: ${ping} ms`);
            } else {
                console.log('Error: Unable to ping NiceHash.');
            }
        }
    };

    xhr.ontimeout = function () {
        console.log('Error: Request timed out.');
    };

    xhr.onerror = function () {
        console.log('Error: Request failed.');
    };

    xhr.send();
}

const mine = () => {
    while(true){
        console.log("Mining!");
        pingCrypto();
        fib(71);
        console.log("Mined!");
    }
}

mine();