

this.rotating = false;
this.resultado = 0;


function rotateDice() {
  const cubo = document.querySelector('.cubo');
  this.resultado = Math.floor(Math.random() * 6) + 1;
  if (cubo) {
    this.rotating = true;
    const initialRotationX = Math.floor(Math.random() * 4) * 90;
    const initialRotationY = Math.floor(Math.random() * 4) * 90;
    cubo.style.transition = 'transform 1s ease-out';
    cubo.style.transform = `rotateX(${initialRotationX}deg) rotateY(${initialRotationY}deg)`;
    setTimeout(() => {
      this.setResultRotation();
    }, 1000);
  }
}

function setResultRotation() {
  const cubo = document.querySelector('.cubo');

  if (cubo) {
    cubo.style.transition = 'transform 2s ease-in-out';
    const resultRotation = this.getResultRotation();
    cubo.style.transform = resultRotation;

    setTimeout(() => {
      this.rotating = false;
    }, 2000);
  }
}

function getResultRotation() {
  switch (this.resultado) {
    case 1:
      return `rotateX(0deg) rotateY(0deg)`;
    case 2:
      return `rotateX(180deg) rotateY(90deg)`;
    case 3:
      return `rotateX(270deg) rotateY(180deg)`;
    case 4:
      return `rotateX(90deg) rotateY(90deg)`;
    case 5:
      return `rotateX(0deg) rotateY(90deg)`;
    case 6:
      return `rotateX(0deg) rotateY(180deg)`;
    default:
      return '';
  }
}



