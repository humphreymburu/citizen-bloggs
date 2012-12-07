<?php 
function citizen_form_forum_node_form_alter(&$form, &$form_state, $form_id) {
	$form['title']['#title'] = 'Discussion Title';
}

function citizen_wysiwyg_editor_settings_alter(&$settings, $context) {
	if($context['profile']->editor == 'ckeditor') {
		$settings['height'] = 150;
	}
}
