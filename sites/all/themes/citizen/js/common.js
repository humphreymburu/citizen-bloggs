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
	
	if(jQuery("#block-menu-menu-messages-3rd-menu").hasClass("block-menu-menu-messages-3rd-menu"))
	{
		jQuery(".action-links").before(jQuery("#block-menu-menu-messages-3rd-menu"));
		jQuery(".action-links").remove();
	}	
	if(jQuery("#block-menu-menu-messages-3rd-menu").hasClass("block-menu-menu-messages-3rd-menu"))
	{
		jQuery(".form-item-recipient").before(jQuery("#block-menu-menu-messages-3rd-menu"));
		
	}
	if(jQuery("#block-menu-menu-messages-3rd-menu").hasClass("block-menu-menu-messages-3rd-menu"))
	{
		jQuery("#block-system-main").before(jQuery("#block-menu-menu-messages-3rd-menu"));
		
	}
	
		
	jQuery(".statistics_counter").prepend(jQuery('.field-group-audience').html()+",");
	jQuery('.field-group-audience').remove();
	
	jQuery(".topic-post-count").prepend(jQuery('.statistics_counter').html()+",");
	jQuery('.statistics_counter').remove();
	
	jQuery(".forum-post-links li.post-edit a").html("<img alt='Edit' title='Edit' src='/sites/all/themes/citizen/images/quick.png'>");
	jQuery(".forum-post-links li.post-delete a").html("<img alt='Delete' title='Delete' src='/sites/all/themes/citizen/images/delete.png'>");
	jQuery(".forum-post-links li.comment-add a").html("<img alt='Quick Reply' title='Quick Reply' src='/sites/all/themes/citizen/images/report.png'>");

	jQuery(".forum-post-links li.comment-edit a").html("<img alt='Edit' title='Edit' src='/sites/all/themes/citizen/images/quick.png'>");
	jQuery(".forum-post-links li.comment-delete a").html("<img alt='Delete' title='Delete' src='/sites/all/themes/citizen/images/delete.png'>");
	jQuery(".forum-post-links li.comment-reply  a").html("<img alt='Quick Reply' title='Quick Reply' src='/sites/all/themes/citizen/images/report.png'>");
	
	 jQuery(".block-menu-logged-out-main-menu").clone().prependTo("#region-footer-first");
	
});