<?php
/*
Plugin Name: WPeC ImageFadr
Plugin URI: #
Description: Removes the thickbox functionality in WP E-Commerce's product gallery with a same-page image replacement w/ fade effect. Requires the Gold Cart upgrade.
Version: 0.1
Author: David Beveridge <davidjbeveridge@gmail.com>
Author URI: http://www.nerdyisback.com
License: GPL2
*/

if(!defined('WPSCIF_PATH'))	{
	define('WPSCIF_PATH',ABSPATH.basename(dirname(__FILE__)));
}
if(!defined('WPSCIF_URL'))	{
	define('WPSCIF_URL',get_bloginfo('wpurl').'/wp-content/plugins/'.basename(dirname(__FILE__)));
}

function wpscif_register_scripts()	{

	//Un-registers the WP E-commerce thickbox script and stylesheet
	wp_deregister_script('wpsc-thickbox');
	wp_deregister_style('wpsc-thickbox');
	
	wp_register_script('wpscif.fadr', WPSCIF_URL.'/js/fadr.js',array('jquery'),0.1,FALSE);
	
	wp_enqueue_script('jquery');
	wp_enqueue_script('wpscif.fadr');
}

add_action('get_header', 'wpscif_register_scripts');
