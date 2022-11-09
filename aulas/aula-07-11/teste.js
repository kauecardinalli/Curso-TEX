let lastSort = [];

function openDoor() {

  let acc = 0;
  let sort = [];

  for (let i = 0; i < 3; i++) {
    sort[i] = Math.floor(Math.random() * 3) + 1;
  }

  console.log(sort);

  if ((sort[0] === sort[1] && sort[1] === sort[2]) || (sort[0] === lastSort[0] && sort[1] === lastSort[1] && sort[2] === lastSort[2])) {
    acc++;

    switch (acc) {

    case 1:
      console.log('Porta 1 ABERTA!');
      break;

    case 2:
      console.log('Porta 2 ABERTA!');
      break;

    case 3:
      console.log('As 3 portas foram abertas, VOCÊ VENCEU!!!');
      break;

    default:
      console.log('O jogo acabou.');
      break;
    }
  } else {
    console.log('Tente de novo!');
  }
  
  console.log(`O último sorteio foi: ${lastSort}`);
  lastSort = sort;
}

openDoor();
