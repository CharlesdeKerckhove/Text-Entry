$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var text = $('#textinput').val();
	alert(text);
    storeValue("text", text)
}

function storeValue(key, value) {
window.localStorage.setItem(key, value);
}