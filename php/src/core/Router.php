<?php

namespace app\core;

class Router 
{
    public Request $request;
    protected array $routes = [];

    public function __construct(Request $req) {
        $this->request = $req;
    }

    public function get($path, $callback) {
        $this->routes['get'][$path] = $callback;
    }

    public function resolve() 
    {
        $path = $this->request->getPath();
        $method = $this->request->getMethod();
        $callback = $this->routes[$method][$path] ?? false;
        if($callback === false) {
            echo "Not Found";
            exit;
        }

        if(is_string($callback)) {
            echo $this->renderView($callback);
            exit;
        }

        return call_user_func($callback);
    }

    public function renderView($view) {
        $layoutContent = $this->layoutContent($view);
        $viewContent = $this->renderOnlyView($view);
        return str_replace('{{content}}', $viewContent, $layoutContent);
    }

    public function layoutContent($view) {
        ob_start();
        if($view === 'spa') {
            include_once __DIR__ . "/../views/layouts/spa.php";
        } else {

            include_once __DIR__ ."/../views/layouts/main.php";
        }
        return ob_get_clean();
    }

    protected function renderOnlyView($view) {
        ob_start();
        include_once __DIR__ ."/../views/$view.php";
        return ob_get_clean();
    }
}