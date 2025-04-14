<?php

namespace App\Models;

use CodeIgniter\Database\Query;
use CodeIgniter\Model;
# use App\Controllers\Pattern\SystemMessageController;

class HFormIntranetDegaseModel extends Model
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
    protected $dbCreate;
    protected $dbRead;
    protected $dbUpdate;
    protected $dBdelete;
    protected $message;
    protected $affectedRows;

    public function getColumnsFromTable($parameter1 = 'column', $parameter2 = 'value_type', $parameter3 = 'value_key')
    {
        $ModelBaseCrud = new BaseMainConfigurationModel;
        $getTable = $ModelBaseCrud->getColumnsFromTable($this->table, $this->primaryKey, $parameter1, $parameter2, $parameter3);
        return $getTable;
    }
    
}
