const tab =[10 , 9 , 8 , 5 , 6 , 2 , 4 , 3 , 1 , 7]


function insertSet(tab) {
    

    for (let i = 0; i < tab.length; i++) {
        const temp = tab[i]
        let j = i
      while (j>0 && tab[j-1]>temp) {
        tab[j] = tab[j-1]
        j--
      }
      tab[j] = temp
        
    }
    return tab
}

console.log(insertSet(tab))



