function comparePowers(n1,n2){
    //   console.log(n1, n2);
      
    //   let commonDenom = (nom, denom) =>{
    //     while (denom > 0){
    //       let temp = nom;
    //       nom = denom;
    //       denom = temp % denom;
    //       }
    //       return nom;
    //   }
      
    //   if (n1[0]===n2[0] && n1[0]!==1)
    //     return (n1[1]===n2[1]) ? 0 : (n1[1]>n2[1]) ? -1 : 1;
    //   if (n1[1]===n2[1])
    //     return (n1[0]===n2[0]) ? 0 : (n1[0]>n2[0]) ? -1 : 1;
    //   else{
    //     let pow1 = n1[1] / commonDenom(Math.max(n1[1], n2[1]), Math.min(n1[1], n2[1]));
    //     let pow2 = n2[1] / commonDenom(Math.max(n1[1], n2[1]), Math.min(n1[1], n2[1]));
    //     let base1 = n1[0] / commonDenom(Math.max(n1[0], n2[0]), Math.min(n1[0], n2[0]));
    //     let base2 = n2[0] / commonDenom(Math.max(n1[0], n2[0]), Math.min(n1[0], n2[0]));
    
    //     console.log([base1, pow1], [base2, pow2]);
    
    //     return (Math.pow(base1, pow1) === Math.pow(base2, pow2) ? 0 :
    //             Math.pow(base1, pow1) > Math.pow(base2, pow2) ? -1 : 1);
    //   }
      
      return Math.sign(n2[0]-n1[0] ** (n1[1]/n2[1]));
    }

function comparePowers([b1, e1], [b2, e2]) {
    let d = Math.log(b2) * e2 - Math.log(b1) * e1;
    return (d > 0) - (d < 0);
  }

const comparePowers = ([a, n], [b, m]) => Math.sign(b - a ** (n / m));