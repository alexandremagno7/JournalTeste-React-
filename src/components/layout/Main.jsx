import React from "react";
import MainNews from "../itens/MainNews";
import './Main.css'

import ImagemTeste from '../../imgs/teste.jpg'

export default function(){
    return <main>
        {/*Área de notícias mais importantes. (No max. duas notícias)*/}
        <section className="mainNewsArea">
            <MainNews tipo="Economia" imagem={ImagemTeste} titulo="Água dura em pedra mole tanto fura até que bate. Água dura em pedra mole tanto fura até que bate."/>
            <MainNews tipo="Política" imagem={ImagemTeste} titulo="No there is nothing good about politic in the Bostil! No there is nothing good about politic in the Bostil!"/>
        </section>

        {/*Notícias secundárias */}
        <section className="secondaryNewsArea">
            {/*Há duas divs envolvendo os dois componentes porque, ao ajusta tela para menor, quebra-se as divs.
                Depois, quebra-se o conteúdo das divs. Ou seja, os componentes <TheNews>.
                Só pode no max. duas divs e duas notícias em cada div.*/}
            <div>
                <MainNews tipo="Economia" imagem={ImagemTeste} titulo="Água dura em pedra mole tanto fura até que bate. Água dura em pedra mole tanto fura até que bate."/>
                <MainNews tipo="Política" imagem={ImagemTeste} titulo="No there is nothing good about politic in the Bostil! No there is nothing good about politic in the Bostil!"/>
            </div>
            <div>
                <MainNews tipo="Economia" imagem={ImagemTeste} titulo="Água dura em pedra mole tanto fura até que bate. Água dura em pedra mole tanto fura até que bate."/>
                <MainNews tipo="Política" imagem={ImagemTeste} titulo="No there is nothing good about politic in the Bostil! No there is nothing good about politic in the Bostil!"/>
            </div>
        </section>

        {/*Área dos colunistas*/}
        <nav className="columnists">
                <h4>Nossos colunistas:</h4>
                <div className="areaDeApresentacaoColum">
                    @
                </div>
        </nav>

        {/*Outras notícias */}
        <section className="othersNewsArea">

        </section>
    </main>
}