const counters = document.querySelectorAll('.value');

const speed = 100;
// var x = readNumberFromFile();
// try {
//     const number = readNumberFromFile();
//     console.log('Number from the file:', number);
// } catch (error) {
//     console.error(error.message);
// }

counters.forEach( counter => {
   const animate = () => {
    // const value = +number;
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});




