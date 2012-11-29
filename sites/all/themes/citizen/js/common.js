jQuery(function(){
	jQuery(".group-right div").each(function(){
		classOfDiv = jQuery(this).attr('class');
		if(classOfDiv == "field-actions-reference")
		{
			jQuery(".group-right .field-actions-reference a").html("<img src='/sites/all/themes/citizen/images/discussion.png'>");
		}	
		if(classOfDiv == "field-vote-reference")
		{
			jQuery(".group-right .field-vote-reference a").html("<img src='/sites/all/themes/citizen/images/like.png' />");
		}	
		if(classOfDiv == "field-forum-reference")
		{
			jQuery(".group-right .field-forum-reference a").html("<img src='/sites/all/themes/citizen/images/cd.png'>");
		}	
	});
	
	//removing the messages text from right menu
	jQuery(".right-user-login ul li.first a").html("");
	
});