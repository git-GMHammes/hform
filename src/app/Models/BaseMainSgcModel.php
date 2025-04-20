<?php

namespace App\Models;

use CodeIgniter\Database\Query;
use CodeIgniter\Model;
use App\Controllers\Pattern\SystemMessageController;

class BaseMainSgcModel extends Model
{

    protected $DBGroup = DATABASE_CONNECTION_INTRANET_DEGASE;

    protected $table = '';
    protected $primaryKey = '';
    protected $useAutoIncrement = true;
    protected $returnType = 'array';
    protected $allowedFields = [];
    protected $validationRules = [];
    protected $validationMessages = [];
    protected $skipValidation = false;

    protected $useTimestamps = false;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $deletedField = 'deleted_at';

    protected $dbInsert;
    protected $dbRead;
    protected $message;
    protected $affectedRows;
    protected $erro_db;

    # App\Models\BaseMainConfigurationModel;
    # $ModelBaseCrud = new BaseMainConfigurationModel;
    # $ModelBaseCrud->getDatabase();
    public function getHDatabase()
    {
        $this->primaryKey = (string) 'id';
        $this->table = 'table';
        $query = $this->query("SHOW DATABASES;");
        // myPrint('$query :: ', $query);
        $results = $query->getResult();
        // myPrint('$results :: ', $results);
        $clientInfo = $query->connID->client_info;
        $hostInfo = $query->connID->host_info;
        $database = $results[0]->Database;
        #
        $dbReturn = array(
            'clientInfo' => $clientInfo,
            'hostInfo' => $hostInfo,
            'database' => $database,
        );
        return $dbReturn;
    }

    # App\Models\BaseMainConfigurationModel;
    # $ModelBaseCrud = new BaseMainConfigurationModel;
    # $ModelBaseCrud->getTables();
    public function getHTable()
    {
        $this->primaryKey = (string) 'id';
        $this->table = 'table';
        $query = $this->query("SHOW TABLES");
        $results = $query->getResult();
        // myPrint('$results :: ', $results);
        return $results;
    }

    # App\Models\BaseCrudModel;
    # $ModelBaseCrud = new BaseCrudModel;
    # $ModelBaseCrud->getHColumnsFromTable($dbTable = null);
    # $dbTable, $primaryKey;
    public function getHColumnFromTable($dbTable = null)
    {
        $this->primaryKey = (string) 'id';
        $this->table = $dbTable;
        $query = $this->query("SELECT COLUMN_NAME " .
            "FROM INFORMATION_SCHEMA.COLUMNS " .
            "WHERE TABLE_NAME = '" . $dbTable .
            "';");
        $results = $query->getResult();
        // myPrint('$results :: ', $results);
        return $results;
    }

    # App\Models\BaseCrudModel;
    # $ModelBaseCrud = new BaseCrudModel;
    # $ModelBaseCrud->getHColumnsFromTable($dbTable = null);
    # $dbTable, $primaryKey;
    public function getHColumnTipoFromTable($dbTable = null)
    {
        $this->primaryKey = (string) 'id';
        $this->table = $dbTable;
        $query = $this->query("SELECT " .
            "COLUMN_NAME, " .
            "DATA_TYPE, " .
            "CHARACTER_MAXIMUM_LENGTH " .
            // "IS_NULLABLE, " .
            // "COLUMN_KEY, " .
            // "COLUMN_DEFAULT, " .
            // "EXTRA " .
            "FROM INFORMATION_SCHEMA.COLUMNS " .
            "WHERE TABLE_NAME = '" . $dbTable .
            "';");
        $results = $query->getResult();
        // myPrint('$results :: ', $results);
        return $results;
    }
}
