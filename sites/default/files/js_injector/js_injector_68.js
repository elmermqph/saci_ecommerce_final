/*(function($){
    $(document).ready(function(){
		MasksTel();
		$('#edit-telephone').unbind().blur(function(){
			var selector = $('#edit-telephone');
			var telval = selector.val();
			for(var i=0; i < 10; i++){
				telval = telval.replace("_","");
			}
			if(telval.length == 11){
				var newtel = "(000) "+telval.substr(3,3)+"-"+telval.substr(7,4);
				selector.val(newtel);
			}
			else if(telval.length < 13){
				selector.val('(___) ___-____');
			}
			else{
				if(telval.length == 13){
					if(telval.substr(3,1) != ")"){
							var newtel = "(0"+telval.substr(1,2)+") "+telval.substr(3,1)+telval.substr(6,2)+"-"+telval.substr(8,1)+telval.substr(10,3);
							if(newtel.substr(10,1) != "-"){
								selector.val(newtel);
							}else{
								selector.val('(___) ___-____');
							}
					}else{
						var newtel = "(0"+telval.substr(1,2)+") "+telval.substr(5,3)+"-"+telval.substr(9,4);
						selector.val(newtel);
					}
				}
			}
		});
		
	});
		
	function MasksTel(){
		MaskedInput({
			elm: document.getElementById('edit-telephone'),
			format: '(___) ___-____', separator: '()- '
		});
	} 
})(jQuery);*/