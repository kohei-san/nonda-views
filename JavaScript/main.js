function closeContainer(){
  const firstContainer = document.querySelector('#nonda-container');
  const secondContainer = document.querySelector('#image-container');
  const thirdContainer = document.querySelector('#calendar-container');
  firstContainer.classList.add('display-none');
  secondContainer.classList.remove('display-none');
  closeBtn = document.querySelector('#close-btn');
  closeBtn.addEventListener('click', () => {
    secondContainer.classList.add('display-none');
    thirdContainer.classList.remove('display-none');
  });
};

let closeBtn = document.querySelector('#nonda-btn');
closeBtn.addEventListener('click', closeContainer);