<?php
#
namespace App\Controllers\HFormDatabase;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
# 
use App\Controllers\HFormDatabase\DbIntranetDegaseController;
use App\Controllers\HFormDatabase\DbQlikAdminController;
use App\Controllers\HFormDatabase\DbHformController;
use App\Controllers\HFormDatabase\DbSgcController;
use App\Controllers\HFormDatabase\DbSgpController;
# use App\Controllers\Pattern\TokenCsrfController;
# use App\Controllers\Pattern\SystemMessageController;
# use App\Controllers\Pattern\ObjetoDbController;
# use App\Controllers\Pattern\SystemUploadDbController;
# 
use Exception;

class ApiController extends ResourceController
{
    use ResponseTrait;
    private $ModelResponse;
    private $uri;
    private $tokenCsrf;
    private $DbIntranetDegaseController;
    private $DbQlikAdminController;
    private $DbHformController;
    private $DbSgcController;
    private $DbSgpController;
    private $message;

    public function __construct()
    {
        $this->uri = new \CodeIgniter\HTTP\URI(current_url());
        $this->DbIntranetDegaseController = new DbIntranetDegaseController();
        $this->DbQlikAdminController = new DbQlikAdminController();
        $this->DbHformController = new DbHformController();
        $this->DbSgcController = new DbSgcController();
        $this->DbSgpController = new DbSgpController();
        // $this->tokenCsrf = new TokenCsrfController();
        // $this->message = new SystemMessageController();
        #
    }

    # route POST /www/index.php/project/method
    # route GET /www/index.php/project/method
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function index($parameter = NULL)
    {
        $request = service('request');
        $apiRespond['getMethod'] = $request->getMethod();
        $apiRespond['method'] = __METHOD__;
        $apiRespond['function'] = __FUNCTION__;
        $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
        return $this->response->setStatusCode(403)->setJSON($apiRespond);
    }

    private function setApiRespond(string $status = 'success', string $getMethod = 'GET', array $requestDb = array(), $message = 'API loading data (dados para carregamento da API)')
    {
        # $message = 'API loading data (dados para carregamento da API)',
        $apiRespond = [
            'status' => $status,
            'message' => $message,
            'date' => date('Y-m-d'),
            'api' => [
                'version' => '1.0',
                'method' => $getMethod,
                'description' => 'API Description',
                'content_type' => 'application/x-www-form-urlencoded'
            ],
            'result' => $requestDb,
            'metadata' => [
                'page_title' => 'Application title',
                'getURI' => $this->uri->getSegments(),
                // Você pode adicionar campos comentados anteriormente se forem relevantes
                // 'method' => '__METHOD__',
                // 'function' => '__FUNCTION__',
            ]
        ];

        return $apiRespond;
    }

    # route POST /www/index.php/hform/api/database/exibir/(:any)
    # route GET /www/index.php/hform/api/database/exibir/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function showHDatabase($parameter = NULL)
    {
        # Parâmentros para receber um POST
        $request = service('request');
        $getMethod = $request->getMethod();
        $pageGet = $this->request->getGet('page');
        $limitGet = $this->request->getGet('limit');
        $limit = (isset($limitGet) && !empty($limitGet)) ? ($limitGet) : (10);
        $page = (isset($pageGet) && !empty($pageGet)) ? ($pageGet) : (1);
        $processRequest = (array) $request->getVar();
        $json = isset($processRequest['json']) && $processRequest['json'] == 1 ? 1 : 0;
        $id = isset($processRequest['id']) ? ($processRequest['id']) : ($parameter);
        #
        $requestDb[] = $this->DbIntranetDegaseController->showHDataBase();
        $requestDb[] = $this->DbQlikAdminController->showHDataBase();
        $requestDb[] = $this->DbHformController->showHDataBase();
        $requestDb[] = $this->DbSgcController->showHDataBase();
        $requestDb[] = $this->DbSgpController->showHDataBase();
        #
        try {
            // myPrint('$requestDb :: ', $requestDb);
            #
            $apiRespond = $this->setApiRespond('success', $getMethod, $requestDb);
            $response = $this->response->setStatusCode(201)->setJSON($apiRespond);
        } catch (\Exception $e) {
            $apiRespond = $this->setApiRespond('error', $getMethod, $requestDb, $e->getMessage());
            // myPrint('Exception $e :: ', $e->getMessage());
            $response = $this->response->setStatusCode(500)->setJSON($apiRespond);
        }
        if ($json == 1) {
            return $response;
            // return redirect()->back();
            // return redirect()->to('project/endpoint/parameter/parameter/' . $parameter);
        } else {
            return $response;
        }
    }

