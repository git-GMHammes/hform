<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->group('hform', function ($routes) {
    # www/index.php/hform/api/(:any)
    $routes->group('api', function ($routes) {
        # www/index.php/hform/api/database(:any)
        $routes->group('database', function ($routes) {
            # www//(:any)
            $routes->get('exibir', 'HFormDatabase\ApiController::showHDatabase');
            $routes->get('exibir/(:segment)', 'HFormDatabase\ApiController::showHDatabase/$1');
            $routes->get('exibir/(:any)', 'HFormDatabase\ApiController::showHDatabase/$1');
            $routes->post('exibir', 'HFormDatabase\ApiController::showHDatabase');
            $routes->post('exibir/(:any)', 'HFormDatabase\ApiController::showHDatabase/$1');
        });
        # www/index.php/hform/api/database/exibir(:any)
        $routes->group('table', function ($routes) {
            # www/index.php/hform/api/table/exibir/(:any)
            $routes->get('exibir', 'HFormDatabase\ApiController::showHTable');
            $routes->get('exibir/(:segment)', 'HFormDatabase\ApiController::showHTable/$1');
            $routes->get('exibir/(:any)', 'HFormDatabase\ApiController::showHTable/$1');
            $routes->post('exibir', 'HFormDatabase\ApiController::showHTable');
            $routes->post('exibir/(:any)', 'HFormDatabase\ApiController::showHTable/$1');
        });
        # www/index.php/hform/api/column(:any)
        $routes->group('column', function ($routes) {
            # www/index.php/hform/api/column/exibir/(:any)
            $routes->get('exibir', 'HFormDatabase\ApiController::ShowHColumnFromTable');
            $routes->get('exibir/(:segment)', 'HFormDatabase\ApiController::ShowHColumnFromTable/$1');
            $routes->get('exibir/(:any)', 'HFormDatabase\ApiController::ShowHColumnFromTable/$1');
            $routes->post('exibir', 'HFormDatabase\ApiController::ShowHColumnFromTable');
            $routes->post('exibir/(:any)', 'HFormDatabase\ApiController::ShowHColumnFromTable/$1');
        });
        # www/index.php/hform/api/columntipo(:any)
        $routes->group('columntipo', function ($routes) {
            # www/index.php/hform/api/columntipo/exibir/(:any)
            $routes->get('exibir', 'HFormDatabase\ApiController::ShowHColumnTipoFromTable');
            $routes->get('exibir/(:segment)', 'HFormDatabase\ApiController::ShowHColumnTipoFromTable/$1');
            $routes->get('exibir/(:any)', 'HFormDatabase\ApiController::ShowHColumnTipoFromTable/$1');
            $routes->post('exibir', 'HFormDatabase\ApiController::ShowHColumnTipoFromTable');
            $routes->post('exibir/(:any)', 'HFormDatabase\ApiController::ShowHColumnTipoFromTable/$1');
        });
    });
});