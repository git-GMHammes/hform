import React, { useState, useEffect } from 'react';

function AppModelReact() {
    // Estado para armazenar as dimensões da tela e posição do mouse
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);
    const [alturaTela, setAlturaTela] = useState(window.innerHeight);
    const [posicaoMouse, setPosicaoMouse] = useState({ x: 0, y: 0 });

    // Função para atualizar a largura da tela
    const atualizarLarguraTela = () => {
        setLarguraTela(window.innerWidth);
    };

    // Função para atualizar a altura da tela
    const atualizarAlturaTela = () => {
        setAlturaTela(window.innerHeight);
    };

    // Função para atualizar a posição do mouse
    const atualizarPosicaoMouse = (evento) => {
        setPosicaoMouse({ x: evento.clientX, y: evento.clientY });
    };

    // useEffect para monitorar e atualizar a largura da tela
    useEffect(() => {
        window.addEventListener('resize', atualizarLarguraTela);

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', atualizarLarguraTela);
        };
    }, []);

    // useEffect para monitorar e atualizar a altura da tela
    useEffect(() => {
        window.addEventListener('resize', atualizarAlturaTela);

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', atualizarAlturaTela);
        };
    }, []);

    // useEffect para monitorar e atualizar a posição do mouse
    useEffect(() => {
        window.addEventListener('mousemove', atualizarPosicaoMouse);

        // Limpeza do evento ao desmontar o componente
        return () => {
            window.removeEventListener('mousemove', atualizarPosicaoMouse);
        };
    }, []);

    // Renderização do componente
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Monitor de Tela e Mouse</h1>

            <div>
                <h2>Dimensões da Tela:</h2>
                <p>Largura: {larguraTela}px</p>
                <p>Altura: {alturaTela}px</p>
            </div>

            <div>
                <h2>Posição do Mouse:</h2>
                <p>Eixo X: {posicaoMouse.x}px</p>
                <p>Eixo Y: {posicaoMouse.y}px</p>
            </div>
        </div>
    );
}

export default AppModelReact;