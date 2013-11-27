<?php 
defined('_JEXEC') or die('Restricted access'); 

$document = &JFactory::getDocument();
//$document->addStyleSheet('components/com_calculator/js/css/ui-lightness/jquery-ui-1.8.16.custom.css');
$document->addStyleSheet('components/com_calculator/assets/css/bootstrap.css');
$document->addScript('components/com_calculator/assets/js/jquery.min.js');
$document->addScript('components/com_calculator/assets/js/bootstrap.min.js');
//$document->addScript('components/com_calculator/js/js/jquery-ui-1.8.16.custom.min.js');
$document->addScript('components/com_calculator/assets/js/script.js');
$document->addScript('components/com_calculator/assets/js/addprintlink.js');

$script = '
jQuery.noConflict();

(function ($) {
  $(function () {
    $("#myTab a").click(function (e) {
      e.preventDefault();
      $(this).tab("show");
    });
  });
})(jQuery);
';

$document->addScriptDeclaration($script);
?>


<div>
    <ul class="nav nav-tabs" id="myTab">
      <li class="active"><a href="#tariff">CONVEYANCING TARIFF CALCULATOR</a></li>
      <li><a href="#mortgage">MORTGAGE BOND COSTS</a></li>
    </ul>
    
	<div id="tab-content">
      <div class="tab-pane active" id="tariff">
	   <a href="javascript:window.print()" style="position:absolute; right:5px;"><img src="components/com_calculator/js/print_2.png" /></a>
	   
       <form action="" method="POST" id="form1" name="form1">
	    <table width="70%">
		  <tr>
		    <td>
		      <strong><font color="#184498">CONVEYANCING TARIFF CALCULATOR <br /> (INCLUDING FEES &amp; TRANSFER DUTY)</font></strong>
		    </td>
		  </tr>
		  <tr>
		    <td>
			    <i>Please enter the value of the property and submit. <br />* Accurate up to a value of R20 000 000,00</i>
			</td>
		  </tr>
		</table>
        
		<p>
		    <strong>R</strong>&nbsp;<input type="text" id="prop_value" name="prop_value" value="0">
			<input type="button" class="btn" value="Calculate" id="button1" name="button1" onClick="find_fee(document.form1.prop_value.value); find_duty(document.form1.prop_value.value); find_lodge(document.form1.prop_value.value); calc_total();">
		</p>

		<table style="width:500px; margin-top: 5px;">
		  <tr>
		    <td>
			</td>
			
			<td>
			  <b><font size="-1" color="#184498">NATURAL PERSON</font></b>
			</td>
			<td>
			  <b><font size="-1" color="#184498">LEGAL ENTITY</font></b>
			</td>
	      </tr>
		  
		  <tr>
		    <td>
			  <font size="-1">Recommended Fee</font>
			</td>
			<td>
			  <input type="text" id="transfer_fee" name="transfer_fee" value="3200">
			</td>
			
			<td>
			    <input type="text" id="transfer_fee_2" name="transfer_fee_2" value="3200">
			</td>
		  </tr>
		  
		  <tr>
		    <td>
			  <font size="-1">Transfer Duty</font>
			</td>
			<td>
			  <input type="text" id="duty" name="duty">
			</td>
			<td>
			  <input type="text" id="duty_2" name="duty_2">
			</td>
		  </tr>
		  
		  <tr>
		    <td>
              <font size="-1">Deeds Office</font>
            </td>
            <td>
              <input type="text" id="lodge" name="lodge">
            </td>
            <td>
              <input type="text" id="lodge_2" name="lodge_2">
            </td>
          </tr>
        
          <tr>
            <td>
               <font size="-1">Rates Cert.</font>
            </td>
            <td>
              <input type="text" id="cert" name="cert" value="300.00">
            </td>
            <td>
              <input type="text" id="cert_2" name="cert_2" value="300.00">
            </td>
          </tr>
          
          <tr>
            <td>
              <font size="-1">Sundries</font>
            </td>
            <td>
              <input type="text" id="sundry" name="sundry" value="450.00">
            </td>
            <td>
              <input type="text" id="sundry_2" name="sundry_2" value="450.00">
            </td>
          </tr>
          
          <tr>
            <td>
              <font size="-1" color="#184498"><b>TOTAL</b></font>
            </td>
            <td>
              <input type="text" id="total" name="total">
            </td>
            <td>
              <input type="text" id="total_2" name="total_2">
            </td>
          </tr>
          
          <tr>
            <td>
              <font size="-1" color="#184498"><i>Sectional Title</i></font></td>
            <td>
              <input type="text" id="sec_total" name="sec_total">
            </td>
            <td>
              <input type="text" id="sec_total_2" name="sec_total_2">
            </td>
          </tr>
        </table>
      </form>

      <p>
        <font size="1">
          This calculator is based on the recommended costs published in the Government Gazette and was last updated in April 2011. It is accurate up to a value of R20 million, but does not reflect charges for any additional components and registrations such as exclusive use areas, and should be used as a guide only.
        </font>
      </p>
	</div>
	
	
	<div class="tab-pane" id="mortgage">
        <a href="javascript:window.print()" style="position:absolute; right:5px;"><img src="components/com_calculator/js/print_2.png" /></a>
        <form action="" method="POST" id="form2" name="form2">
          <table style="width:350px">
            <tr>
              <td>
                <p><b><font color="#184498">SCHEDULE OF MORTGAGE BOND COSTS</font></b></p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <font size="2"><b><font color="#184498">(INCLUDING FEES & STAMP DUTY)</font></b><br></font>
                  <i>Please enter the value of the mortgage bond and submit<br />*Accurate up to a capital sum of R20-million<br />(excluding banks raising and administration charges).
                  </i>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <font size="-1"><b>R</b></font>&nbsp;<input type="text" id="prop_value" name="prop_value" value="0">
                  <input type="button" value="Calculate" id="button1" class="btn" name="button1" onClick="find_bond_fee(document.form2.prop_value.value); find_bond_lodge(document.form2.prop_value.value);  calc_total_bond();">
                </p>
              </td>
            </tr>
          </table>
        
          <table style="width:350px">
            <tr>
              <td> <font size="-1">Recommended Fee</font></td>
              <td> <input type="text" id="tariff_fee" name="tariff_fee" value="2500"> </td>
            </tr>
            <tr>
              <td> <font size="-1">Deeds Office</font></td>
              <td> <input type="text" id="lodge" name="lodge"></td>
            </tr>
            <tr>
              <td> <font size="-1">Sundries</font></td>
              <td> <input type="text" id="sundry" name="sundry" value="450.00"> </td>
            </tr>
        
            <tr>
              <td> <font size="-1" color="#184498"><b>TOTAL</b></font></td>
              <td> <input type="text" id="total" name="total"></td>
            </tr>
          </table>
        </form>

        <p>
          <font face="Arial" size="1">
          This calculator is based on the recommended tariff published in the Government Gazette and was last updated in April 2011. It is accurate for costs of the registration of a bond of up to R20-million, but does NOT include any charges which may be raised by the financial institution. The figures should therefore be used as a guide only.
          </font>
        </p>
	</div>
  </div>
</div>
