// let nst = 1;
let nsp = 4;
let nst =1;
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= nsp; j++) {
        process.stdout.write(" ");
    }

    let ans = "";
    for (let y = 1; y <= nst; y++) {
        ans += i + ""; // The space is added after each number
        
    }

    console.log(ans); // No trim() used
    nsp--;
    nst++;
}
