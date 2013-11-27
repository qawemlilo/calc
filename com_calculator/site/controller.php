<?php
// No direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

jimport('joomla.application.component.controller');


class CalculatorController extends JController
{
	function display()
	{
        if(!JRequest::getVar('view')) {
		    JRequest::setVar('view', 'calculator');
        }
        
		parent::display();
	}

}