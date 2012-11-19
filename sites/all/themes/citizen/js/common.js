jQuery(function(){
	jQuery(".group-right div").each(function(){
		classOfDiv = jQuery(this).attr('class');
		if(classOfDiv == "field-actions-reference")
		{
			jQuery(".group-right .field-actions-reference a").html("<img src='tt.jpg'>");
		}	
		if(classOfDiv == "field-vote-reference")
		{
			jQuery(".group-right .field-vote-reference a").html("<img src='tt.jpg'>");
		}	
		if(classOfDiv == "field-forum-reference")
		{
			jQuery(".group-right .field-forum-reference a").html("<img src='tt.jpg'>");
		}	
	});
});