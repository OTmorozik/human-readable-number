module.exports = function toReadable (number) {
    let a = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    let b = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let c = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
        if (number == 0) return 'zero';
        number = number.toString();
        x = number.length;
        let n = number.split(''); 
        let str = '';
        for (let i=0;   i < x;  i++) {
            if ((x-i) % 3 == 2) { 
                if (n[i] == '1') {
                    str += b[Number(n[i+1])] + ' ';
                    i ++;
                } else if (n[i] != 0) {
                    str += c[n[i]-2] + ' ';
                }
            } else if (n[i] != 0) {
                str += a[n[i]] + ' ';
                if ((x-i) % 3 ==0) str += 'hundred ';
            }
        }
        str = str.replace(/\s+/g,' ').trim();
        return str;
    }
