var message = $('.birthMessage');
var submit = $('.submit-btn');

submit.on('click', appendMessage);

function appendMessage(){
  var name = $('.name').val();
  var avenger = $('.avenger').val();

  var allInfo = {name:name, avenger:avenger};

  message.append(`
    <p class="completeMessage">
      Happy Birthday ${allInfo.name}! I wish you an amazing year! - ${allInfo.avenger} 
    </p>
  `);

}