    # route POST /www/index.php/hform/api/table/exibir/(:any)
    # route GET /www/index.php/hform/api/table/exibir/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function showHTable($parameter = NULL)
    {
        # Parâmentros para receber um POST
        $request = service('request');
        $getMethod = $request->getMethod();
        $pageGet = $this->request->getGet('page');
        $limitGet = $this->request->getGet('limit');
        $limit = (isset($limitGet) && !empty($limitGet)) ? ($limitGet) : (10);
        $page = (isset($pageGet) && !empty($pageGet)) ? ($pageGet) : (1);
        $processRequest = (array) $request->getVar();
        $json = isset($processRequest['json']) && $processRequest['json'] == 1 ? 1 : 0;
        $id = isset($processRequest['id']) ? ($processRequest['id']) : ($parameter);
        #
        try {
            #
            switch ($parameter) {
                case 'intranetdegase':
                    $requestDb[] = $this->DbIntranetDegaseController->showHTable();
                    break;

                case 'qlikadmin':
                    $requestDb[] = $this->DbQlikAdminController->showHTable();
                    break;

                case 'hform':
                    $requestDb[] = $this->DbHformController->showHTable();
                    break;

                case 'sgc':
                    $requestDb[] = $this->DbSgcController->showHTable();
                    break;

                case 'sgp':
                    $requestDb[] = $this->DbSgpController->showHTable();
                    break;

                default:
                    $requestDb['intranetdegase'] = $this->DbIntranetDegaseController->showHTable();
                    $requestDb['qlikadmin'] = $this->DbQlikAdminController->showHTable();
                    $requestDb['hform'] = $this->DbHformController->showHTable();
                    $requestDb['sgc'] = $this->DbSgcController->showHTable();
                    $requestDb['sgp'] = $this->DbSgpController->showHTable();
                    break;
            }
            // myPrint('$requestDb :: ', $requestDb);
            #
            $apiRespond = $this->setApiRespond('success', $getMethod, $requestDb);
            $response = $this->response->setStatusCode(201)->setJSON($apiRespond);
        } catch (\Exception $e) {
            $apiRespond = $this->setApiRespond('error', $getMethod, $requestDb, $e->getMessage());
            // myPrint('Exception $e :: ', $e->getMessage());
            $response = $this->response->setStatusCode(500)->setJSON($apiRespond);
        }
        if ($json == 1) {
            return $response;
            // return redirect()->back();
            // return redirect()->to('project/endpoint/parameter/parameter/' . $parameter);
        } else {
            return $response;
        }
    }

    # route POST /www/index.php/hform/api/column/exibir/(:any)
    # route GET /www/index.php/hform/api/column/exibir/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function ShowHColumnFromTable($parameter1 = NULL, $parameter2 = NULL)
    {
        if ($parameter1 === NULL || $parameter2 === NULL) {
            $dbResponse = array();
            $request = service('request');
            $apiRespond['getMethod'] = $request->getMethod();
            $apiRespond['method'] = __METHOD__;
            $apiRespond['function'] = __FUNCTION__;
            $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
            return $this->response->setStatusCode(403)->setJSON($apiRespond);
        }

        # Parâmentros para receber um POST
        $request = service('request');
        $getMethod = $request->getMethod();
        $pageGet = $this->request->getGet('page');
        $limitGet = $this->request->getGet('limit');
        $limit = (isset($limitGet) && !empty($limitGet)) ? ($limitGet) : (10);
        $page = (isset($pageGet) && !empty($pageGet)) ? ($pageGet) : (1);
        $processRequest = (array) $request->getVar();
        $json = isset($processRequest['json']) && $processRequest['json'] == 1 ? 1 : 0;
        $id = isset($processRequest['id']) ? ($processRequest['id']) : ($parameter1);
        #
        try {
            switch ($parameter1) {
                case 'intranetdegase':
                    $requestDb['intranetdegase'] = $this->DbIntranetDegaseController->ShowHColumnFromTable($parameter2);
                    break;

                case 'qlikadmin':
                    $requestDb['qlikadmin'] = $this->DbQlikAdminController->ShowHColumnFromTable($parameter2);
                    break;

                case 'hform':
                    $requestDb['hform'] = $this->DbHformController->ShowHColumnFromTable($parameter2);
                    break;

                case 'sgc':
                    $requestDb['sgc'] = $this->DbSgcController->ShowHColumnFromTable($parameter2);
                    break;

                case 'sgp':
                    $requestDb['sgp'] = $this->DbSgpController->ShowHColumnFromTable($parameter2);
                    break;

                default:
                    $requestDb['intranetdegase'] = $this->DbIntranetDegaseController->ShowHColumnFromTable($parameter2);
                    $requestDb['qlikadmin'] = $this->DbQlikAdminController->ShowHColumnFromTable($parameter2);
                    $requestDb['hform'] = $this->DbHformController->ShowHColumnFromTable($parameter2);
                    $requestDb['sgc'] = $this->DbSgcController->ShowHColumnFromTable($parameter2);
                    $requestDb['sgp'] = $this->DbSgpController->ShowHColumnFromTable($parameter2);
                    break;
            }
            #
            // myPrint('$requestDb :: ', $requestDb);
            #
            $apiRespond = $this->setApiRespond('success', $getMethod, $requestDb);
            $response = $this->response->setStatusCode(201)->setJSON($apiRespond);
        } catch (\Exception $e) {
            $apiRespond = $this->setApiRespond('error', $getMethod, $requestDb, $e->getMessage());
            // myPrint('Exception $e :: ', $e->getMessage());
            $response = $this->response->setStatusCode(500)->setJSON($apiRespond);
        }
        if ($json == 1) {
            return $response;
            // return redirect()->back();
            // return redirect()->to('project/endpoint/parameter/parameter/' . $parameter);
        } else {
            return $response;
        }
    }

