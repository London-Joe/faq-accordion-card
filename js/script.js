let accordionButton = document.querySelectorAll('.accordion__question');


accordionButton.forEach((item) => {
 item.addEventListener('click', (e) =>{
  console.log('click!');
  let accCollapse = item.nextElementSibling;
  if (!item.classList.contains('open')){

   accCollapse.style.display = 'block';
   let accHeight = accCollapse.clientHeight;


   setTimeout(() => {
    accCollapse.style.height = accHeight + 'px';
   accCollapse.style.display = ''; 
   },1)

   

   accCollapse.classList = 'accordion__collapse collapsing';

   setTimeout(() => {
    accCollapse.classList = 'accordion__collapse collapse open';
   },300)
  }

  else{
   accCollapse.classList = 'accordion__collapse collapsing';

   setTimeout(() => {
    accCollapse.style.height = '0px';
   },1)

   setTimeout(() => {
    console.log('hey');
    accCollapse.classList = 'accordion__collapse collapse';
    accCollapse.style.height = '';
   },300)
  }
  item.classList.toggle('open');
 })
} )