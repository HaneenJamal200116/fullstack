<?php
$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->name('*.php');

return (new PhpCsFixer\Config())
    ->setRules([
        '@PSR12' => true,
        'no_trailing_whitespace' => true,
        'no_extra_blank_lines' => true,
    ])
    ->setFinder($finder);