    # route POST /www/index.php/hform/api/columntipo/exibir/(:any)
    # route GET /www/index.php/hform/api/columntipo/exibir/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function ShowHColumnTipoFromTable($parameter = NULL)
    {
        if ($parameter === NULL) {
            $dbResponse = array();
            $request = service('request');
            $apiRespond['getMethod'] = $request->getMethod();
            $apiRespond['method'] = __METHOD__;
            $apiRespond['function'] = __FUNCTION__;
            $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
            return $this->response->setStatusCode(403)->setJSON($apiRespond);
        }

        # Parâmentros para receber um POST
        $request = service('request');
        $getMethod = $request->getMethod();
        $pageGet = $this->request->getGet('page');
        $limitGet = $this->request->getGet('limit');
        $limit = (isset($limitGet) && !empty($limitGet)) ? ($limitGet) : (10);
        $page = (isset($pageGet) && !empty($pageGet)) ? ($pageGet) : (1);
        $processRequest = (array) $request->getVar();
        $json = isset($processRequest['json']) && $processRequest['json'] == 1 ? 1 : 0;
        $id = isset($processRequest['id']) ? ($processRequest['id']) : ($parameter);
        #
        $requestDb = $this->DbQlikAdminController->ShowHColumnTipoFromTable($parameter);
        try {
            #
            // myPrint('$requestDb :: ', $requestDb);
            #
            $apiRespond = $this->setApiRespond('success', $getMethod, $requestDb);
            $response = $this->response->setStatusCode(201)->setJSON($apiRespond);
        } catch (\Exception $e) {
            $apiRespond = $this->setApiRespond('error', $getMethod, $requestDb, $e->getMessage());
            // myPrint('Exception $e :: ', $e->getMessage());
            $response = $this->response->setStatusCode(500)->setJSON($apiRespond);
        }
        if ($json == 1) {
            return $response;
            // return redirect()->back();
            // return redirect()->to('project/endpoint/parameter/parameter/' . $parameter);
        } else {
            return $response;
        }
    }

    # route POST /www/index.php/projeto/objeto/api/cadastrar/(:any)
    # route GET /www/index.php/projeto/objeto/api/cadastrar/(:any)
    # route POST /www/index.php/projeto/objeto/api/atualizar/(:any)
    # route GET /www/index.php/projeto/objeto/api/atualizar/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function create_update($parameter = NULL)
    {
        $dbResponse = array();
        $request = service('request');
        $apiRespond['getMethod'] = $request->getMethod();
        $apiRespond['method'] = __METHOD__;
        $apiRespond['function'] = __FUNCTION__;
        $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
        return $this->response->setStatusCode(403)->setJSON($apiRespond);
    }

    # route POST /www/index.php/projeto/objeto/api/filtrar/(:any)
    # route GET /www/index.php/projeto/objeto/api/filtrar/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbFilter($parameter = NULL)
    {
        $request = service('request');
        $apiRespond['getMethod'] = $request->getMethod();
        $apiRespond['method'] = __METHOD__;
        $apiRespond['function'] = __FUNCTION__;
        $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
        return $this->response->setStatusCode(403)->setJSON($apiRespond);
    }

    # route POST /www/index.php/projeto/objeto/api/listar/(:any)
    # route GET /www/index.php/projeto/objeto/api/listar/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbRead($parameter = NULL)
    {
        $request = service('request');
        $apiRespond['getMethod'] = $request->getMethod();
        $apiRespond['method'] = __METHOD__;
        $apiRespond['function'] = __FUNCTION__;
        $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
        return $this->response->setStatusCode(403)->setJSON($apiRespond);
    }

    # route POST /www/index.php/projeto/objeto/api/deletar/(:any)
    # route GET /www/index.php/projeto/objeto/api/deletar/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbDelete($parameter = NULL)
    {
        $request = service('request');
        $apiRespond['getMethod'] = $request->getMethod();
        $apiRespond['method'] = __METHOD__;
        $apiRespond['function'] = __FUNCTION__;
        $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
        return $this->response->setStatusCode(403)->setJSON($apiRespond);
    }

    # route POST /www/index.php/projeto/objeto/api/limpar/(:any)
    # route GET /www/index.php/projeto/objeto/api/limpar/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbClear($parameter = NULL)
    {
        $request = service('request');
        $apiRespond['getMethod'] = $request->getMethod();
        $apiRespond['method'] = __METHOD__;
        $apiRespond['function'] = __FUNCTION__;
        $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
        return $this->response->setStatusCode(403)->setJSON($apiRespond);
    }
}
#
?>