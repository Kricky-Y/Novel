'use strict';
{

  const text1 = document.querySelector('#text_1');
  const text2 = document.querySelector('#text_2');
  const text3 = document.querySelector('#text_3');
  const next1 = document.querySelector('#next_1');
  const next2 = document.querySelector('#next_2');
  const end = document.querySelector('#end');

  next_1.addEventListener('click', () => {
    text1.classList.add('hidden');
    text2.classList.remove('hidden');
    next1.classList.add('hidden');
    next2.classList.remove('hidden');

  });

  next_2.addEventListener('click', () => {
    text2.classList.add('hidden');
    text3.classList.remove('hidden');
    next2.classList.add('hidden');
    end.classList.remove('hidden');
  });

 end.addEventListener('click', () => {
    text3.classList.add('hidden');
    text1.classList.remove('hidden');
    end.classList.add('hidden');
    next1.classList.remove('hidden');

  });


}