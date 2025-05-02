// Bibliotecas React e React Router
export { HashRouter } from 'react-router-dom';
// App -------------
export { default as HcNavHorizontal } from './NavHorizontal';
export { default as HcNavVertical } from './NavVertical';
export { default as HcNavMenu } from './NavMenu';
export { default as HcHeader } from './Header';
export { default as HcFooter } from './Footer';
// Componentes------
export { default as HcSlideLeftRightbasicModal } from './Modal/SlideLeftRightbasicModal';
export { default as HcHformInputTextLetters } from './HForm/HformInputTextLetters';
export { default as HcHformInputTextNumber } from './HForm/HformInputTextNumber';
export { default as HcHformInputTextMask } from './HForm/HformInputTextMask';
export { default as HcSlideUpDownModal } from './Modal/SlideUpDownModal';
export { default as HcelasticModal } from './Modal/elasticModal';
export { default as HcPulsateModal } from './Modal/PulsateModal';
export { default as HcListActions } from './Button/ListActions';
export { default as HcRotateModal } from './Modal/RotateModal';
export { default as HcBlurInModal } from './Modal/BlurInModal';
export { default as HcCalculator } from './Tool/Calculator';
export { default as HcBasicModal } from './Modal/BasicModal';
export { default as HcSwingModal } from './Modal/SwingModal';
export { default as HcShakeModal } from './Modal/ShakeModal';
export { default as HcfadeModal } from './Modal/fadeModal';
export { default as HcFlipModal } from './Modal/FlipModal';
export { default as HcToasts } from './Message/Toasts';
export { default as HcJSONViewer } from './JSONViewer';
export { default as HcMessage } from './Message';
export { default as HcLoading } from './Loading';
export { default as HcButton } from './Button';
export { default as HcModal } from './Modal';
export { default as HcTool } from './Tool';

// Hooks do React
export {
    useState,
    useEffect,
    useContext,
    useReducer,
    useCallback,
    useMemo,
    useRef,
    useImperativeHandle,
    useLayoutEffect,
    useDebugValue,
    useId,
    useDeferredValue,
    useTransition,
    useSyncExternalStore,
    useInsertionEffect,
    // useOptimistic, // Disponível apenas em versões experimentais
} from 'react';

// Utilitários e componentes do React
export {
    Children,
    Fragment,
    createContext,
    forwardRef,
    lazy,
    memo,
    startTransition,
    Suspense,
    StrictMode,
    Component,
    PureComponent,
    createRef,
    isValidElement,
    cloneElement,
    createElement,
    createFactory
} from 'react';

// APIs do React Router (separe em outro arquivo ou seção)
export {
    useParams,
    useNavigate,
    useLocation,
    useMatch,
    useSearchParams
} from 'react-router-dom';

{/*

------------------------------------------------------------------------------------
Lista Completa de Importações do React
------------------------------------------------------------------------------------
Hooks Principais

useState            - Gerencia estado em componentes funcionais
useEffect           - Executa efeitos colaterais em componentes
useContext          - Acessa o contexto React
useReducer          - Alternativa ao useState para lógica de estado complexa
useCallback         - Memoriza funções
useMemo             - Memoriza valores
useRef              - Cria uma referência mutável
useImperativeHandle - Customiza a handle exposta para refs
useLayoutEffect     - Versão do useEffect executado sincronamente após renderização
useDebugValue       - Mostra um valor de debug para hooks customizados
useId               - Gera IDs únicos para acessibilidade
useDeferredValue    - Adia a atualização de uma parte da UI
useTransition       - Marca atualizações de estado como transições

------------------------------------------------------------------------------------
Hooks adicionais do React 18+

useSyncExternalStore    - Assina uma fonte de dados externa
useInsertionEffect      - Versão de useEffect para bibliotecas de CSS-in-JS
useOptimistic           - Atualiza a UI otimisticamente antes da confirmação

------------------------------------------------------------------------------------
Constantes e Utilitários

Children    - Utilitários para trabalhar com props.children

Children.map
Children.forEach
Children.count
Children.only
Children.toArray

Fragment (ou <>...</>)  - Agrupa elementos sem nós extras
createContext           - Cria um contexto React
forwardRef              - Encaminha refs para componentes
lazy                    - Carregamento preguiçoso de componentes
memo                    - Memoriza um componente
startTransition         - Marca atualizações como não urgentes
Suspense                - Suspende rendering enquanto carrega
StrictMode              - Ativa verificações adicionais em desenvolvimento

------------------------------------------------------------------------------------
Componentes e APIs

Component       - Classe base para componentes React
PureComponent   - Componente com comparação superficial por padrão
createRef       - Cria uma ref
isValidElement  - Verifica se um objeto é um elemento React válido
cloneElement    - Clona e retorna um novo elemento React
createElement   - Cria um elemento React
createFactory   - Cria uma factory para elementos React
useState        - Gerencia estados em componentes funcionais
React.version   - Versão atual do React (necessário exemplo)

------------------------------------------------------------------------------------
Hooks do React Router (se estiver usando)

useParams       - Acessa parâmetros da URL
useNavigate     - Navega programaticamente
useLocation     - Acessa o objeto location atual
useMatch        - Testa se um padrão corresponde à URL atual
useSearchParams - Acessa e manipula parâmetros de consulta

------------------------------------------------------------------------------------
APIs para tratamento de erros

ErrorBoundary (conceito, implementado como classe), (necessário exemplo)
componentDidCatch (método do ciclo de vida), (necessário exemplo)

------------------------------------------------------------------------------------
Eventos sintéticos

SyntheticEvent  - Base para todos os eventos (necessário exemplo)
Tipos específicos como MouseEvent, KeyboardEvent, etc.

*/}