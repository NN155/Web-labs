<?php

function solve1() {
    $a = 12.84;
    $x = 2.21;
    return (M_E * sin($x)) / (tan(log($a, 2)));
}
function solve2($x) {
    return intval(strrev((string) $x));
}
function solve3($x) {
    for($i = 0; $i < count($x); $i++) {
        $x[$i] = $x[$i] > 5? 0.2 : $x[$i];
    }
    return $x;
}
function solve4($x) {
    $count = 0;
    for($i = 0; $i < count($x); $i++) {
        for($j = 0; $j < count($x[$i]); $j++) {
            $count = $x[$i][$j] === 0? $count + 1: $count;
        }
    }
    return $count;
}
function solve5($x) {
    $max = $x[0];
    for($i = 0; $i < count($x); $i++) {
        $max = $max > $x[$i]? $max : $x[$i];
    }
    return $max;
}
function solve6($x) {
    $array = explode(" ", $x);
    $newString = "";
    for($i = 0; $i < count($array); $i++) {
        $newString .= $array[$i][-1];
    }
    return $newString;
}
print_r("Task1: " . solve1() . "\n");
$x = 1132616;
print_r("Task2: " . solve2($x) . "\n");
$x = [0,1,2,3,4,5,6,7];
$x = solve3($x);
print_r("Task3: ");
for($i = 0; $i < count($x); $i++) {
    print_r($x[$i]. " ");
}
$x = [[1,2,3,5,6,0], [0,3,4,0,6,7], [0,3,0,5,6,7]];
print_r("\nTask4: " . solve4($x) . "\n");
$x = [0,1,2,3,-12,4];
print_r("Task5: " . solve5($x) . "\n");
$x = "Sidop Hello IPZ apple";
print_r("Task6: " . solve6($x) . "\n");
?>
