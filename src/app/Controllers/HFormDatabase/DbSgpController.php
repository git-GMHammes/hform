<?php

namespace App\Controllers\HFormDatabase;

use App\Controllers\BaseController;
use App\Models\BaseMainSgpModel;
use Exception;

class DbSgpController extends BaseController
{
    // private $ModelUpload;
    private $ModelHForm;
    private $ModelVTabelaPrincipal;
    private $message;
    private $uri;
    private $pagination;

    public function __construct()
    {
        $this->ModelHForm = new BaseMainSgpModel();
        $this->uri = new \CodeIgniter\HTTP\URI(current_url());
    }

    # route POST /www/index.php/project/method
    # route GET /www/index.php/project/method
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function index()
    {
        exit('403 Forbidden - Directory access is forbidden.');
    }

    # use App\Controllers\SystemUploadDbController;
    # private $DbController;
    # $this->DbController = new SystemUploadDbController();
    # $this->DbController->showDataBase();
    public function showHDataBase()
    {
        $autoDatabase = $this->ModelHForm->getHDatabase();
        // myPrint('$autoDatabase :: ', $autoDatabase);
        return ($autoDatabase);
    }

    # use App\Controllers\SystemUploadDbController;
    # private $DbController;
    # $this->DbController = new SystemUploadDbController();
    # $this->DbController->showTable();
    public function showHTable()
    {
        $autoDatabase = $this->ModelHForm->getHTable();
        // myPrint('$autoDatabase :: ', $autoDatabase);
        return ($autoDatabase);
    }

    # use App\Controllers\SystemUploadDbController;
    # private $DbController;
    # $this->DbController = new SystemUploadDbController();
    # $this->DbController->showTable();
    public function ShowHColumnFromTable($parameter = null)
    {
        $autoDatabase = $this->ModelHForm->getHColumnFromTable($parameter);
        // myPrint('$autoDatabase :: ', $autoDatabase);
        return ($autoDatabase);
    }

    # use App\Controllers\SystemUploadDbController;
    # private $DbController;
    # $this->DbController = new SystemUploadDbController();
    # $this->DbController->showTable();
    public function ShowHColumnTipoFromTable($parameter = null)
    {
        $autoDatabase = $this->ModelHForm->getHColumnTipoFromTable($parameter);
        // myPrint('$autoDatabase :: ', $autoDatabase);
        return ($autoDatabase);
    }

}

?>