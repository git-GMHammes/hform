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
use App\Controllers\HFormDatabase\DbFormBuilderStyleRowController;
use App\Controllers\HFormDatabase\DbFormComplementLabelController;
use App\Controllers\HFormDatabase\DbFormComplementTypeController;
use App\Controllers\HFormDatabase\DbFormBuilderController;
// use App\Controllers\Pattern\TokenCsrfController;
// use App\Controllers\Pattern\SystemMessageController;
// use App\Controllers\Pattern\ObjetoDbController;
// use App\Controllers\Pattern\SystemUploadDbController;
# 
use Exception;

class BuilderApiController extends ResourceController
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
    private $DbFormBuilderController;
    private $DbFormBuilderStyleRowController;
    private $DbFormComplementLabelController;
    private $DbFormComplementTypeController;
    private $message;

    public function __construct()
    {
        $this->uri = new \CodeIgniter\HTTP\URI(current_url());
        $this->DbIntranetDegaseController = new DbIntranetDegaseController();
        $this->DbQlikAdminController = new DbQlikAdminController();
        $this->DbHformController = new DbHformController();
        $this->DbSgcController = new DbSgcController();
        $this->DbSgpController = new DbSgpController();
        $this->DbFormBuilderStyleRowController = new DbFormBuilderStyleRowController();
        $this->DbFormComplementLabelController = new DbFormComplementLabelController();
        $this->DbFormComplementTypeController = new DbFormComplementTypeController();
        $this->DbFormBuilderController = new DbFormBuilderController();

        // $this->DbController = new ObjetoDbController();
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

    private function saveRequest(bool $choice_update = false, string $token_csrf = 'erro', array $processRequest = array())
    {
        $processRequestSuccess = false;
        $server = $_SERVER['SERVER_NAME'];
        if ($server !== '127.0.0.1') {
            $passToken = $this->tokenCsrf->valid_token_csrf($token_csrf);
        } else {
            $passToken = true;
        }
        if ($choice_update === true) {
            if ($passToken) {
                $id = (isset($processRequest['id'])) ? ($processRequest['id']) : (array());
                $dbResponse = $this->DbController->dbUpdate($id, $processRequest);
                if (isset($dbResponse["affectedRows"]) && $dbResponse["affectedRows"] > 0) {
                    $processRequestSuccess = true;
                }
            }
        } elseif ($choice_update === false) {
            if ($passToken) {
                // return $this->response->setJSON($processRequest, 200);
                $dbResponse = $this->DbController->dbCreate($processRequest);
                if (isset($dbResponse["affectedRows"]) && $dbResponse["affectedRows"] > 0) {
                    $processRequestSuccess = true;
                }
            }
        } else {
            $this->message->message(['ERRO: Dados enviados inválidos'], 'danger');
            $dbResponse = array();
            $processRequestSuccess = false;
        }
        #
        $dbSave = [
            'processRequestSuccess' => $processRequestSuccess,
            'dbResponse' => $dbResponse,
            'status' => !isset($processRequestSuccess) || $processRequestSuccess !== true ? 'trouble' : 'success',
            'message' => !isset($processRequestSuccess) || $processRequestSuccess !== true ? 'Erro - requisição que foi bem-formada mas não pôde ser seguida devido a erros semânticos.' : 'API loading data (dados para carregamento da API)',
            'cod_http' => !isset($processRequestSuccess) || $processRequestSuccess !== true ? 422 : 201,
        ];
        #
        return $dbSave;
    }

    private function getLabel($parameter){
        $this->DbFormComplementLabelController->dbFter($parameter);
        return null;
    }
    
    private function getType($parameter){
        return null;
    }

    # route POST /www/index.php/projeto/objeto/api/cadastrar/(:any)
    # route GET /www/index.php/projeto/objeto/api/cadastrar/(:any)
    # route POST /www/index.php/projeto/objeto/api/atualizar/(:any)
    # route GET /www/index.php/projeto/objeto/api/atualizar/(:any)
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function create_update($parameter1 = NULL, $parameter2 = NULL)
    {
        # Parâmentros para receber um POST
        $request = service('request');
        $getMethod = $request->getMethod();
        $pageGet = $this->request->getGet('page');
        $limitGet = $this->request->getGet('limit');
        $limit = (isset($limitGet) && !empty($limitGet)) ? ($limitGet) : (10);
        $page = (isset($pageGet) && !empty($pageGet)) ? ($pageGet) : (1);
        $processRequest = (array) $request->getVar();
        $dataBase = (isset($processRequest['database'])) ? ($processRequest['database']) : ($parameter1);
        $table = (isset($processRequest['table'])) ? ($processRequest['table']) : ($parameter2);
        // myPrint($dataBase, $table);
        #
        if (

            $dataBase === NULL ||
            $table === NULL
        ) {
            $dbResponse = array();
            $request = service('request');
            $apiRespond['getMethod'] = $request->getMethod();
            $apiRespond['method'] = __METHOD__;
            $apiRespond['function'] = __FUNCTION__;
            $apiRespond['message'] = '403 Forbidden - Directory access is forbidden.';
            return $this->response->setStatusCode(403)->setJSON($apiRespond);
        }
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
            foreach ($requestDb as $key => $value) {
                # code...
            }
            myPrint('$requestDb :: ', $requestDb);
            #
            $apiRespond = $this->setApiRespond('success', $getMethod, $requestDb);
            $response = $this->response->setStatusCode(201)->setJSON($apiRespond);
        } catch (\Exception $e) {
            $apiRespond = $this->setApiRespond('error', $getMethod, $requestDb, $e->getMessage());
            // myPrint('Exception $e :: ', $e->getMessage());
            $response = $this->response->setStatusCode(500)->setJSON($apiRespond);
        }

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