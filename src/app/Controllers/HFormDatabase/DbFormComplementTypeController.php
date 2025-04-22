<?php

namespace App\Controllers\HFormDatabase;

// use App\Models\UploadModel;
use App\Controllers\BaseController;
use App\Controllers\Pattern\SystemBaseController;
use App\Controllers\Pattern\SystemMessageController;
// use App\Models\VCadastroAdolescentesModels;
use App\Models\FormComplementTypeModel;
use Exception;

class DbFormComplementTypeController extends BaseController
{
    // private $ModelUpload;
    // private $ModelsVCadastroAdolescentes;
    private $ModelFormComplementType;
    private $pagination;
    private $message;
    private $uri;

    public function __construct()
    {
        // $this->ModelUpload = new UploadModel();
        // $this->ModelsVCadastroAdolescentes = new VCadastroAdolescentesModels();
        $this->ModelFormComplementType = new FormComplementTypeModel();
        $this->pagination = new SystemBaseController();
        $this->message = new SystemMessageController();
        $this->uri = new \CodeIgniter\HTTP\URI(current_url());
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function index()
    {
        exit('403 Forbidden - Directory access is forbidden.');
    }

    # use App\Controllers\SystemUploadDbController;
    # private $DbController;
    # $this->DbController = new SystemUploadDbController();
    # $this->DbController->dbFields($fileds = array();
    public function dbFields($processRequestFields = array())
    {
        //myPrint($processRequestFields, 'src\app\Controllers\SystemUploadDbController.php', true);
        $dbCreate = array();
        $autoColumn = $this->ModelFormComplementType->getColumnsFromTable();
        // myPrint($autoColumn, 'src\app\Controllers\SystemUploadDbController.php', true);
        if (isset($autoColumn['COLUMN'])) {
            foreach ($autoColumn['COLUMN'] as $key_autoColumn => $value_autoColumn) {
                (isset($processRequestFields[$value_autoColumn])) ? ($dbCreate[$value_autoColumn] = $processRequestFields[$value_autoColumn]) : (NULL);
            }
        }

        (isset($processRequestFields['Registro'])) ? ($dbCreate['NumRegistro'] = $processRequestFields['Registro']) : (NULL);
        (isset($processRequestFields['PerfilId'])) ? ($dbCreate['perfil_id'] = $processRequestFields['PerfilId']) : (NULL);
        (isset($processRequestFields['GeneroIdentidadeId'])) ? ($dbCreate['genero_identidade_id'] = $processRequestFields['GeneroIdentidadeId']) : (NULL);
        (isset($processRequestFields['AcessoCadastroID'])) ? ($dbCreate['acesso_id'] = $processRequestFields['AcessoCadastroID']) : (NULL);
        (isset($processRequestFields['ResponsavelID'])) ? ($dbCreate['cadastro_id'] = $processRequestFields['ResponsavelID']) : (NULL);
        (isset($processRequestFields['MunicipioId'])) ? ($dbCreate['municipio_id'] = $processRequestFields['MunicipioId']) : (NULL);
        (isset($processRequestFields['SexoId'])) ? ($dbCreate['sexo_biologico_id'] = $processRequestFields['SexoId']) : (NULL);
        (isset($processRequestFields['UnidadeId'])) ? ($dbCreate['unidade_id'] = $processRequestFields['UnidadeId']) : (NULL);
        // myPrint($dbCreate, 'src\app\Controllers\ExempleDbController.php');
        return ($dbCreate);
    }

    # use App\Controllers\SystemUploadDbController;
    # private $DbController;
    # $this->DbController = new SystemUploadDbController();
    # $this->DbController->dbFields($fileds = array();
    public function dbFieldsFilter($processRequestFields = array())
    {
        // myPrint($processRequestFields, 'src\app\Controllers\SystemUploadDbController.php', true);
        $dbCreate = array();
        $autoColumn = $this->ModelsVCadastroAdolescentes->getColumnsFromTable();
        if (isset($autoColumn['COLUMN'])) {
            foreach ($autoColumn['COLUMN'] as $key_autoColumn => $value_autoColumn) {
                (isset($processRequestFields[$value_autoColumn])) ? ($dbCreate[$value_autoColumn] = $processRequestFields[$value_autoColumn]) : (NULL);
            }
        }
        if ($dbCreate == array()) {
            (isset($processRequestFields['filtroSelect'])) ? ($dbCreate['Nome'] = $processRequestFields['filtroSelect']) : (NULL);
        }
        // myPrint($dbCreate, 'src\app\Controllers\ExempleDbController.php');
        return ($dbCreate);
    }

    # use App\Controllers\TokenCsrfController;
    # $this->DbController = new ExempleDbController();
    # $this->DbController->dbCreate($parameter);
    public function dbCreate($parameter = NULL)
    {
        try {
            $this->ModelFormComplementType->dbCreate($this->dbFields($parameter));
            // myPrint($parameter, 'src\app\Controllers\AdolescenteDbController.php');
            $affectedRows = $this->ModelFormComplementType->affectedRows();
            if ($affectedRows > 0) {
                $dbCreate['insertID'] = $this->ModelFormComplementType->insertID();
                $dbCreate['affectedRows'] = $affectedRows;
                $dbCreate['dbCreate'] = $parameter;
            } else {
                $dbCreate['insertID'] = NULL;
                $dbCreate['affectedRows'] = $affectedRows;
                $dbCreate['dbCreate'] = $parameter;
            }
            $response = $dbCreate;
        } catch (\Exception $e) {
            if (DEBUG_MY_PRINT) {
                //myPrint($e->getMessage(), 'src\app\Controllers\ExempleDbController.php');
            }
            $message = $e->getMessage();
            $this->message->message([$message], 'danger', $parameter, 5);
            $response = array();
        }
        return $response;
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbRead($parameter = NULL, $page = 1, $limit = 10)
    {
        // myPrint($parameter, 'src\app\Controllers\AdolescenteDbController.php', true);
        // myPrint($page, 'src\app\Controllers\AdolescenteDbController.php');
        try {
            if ($parameter !== NULL) {
                $dbResponse = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('id', $parameter)
                    ->where('deleted_at', NULL)
                    ->orderBy('id', 'DESC')
                    ->dBread()
                    ->paginate(1, 'paginator', $page);
                //
            } else {
                $dbResponse = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('deleted_at', NULL)
                    ->orderBy('id', 'DESC')
                    ->dBread()
                    ->paginate($limit, 'paginator', $page);
                //
            }
            ;
            // Paginação
            $pager = \Config\Services::pager();
            $paginationLinks = $pager->makeLinks($page, $limit, $pager->getTotal('paginator'), 'default_full');
            $linksArray = $this->pagination->extractPaginationLinks($paginationLinks);
            //
            $response = array(
                'dbResponse' => $dbResponse,
                'linksArray' => $linksArray
            );
        } catch (\Exception $e) {
            if (DEBUG_MY_PRINT) {
                // myPrint($e->getMessage(), 'src\app\Controllers\ExempleDbController.php');
            }
            $message = $e->getMessage();
            $this->message->message([$message], 'danger', $parameter, 5);
            $response = array();
        }
        return $response;
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbFilter($parameter = NULL, $page = 1, $limit = 10)
    {
        $dt_inicio = isset($parameter['adolescente_data_cadastramento_inicio']) ? $parameter['adolescente_data_cadastramento_inicio'] : null;
        $dt_fim = isset($parameter['adolescente_data_cadastramento_fim']) ? $parameter['adolescente_data_cadastramento_fim'] : null;
        #
        if ($dt_inicio !== null && $dt_fim == null) {
            $parameter['created_at'] = $parameter['adolescente_data_cadastramento_inicio'];
        }
        #
        $parameter = $this->dbFieldsFilter($parameter);

        // myPrint($parameter, 'src\app\Controllers\AdolescenteDbController.php', true);

        try {
            if (in_array('id', array_keys($parameter))) {
                $limit = 1;
                $query = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('PerfilId', 1)
                    ->where('AcessoId', 2)
                    ->where('deleted_at', NULL);
            } elseif ($dt_inicio !== null && $dt_fim !== null) {
                $query = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('deleted_at', NULL)
                    ->where('created_at >=', $dt_inicio)
                    ->where('created_at <=', $dt_fim);
            } else {
                $query = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('PerfilId', 1)
                    ->where('AcessoId', 2)
                    ->where('deleted_at', NULL);
            }
            //
            foreach ($parameter as $key => $value) {
                // myPrint($key , $value, true);
                if ($key == 'id') {
                    $query = $query->where($key, $value);
                } else {
                    $query = $query->like($key, $value);
                }
            }

            $dbResponse = $query
                ->orderBy('updated_at', 'DESC')
                ->paginate($limit, 'paginator', $page);

            // Paginação
            $pager = \Config\Services::pager();
            $paginationLinks = $pager->makeLinks($page, $limit, $pager->getTotal('paginator'), 'default_full');
            $linksArray = $this->pagination->extractPaginationLinks($paginationLinks);
            //
            // myPrint($dbResponse, 'src\app\Controllers\AdolescenteDbController.php');
            $response = array(
                'dbResponse' => $dbResponse,
                'linksArray' => $linksArray
            );
            //
        } catch (\Exception $e) {
            if (DEBUG_MY_PRINT) {
                myPrint($e->getMessage(), 'src\app\Controllers\ExempleDbController.php');
            }
            $message = $e->getMessage();
            $this->message->message([$message], 'danger', $parameter, 5);
            $response = array();
        }
        return $response;
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbUpdate($key, $parameter = NULL)
    {
        // myPrint($key, $parameter, true);
        try {
            if (
                !isset($parameter['deleted_at'])
                && empty($parameter['deleted_at'])
                && count($parameter) == 1
            ) {
                $this->ModelFormComplementType->dbUpdate($key, $parameter);
            } else {
                $this->ModelFormComplementType->dbUpdate($key, $this->dbFields($parameter));
                $ver = $this->dbFields($parameter);
                // myPrint($key, 'src\app\Controllers\AdolescenteDbController.php', true);
                // myPrint($ver, 'src\app\Controllers\AdolescenteDbController.php', true);
            }
            #
            $affectedRows = $this->ModelFormComplementType->affectedRows();
            #
            if ($affectedRows > 0) {
                $dbUpdate['updateID'] = $key;
                $dbUpdate['affectedRows'] = $affectedRows;
                $dbUpdate['dbUpdate'] = $parameter;
            } else {
                $dbUpdate['updateID'] = $key;
                $dbUpdate['affectedRows'] = $affectedRows;
                $dbUpdate['dbUpdate'] = $parameter;
            }
            $response = $dbUpdate;
            // myPrint($response, 'src\app\Controllers\AdolescenteDbController.php');
        } catch (\Exception $e) {
            if (DEBUG_MY_PRINT) {
                // myPrint($e->getMessage(), 'src\app\Controllers\ExempleDbController.php');
            }
            $message = $e->getMessage();
            $this->message->message([$message], 'danger', $parameter, 5);
            $response = array();
        }
        return $response;
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbDelete($parameter = NULL)
    {
        try {
            $this->ModelFormComplementType->dbDelete('id', $parameter);
            $affectedRows = $this->ModelsVCadastroAdolescentes->affectedRows();
            if ($affectedRows > 0) {
                $dbUpdate['updateID'] = $parameter;
                $dbUpdate['affectedRows'] = $affectedRows;
            } else {
                $dbUpdate['updateID'] = $parameter;
                $dbUpdate['affectedRows'] = $affectedRows;
            }
            $response = $dbUpdate;
        } catch (\Exception $e) {
            if (DEBUG_MY_PRINT) {
                myPrint($e->getMessage(), 'src\app\Controllers\ExempleDbController.php');
            }
            $message = $e->getMessage();
            $this->message->message([$message], 'danger', $parameter, 5);
            $response = array();
        }
        return $response;
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function dbCleaner($parameter = NULL, $page = 1)
    {
        $limit = 10;
        try {
            // exit('src\app\Controllers\AdolescenteDbController.php');
            if (isset($processRequest['id'])) {
                $dbResponse = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('id', $processRequest['id'])
                    ->where('deleted_at !=', NULL)
                    ->orderBy('id', 'DESC')
                    ->dBread()
                    ->paginate(1, 'paginator', $page);
                //
            } elseif ($parameter !== NULL) {
                $dbResponse = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('id', $parameter)
                    ->where('deleted_at !=', NULL)
                    ->orderBy('id', 'DESC')
                    ->dBread()
                    ->paginate(1, 'paginator', $page);
                //
            } else {
                $dbResponse = $this
                    ->ModelsVCadastroAdolescentes
                    ->where('deleted_at !=', NULL)
                    ->orderBy('id', 'DESC')
                    ->dBread()
                    ->paginate($limit, 'paginator', $page);
                //
            }
            ;
            // Paginação
            $pager = \Config\Services::pager();
            $paginationLinks = $pager->makeLinks($page, $limit, $pager->getTotal('paginator'), 'default_full');
            $linksArray = $this->pagination->extractPaginationLinks($paginationLinks);
            //
            $response = array(
                'dbResponse' => $dbResponse,
                'linksArray' => $linksArray
            );
            //
        } catch (\Exception $e) {
            if (DEBUG_MY_PRINT) {
                myPrint($e->getMessage(), 'src\app\Controllers\ExempleDbController.php');
            }
            $message = $e->getMessage();
            $this->message->message([$message], 'danger', $parameter, 5);
            $response = array();
        }
        return $response;
    }
}
