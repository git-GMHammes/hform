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
        # www/index.php/hform/api/builder(:any)
        $routes->group('builder', function ($routes) {
            # www/index.php/hform/api/builder/salvar/(:any)
            $routes->get('salvar', 'HFormDatabase\BuilderApiController::create_update');
            $routes->get('salvar/(:segment)', 'HFormDatabase\BuilderApiController::create_update/$1');
            $routes->get('salvar/(:any)', 'HFormDatabase\BuilderApiController::create_update/$1');
            $routes->post('salvar', 'HFormDatabase\BuilderApiController::create_update');
            $routes->post('salvar/(:any)', 'HFormDatabase\BuilderApiController::create_update/$1');
            # www/index.php/hform/api/builder/filtrar/(:any)
            $routes->get('filtrar', 'HFormDatabase\BuilderApiController::dbFilter');
            $routes->get('filtrar/(:segment)', 'HFormDatabase\BuilderApiController::dbFilter/$1');
            $routes->get('filtrar/(:any)', 'HFormDatabase\BuilderApiController::dbFilter/$1');
            $routes->post('filtrar', 'HFormDatabase\BuilderApiController::dbFilter');
            $routes->post('filtrar/(:any)', 'HFormDatabase\BuilderApiController::dbFilter/$1');
            # www/index.php/hform/api/builder/exibir/(:any)
            $routes->get('exibir', 'HFormDatabase\BuilderApiController::dbRead');
            $routes->get('exibir/(:segment)', 'HFormDatabase\BuilderApiController::dbRead/$1');
            $routes->get('exibir/(:any)', 'HFormDatabase\BuilderApiController::dbRead/$1');
            $routes->post('exibir', 'HFormDatabase\BuilderApiController::dbRead');
            $routes->post('exibir/(:any)', 'HFormDatabase\BuilderApiController::dbRead/$1');
            # www/index.php/hform/api/builder/deletar/(:any)
            $routes->get('deletar', 'HFormDatabase\BuilderApiController::dbDelete');
            $routes->get('deletar/(:segment)', 'HFormDatabase\BuilderApiController::dbDelete/$1');
            $routes->get('deletar/(:any)', 'HFormDatabase\BuilderApiController::dbDelete/$1');
            $routes->post('deletar', 'HFormDatabase\BuilderApiController::dbDelete');
            $routes->post('deletar/(:any)', 'HFormDatabase\BuilderApiController::dbDelete/$1');
            # www/index.php/hform/api/builder/limpar/(:any)
            $routes->get('limpar', 'HFormDatabase\BuilderApiController::dbClear');
            $routes->get('limpar/(:segment)', 'HFormDatabase\BuilderApiController::dbClear/$1');
            $routes->get('limpar/(:any)', 'HFormDatabase\BuilderApiController::dbClear/$1');
            $routes->post('limpar', 'HFormDatabase\BuilderApiController::dbClear');
            $routes->post('limpar/(:any)', 'HFormDatabase\BuilderApiController::dbClear/$1');
        });
    });
});