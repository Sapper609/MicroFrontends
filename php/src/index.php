<?php

# require the applications
require_once __DIR__ .'/vendor/autoload.php';

# set the napespaces
use app\core\Application;

# wire up the applications
$app = new Application(dirname(__DIR__));

$app->router->get('/', 'home');
$app->router->get('/customer', 'customers');
$app->router->get('/react', 'spa');
$app->router->get('/login', 'login');

$app->run();
