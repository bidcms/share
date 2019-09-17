<?php
$target=explode('/',$_GET['target']);
echo file_get_contents($target[0].'.txt');