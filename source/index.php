<?php
	$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

    if ($lang != 'fr' && $lang != 'de') {
        $lang = 'en';
    } elseif ($lang = 'fr') {
        $lang = 'fr';
    } elseif ($lang = 'de') {
        $lang = 'de';
    }
	header("Location: $lang/",TRUE,301);
 ?>
