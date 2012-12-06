<?php 
function citizen_form_forum_node_form_alter(&$form, &$form_state, $form_id) {
	$form['title']['#title'] = 'Discussion Title';
}