<?php
$u = $_SERVER['HTTP_USER_AGENT'];

$isIE7  = (bool)preg_match('/msie 7./i', $u );
$isIE8  = (bool)preg_match('/msie 8./i', $u );
$isIE9  = (bool)preg_match('/msie 9./i', $u );
$isIE10 = (bool)preg_match('/msie 10./i', $u );

if ($isIE10) {
    echo "ie10";
}
elseif ($isIE9) {
    echo "ie9";
}
else if ($isIE8) {
    echo "ie8";
}
else{
	echo "lower version";
}
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
?>