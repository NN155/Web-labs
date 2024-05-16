<?php

$a = 5;
$b = 7; 
[$a ,$b] = [$b , $a];
print_r("Task1: " . "a = " . $a . ", " ."b = " . $b . "\n");

function solve2 ($number, $numbers) {
    return substr_count($numbers , $number);
}
$numbers = "4212425151";
$number = "4";
print_r("Task2: " . "Кількість входжень числа " . $number . " в "  . $numbers . " - разів ". solve2($number, $numbers) . "\n");

function deleteStr($str, $char) {
    $index = strpos($str, $char);
    if ($index !== false) {
    $before = substr($str, 0, $index);
    $after = substr($str, $index + 1, strlen($str));
    return $before . $after;
    }
    return $str;
}
function solve3($word1, $word2) {
    foreach (str_split($word1) as $char) {
        $word2 = deleteStr($word2, $char);
    }
    return strlen($word2) === 0;
}

$word1 = "abascss";
$word2 = "abacsss";
$ansver = solve3($word1, $word2)? "можливо скласти " : "не можливо скалсти ";
print_r("Task3: ". "З слова {$word1} ". $ansver . "слово {$word2}"  );


?>
