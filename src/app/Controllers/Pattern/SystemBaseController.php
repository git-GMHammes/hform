<?php

namespace App\Controllers\Pattern;

use CodeIgniter\Controller;
use Exception;

class SystemBaseController extends Controller
{
    private $message;
    public function __construct()
    {
        $this->message = array();
    }

    # route POST /www/sigla/rota
    # route GET /www/sigla/rota
    # Informação sobre o controller
    # retorno do controller [JSON]
    public function index()
    {
        exit('403 Forbidden - Directory access is forbidden.');
    }

    # use App\Controllers\Pattern\SystemBaseController;
    # private $pagination;
    # $this->pagination = new SystemBaseController();
    # $linksArray = $this->pagination->extractPaginationLinks($paginationLinks);
    public function extractPaginationLinks($paginationLinks)
    {
        $dom = new \DOMDocument();
        @$dom->loadHTML($paginationLinks);
        $links = [];

        foreach ($dom->getElementsByTagName('a') as $node) {
            $href = $node->getAttribute('href');
            $parsedUrl = parse_url($href);
            parse_str($parsedUrl['query'], $queryParams);

            $page = isset($queryParams['page']) ? $queryParams['page'] : 1;

            // Tradução dos textos (Exemplo: adaptado para português)
            $text = $node->textContent;
            // myPrint($text, '', true);
            $text = str_replace("Previous", "Anterior", $text);
            $text = str_replace("First", "Primeiro", $text);
            $text = str_replace("Next", "Próximo", $text);
            $text = str_replace("Last", "Último", $text);

            $links[] = [
                'href' => '?page=' . $page,
                'text' => $text
            ];
        }
        // exit('FIM');
        return $links;
    }

    # use App\Controllers\Pattern\SystemBaseController;
    # private $viewValidacao;
    # $this->viewValidacao = new SystemBaseController();
    # $loadView2 = $this->viewValidacao->camposValidacao();
    public function camposValidacao()
    {
        // Caminho da pasta que deseja listar
        $folderPath = APPPATH . 'Views' . DIRECTORY_SEPARATOR . 'fia/ptpa' . DIRECTORY_SEPARATOR . 'camposValidacao';

        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), ['.', '..']);
        } else {
            $files = [];
        }
        // Caminho da pasta que deseja listar
        $folderPath = APPPATH . 'Views' . DIRECTORY_SEPARATOR . 'fia/ptpa' . DIRECTORY_SEPARATOR . 'camposValidacao';

        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), ['.', '..']);
        } else {
            $files = [];
        }

        // Remove a extensão .php dos arquivos e adiciona o caminho
        $files = array_map(function ($file) {
            return 'fia/ptpa/camposValidacao/' . pathinfo($file, PATHINFO_FILENAME);
        }, $files);

        return $files;
    }

    # use App\Controllers\Pattern\SystemBaseController;
    # private $viewPadroes;
    # $this->viewPadroes = new SystemBaseController();
    # $loadView3 = $this->viewPadroes->camposValidacao();
    public function camposPadroes()
    {
        // Caminho da pasta que deseja listar
        $folderPath = APPPATH . 'Views' . DIRECTORY_SEPARATOR . 'fia/ptpa' . DIRECTORY_SEPARATOR . 'camposPadroes';

        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), ['.', '..']);
        } else {
            $files = [];
        }
        // Caminho da pasta que deseja listar
        $folderPath = APPPATH . 'Views' . DIRECTORY_SEPARATOR . 'fia/ptpa' . DIRECTORY_SEPARATOR . 'camposPadroes';

        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), ['.', '..']);
        } else {
            $files = [];
        }

        // Remove a extensão .php dos arquivos e adiciona o caminho
        $files = array_map(function ($file) {
            return 'fia/ptpa/camposPadroes/' . pathinfo($file, PATHINFO_FILENAME);
        }, $files);

        return $files;
    }

    # use App\Controllers\Pattern\SystemBaseController;
    # private $viewCamposFormatacao;
    # $this->viewCamposFormatacao = new SystemBaseController();
    # $loadView3 = $this->viewCamposFormatacao->camposFormatacao();
    public function camposFormatacao()
    {
        // Caminho da pasta que deseja listar
        $folderPath = APPPATH . 'Views' . DIRECTORY_SEPARATOR . 'fia/ptpa' . DIRECTORY_SEPARATOR . 'camposFormatacao';

        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), ['.', '..']);
        } else {
            $files = [];
        }

        // Caminho da pasta que deseja listar
        $folderPath = APPPATH . 'Views' . DIRECTORY_SEPARATOR . 'fia/ptpa' . DIRECTORY_SEPARATOR . 'camposFormatacao';

        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), ['.', '..']);
        } else {
            $files = [];
        }

        // Remove a extensão .php dos arquivos e adiciona o caminho
        $files = array_map(function ($file) {
            return 'fia/ptpa/camposFormatacao/' . pathinfo($file, PATHINFO_FILENAME);
        }, $files);

        return $files;
    }
}
