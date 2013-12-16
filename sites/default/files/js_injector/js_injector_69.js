/*(function($){
    $(document).ready(function(){
$('#edit-faxno').unbind('mask');
		MasksFax();
		
		// edit-faxno
		$('#edit-faxno').blur(function(){
			var selector1 = $('#edit-faxno');
			var telval1 = selector1.val();
			for(var i=0; i < 10; i++){
				telval1 = telval1.replace("_","");
			}
			if(telval1.length == 11){
				var newtel = "(000) "+telval1.substr(3,3)+"-"+telval1.substr(7,4);
				selector1.val(newtel);
			}
			else if(telval1.length < 13){
				selector1.val('(___) ___-____');
			}
			else{
				if(telval1.length == 13){
					if(telval1.substr(3,1) != ")"){
							var newtel = "(0"+telval1.substr(1,2)+") "+telval1.substr(3,1)+telval1.substr(6,2)+"-"+telval1.substr(8,1)+telval1.substr(10,3);
							if(newtel.substr(10,1) != "-"){
								selector1.val(newtel);
							}else{
								selector1.val('(___) ___-____');
							}
					}else{
						var newtel = "(0"+telval1.substr(1,2)+") "+telval1.substr(5,3)+"-"+telval1.substr(9,4);
						selector1.val(newtel);
					}
				}
			}
		});
				
		function MasksFax(){
			MaskedInput({
				elm: document.getElementById('edit-faxno'),
				format: '(___) ___-____', separator: '()- '
			});
		} // end Masks
	});
})(jQuery);*/