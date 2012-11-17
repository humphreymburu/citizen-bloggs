<?php

/**
 * @file
 * Provide views data and handlers for poll.module.
 *
 * @ingroup views_module_handlers
 */

/**
 * Implements hook_views_data().
 */
function poll_views_data() {
  // ----------------------------------------------------------------
  // poll table
  
  // Basic table information.
  $data['poll']['table']['group'] = t('Poll');

  // Join to 'node' as a base table.
  $data['poll']['table']['join'] = array(
    'node' => array(
      'left_field' => 'nid',
      'field' => 'nid',
    ),
  );

  // ----------------------------------------------------------------
  // Fields

  // poll active status
  $data['poll']['active'] = array(
    'title' => t('Active'),
    'help' => t('Whether the poll is open for voting.'),
    'field' => array(
      'handler' => 'views_handler_field_boolean',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'handler' => 'views_handler_filter_boolean_operator',
      'label' => t('Active'),
      'type' => 'yes-no',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );
  
  // Duration of poll
  $data['poll']['runtime'] = array(
    'title' => t('Poll duration'),
    'help' => t('The length of time that the poll will remain open for voting.'),
  
    'field' => array(
      'handler' => 'views_handler_field_time_interval',
      'click sortable' => TRUE,
    ),
  
    'filter' => array(
      'handler' => 'views_handler_filter_date',
    ),
  
    'sort' => array(
      'handler' => 'views_handler_sort_date',
    ),
  );
  
  // ----------------------------------------------------------------
  // poll_vote table
  
  // Basic table information.
  $data['poll_vote']['table']['group'] = t('Poll vote');
  
  // No implicit joins.
  $data['poll_vote']['table']['join'] = array();
  
  // Make "poll_vote" a base table
  $data['poll_vote']['table']['base'] = array(
    'field' => 'nid',
    'title' => t('Poll votes'),
    'help' => t('Per-user votes for each poll.'),
    'weight' => -10,
  );
  
  // Poll node
  $data['poll_vote']['nid'] = array(
    'title' => t('Nid'),
    'help' => t('The node ID.'),  // The help that appears on the UI,
  
    // Information for displaying the nid
    'field' => array(
      'handler' => 'views_handler_field_node',
      'click sortable' => TRUE,
    ),
  
    // Information for accepting a nid as an argument
    'argument' => array(
      'handler' => 'views_handler_argument_node_nid',
      'name field' => 'title', // the field to display in the summary.
      'numeric' => TRUE,
      'validate type' => 'nid',
    ),
  
    // Information for accepting a nid as a filter
    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
    ),
  
    // Information for sorting on a nid.
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  
    'relationship' => array(
      'title' => t('Node'),
      'help' => t('Relate this vote to the poll node.'),
      'handler' => 'views_handler_relationship',
      'base' => 'node',
      'field' => 'nid',
      'label' => t('node'),
    ),
  );
  
  // Voter uid
  $data['poll_vote']['uid'] = array(
    'title' => t('Voter uid'),
    'help' => t('The user who voted.'),

    'filter' => array(
      'handler' => 'views_handler_filter_user_name',
    ),

    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),

    'field' => array(
      'handler' => 'views_handler_field_user',
    ),

    'relationship' => array(
      'title' => t('Voter'),
      'help' => t('Relate this vote to the user who voted.'),
      'handler' => 'views_handler_relationship',
      'base' => 'users',
      'field' => 'uid',
      'label' => t('voter'),
    ),
  );
  
  // Voter hostname
  $data['poll_vote']['hostname'] = array(
    'title' => t('Host name'),
    'help' => t('The IP address the vote was from, unless the voter was logged in.'),

    'field' => array(
      'handler' => 'views_handler_field',
      'click sortable' => TRUE,
    ),

    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
     
    'argument' => array(
      'handler' => 'views_handler_argument_string',
    ),

    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );
  
  // Vote timestamp
  $data['poll_vote']['timestamp'] = array(
    'title' => t('Vote time stamp'),
    'help' => t('The timestamp of the vote.'),

    'field' => array(
      'handler' => 'views_handler_field_date',
      'click sortable' => TRUE,
    ),

    'filter' => array(
      'handler' => 'views_handler_filter_date',
    ),

    'sort' => array(
      'handler' => 'views_handler_sort_date',
    ),
  );
  
  // ----------------------------------------------------------------
  // poll_choice table
  
  // Basic table information.
  $data['poll_choice']['table']['group'] = t('Poll choice');
  
  // Join to 'poll_vote' and 'node' as base tables.
  $data['poll_choice']['table']['join'] = array(
    'poll_vote' => array(
      'left_field' => 'chid',
      'field' => 'chid',
    ),
    
    'node' => array(
      'left_field' => 'nid',
      'field' => 'nid',
    ),
  );  
  
  // Choice ID
  $data['poll_choice']['chid'] = array(
    'title' => t('Choice chid'),
    'help'  => t('The identifier for the choice.'),

    'field' => array(
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),

    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
      'numeric' => TRUE,
    ),
     
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
      'numeric' => TRUE,
    ),

    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );
  
  // Choice text
  $data['poll_choice']['chtext'] = array(
    'title' => t('Choice text'),
    'help' => t('The text for the poll choice.'),

    'field' => array(
      'handler' => 'views_handler_field',
      'click sortable' => TRUE,
    ),

    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
     
    'argument' => array(
      'handler' => 'views_handler_argument_string',
    ),

    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );
  
  // Choice vote count
  $data['poll_choice']['chvotes'] = array(
    'title' => t('Vote count'),
    'help' => t('The total number of votes the choice has received by all users.'),

    'field' => array(
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),

    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
      'numeric' => TRUE,
    ),
     
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
      'numeric' => TRUE,
    ),

    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );
  
  // Choice weight
  $data['poll_choice']['weight'] = array(
    'title' => t('Choice weight'),
    'help' => t('The sort order of the choice among all choices for the same node.'),

    'field' => array(
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),

    'filter' => array(
      'handler' => 'views_handler_filter_numeric',
      'numeric' => TRUE,
    ),
     
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
      'numeric' => TRUE,
    ),

    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
  );
  
  return $data;
}

/**
 * Implements hook_views_data_alter().
 */
function poll_views_data_alter(&$data) {
  // ----------------------------------------------------------------
  // Relationships from Poll nodes
  $data['node']['poll_vote'] = array(
    'title' => t('Poll votes on node'),
    'help' => t('Relate poll node to votes. This relationship will cause duplicated records if there are multiple votes.'),

    'relationship' => array(
      'handler' => 'views_handler_relationship',
      'label' => t('votes'),
      'base' => 'poll_vote',
      'field' => 'nid',
    ),
  );

  // ----------------------------------------------------------------
  // Relationships from Poll voters
  $data['users']['poll_vote'] = array(
    'title' => t('Votes from user'),
    'help' => t('Relate user to votes on poll nodes. This relationship will cause duplicated records if there are multiple votes.'),

    'relationship' => array(
      'handler' => 'views_handler_relationship',
      'label' => t('votes'),
      'base' => 'poll_vote',
      'base field' => 'uid',
      'field' => 'uid',
    ),
  );
}