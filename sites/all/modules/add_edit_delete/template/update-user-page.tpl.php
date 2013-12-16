

<style type="text/css">
	.custom-title{
		font-size: 11px;
	}
	
	.remove-check{
		margin-right: 5px;
	}
	
	#remove-smac .edit-submit{
		clear: both;
		float: right;
		padding: 3px 5px;
	}
</style>

<?php 
	$acc = user_load_by_name(arg(1));
	$account = user_load($acc->uid);
	$strx = implode(',',$account->roles);
	$rolex = explode(',',$strx);
	$new_rolex = '';
	foreach($rolex as $val){
		if($val != 'authenticated user'){
			$new_rolex .= '<li>'.$val.'</li>';
		}
	}


	$xtitle = (!empty($account->field_title['und']['0']['value'])) ? $account->field_title['und']['0']['value']:'';
	$xfname = (!empty($account->field_first_name['und']['0']['value'])) ? $account->field_first_name['und']['0']['value']: '';
	$xlname = (!empty($account->field_last_name['und']['0']['value'])) ? $account->field_last_name['und']['0']['value'] : '';
	$xdob = (!empty($account->field_date_ob['und']['0']['value'])) ? $account->field_date_ob['und']['0']['value']: '';
	
	$newxcountry = (!empty($account->field_country_list['und']['0']['value']))? $account->field_country_list['und']['0']['value']: '';
	$namexcountry = (!empty($account->field_country_list['und']['0']['value']))? _new_get_country($account->field_country_list['und']['0']['value']): '';

	$xprov = _get_prov($account->field_not_ph_province['und']['0']['value']);
	$xcountry = (!empty($account->field_country['und']['0']['tid']))? get_country($account->field_country['und']['0']['tid']): '';
	$xmuni_city =(!empty($account->field_not_ph_city['und']['0']['value'])) ? $account->field_not_ph_city['und']['0']['value']:'';
	
	$xpostal = (!empty($account->field_post_zip_code['und']['0']['value'])) ? $account->field_post_zip_code['und']['0']['value'] : '';
	$xsmac1 = (!empty($account->field_smac_1['und']['0']['value']))? $account->field_smac_1['und']['0']['value']: '';
	$tin =(!empty($account->field_tin['und']['0']['value'])) ? $account->field_tin['und']['0']['value']: '';
	$street = (!empty($account->field_billing_address['und']['0']['value'])) ? $account->field_billing_address['und']['0']['value']: '';
	
	$mobile=(!empty($account->field_modile_no['und']['0']['value'])) ? $account->field_modile_no['und']['0']['value']: '';
	$tel=(!empty($account->field_tel_no['und']['0']['value'])) ? $account->field_tel_no['und']['0']['value']: '';
	$fax=(!empty($account->field_fax_no['und']['0']['value'])) ? $account->field_fax_no['und']['0']['value']: '';
	
	if(is_numeric($xmuni_city)){
		$ct = _x_get_minicipality($xmuni_city);
	}else{
		$ct = $xmuni_city;
	}
	
?>
<div id="per-wrapper">
	<div id="perso" class="user-info-custom">
        <div class="perso-title custom-title">Information<a href="/user-update-by-admin/information?width=500&height=600&iframe=true&name=<?php echo arg(1); ?>" style="float:right;" class="colorbox-load"><span>edit</span></a></div>
        <div class="perso-content custom-content">
            <div class="perso-content-title">Title: <span><?php echo get_title($xtitle); ?></span></div>
            <div class="perso-content-fname">Firstname: <span><?php echo $xfname; ?></span></div>
            <div class="perso-content-lname">Lastname: <span><?php echo $xlname; ?></span></div>
            <div class="perso-content-dob">Date of Birth: <span><?php echo date("Y-m-d", strtotime($xdob)); ?></span></div>
            <div class="perso-content-dob">TIN: <span><?php echo $tin; ?></span></div>
            <div class="perso-content-mobile">Mobile No.: <span><?php echo $mobile; ?></span></div>
            <div class="perso-content-Tel">Tel No.: <span><?php echo $tel; ?></span></div>
            <div class="perso-content-Fax">Fax No.: <span><?php echo $fax; ?></span></div>
        </div>
    </div>
    
    <div id="account" class="user-info-custom">
        <div class="account-title custom-title">Account<a href="/user-update-by-admin/account?width=500&height=550&iframe=true&name=<?php echo arg(1); ?>" class="colorbox-load" style="float:right;"><span>edit</span></a></div>
        <div class="account-content custom-content">
            <div class="account-content-username">Username: <span><?php echo $account->name; ?></span></div>
            <div class="account-content-email">Email: <span><?php echo $account->mail; ?></span></div>
            <div class="account-content-roles" style="position: relative;">Roles: <span><ul style="position: absolute; top: 0px; left: 41px;"><?php echo $new_rolex; ?></ul></span></div>
        </div>
    </div>

	<div id="address" class="user-info-custom">    
        <div class="address-title custom-title">Address<a href="/user-update-by-admin/address?width=500&height=500&iframe=true&name=<?php echo arg(1); ?>" style="float:right;" class="colorbox-load"><span>edit</span></a></div>
        <div class="address-content custom-content">
            <div class="address-content-country">Country: <span><?php echo $namexcountry; ?></span></div>
            <div class="address-content-prov">Province: <span><?php echo $xprov; ?></span></div>
            <div class="address-content-city-mun">City/Municipality: <span><?php echo $ct; ?></span></div>
            <div class="address-content-street">Street: <span><?php echo $street; ?></span></div>
            <div class="address-content-postal">ZIP/Postal Code: <span><?php echo $xpostal; ?></span></div>
        </div>
    </div>
    
    <div id="smac-number" class="user-info-custom" style="width: 250px;">
    	<div class="smac-title custom-title">SM Advantage/Prestige/BDO Card<a href="/add/loyalty?width=600&height=200&iframe=true&name=<?php echo arg(1); ?>" class="colorbox-load" style="float:right;"><span id="addc">Add</span></a></div>
        <div class="smac-content custom-content" style="float:left;">
                <?php if(!empty($xsmac1)) :?>
                    <form action="/remove/loyalty" method="get" name="remove-samc" id="remove-smac">
                        <div class="smac-no1 smac-no">
                            <span>
                                <?php
									echo '<input type="hidden" value="'.arg(1).'" name="userid">';
                                    $key_ctr = 0;
                                    $keyexplode = explode("xxx",$xsmac1);
                                    while(!empty($keyexplode[$key_ctr])){
                                        $cardtodisplay = $keyexplode[$key_ctr];
                                        $newcard1 = substr($cardtodisplay,0,4).'-'.substr($cardtodisplay,4,4).'-'.substr($cardtodisplay,8,4).'-'.substr($cardtodisplay,12,4);
                                        // echo $newcard1.substr($cardtodisplay,16) . '<br />';
                                        echo '<input class="remove-check checkbox" type="checkbox" name="smac-'.$key_ctr.'" value="'.$cardtodisplay.'" />'.$newcard1.substr($cardtodisplay,16).'<br />';
                                        $key_ctr += 1;
                                    }
                                ?>
                            </span>
                        </div>
                    <input type="submit" class="form-submit" align="right" value="Remove" id="edit-submit" name="op">
                    </form>
                <?php endif; ?>
        </div>
    </div>
</div>