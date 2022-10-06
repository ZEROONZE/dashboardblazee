import React from "react";
import { Container } from "./styles";
import {FcRight} from 'react-icons/fc';
import { TbArrowBigRightLines } from "react-icons/tb";
const Estrategias: React.FC = () => {

return(


    <Container>

        <p>Para saber mais sobre como funciona essas estratégias, quais dias e horário para usar elas, adquiri nosso plano pago.  </p>
        <div className="One">
                <p className="redaa">7</p>
                <p className="redaa">7</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BALCK</p>
                <div className="balao">
                Quando vier dois números 7 seguidos, se às duas próximas rodadas vierem vermelho <strong>APOSTE NO BLACK.</strong></div>
        </div>
        <div className="One">
                <p className="redaaa">8</p>
                <p className="redaaa">8</p>
                <p className="redaaa">black</p>
                <p className="redaaa">black</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Quando vier dois numéros 8 seguidos se às duas próximas rodadas vierem vermelho ou preto, <strong>APOSTE NO BLACK.</strong></div>
        </div>
        <div className="One">
                <p className="redaaa">9</p>
                <p className="redaaa">9</p>
                <p className="redaa">2</p>
                <p className="redaaa">black</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Quando vier dois numéros 9 seguidos se a próxima for numero 2 vermelho, se depois vier qualquer cor preta, <strong>APOSTE NO BLACK.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaa">1</p>
                <p className="redaa">1</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Quando vier dois numéros 1 seguidos se às casas seguintes forem vermelhas, <strong>APOSTE NO BLACK.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaa">2</p>
                <p className="redaa">2</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Quando vier dois numéros 2 seguidos, se às casas seguintes forem vermelhas, <strong>APOSTE NO BLACK, no entanto se vier dois numero 5 não aposte.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaaa">12</p>
                <p className="redaaa">12</p>
                <p className="redaaa">black</p>
                <p className="redaaa">black</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaa">RED</p>
                <div className="balao">
                Sempre que vier dois numero 12 seguidos, a probabilidade de cair é vermelho, <strong>se a proxíma rodada vier black, APOSTE NO VERMELHO.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaa">3</p>
                <p className="redaa">3</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Sempre que vier dois numero 3 seguidos, a probabilidade de cair é black, <strong>APOSTE NO BLACK.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaaa">11</p>
                <p className="redaaa">11</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Sempre que vier dois numero 11 seguidos, a probabilidade de cair é black, <strong>APOSTE NO BLACK.</strong></div>
        </div> <div className="One foor">
                <p className="redaa">4</p>
                <p className="redaa">4</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaa">RED</p>
                <div className="balao">
                Sempre que vier dois numero 3 seguidos, seguidos de 3 red, a probabilidade de cair é red, <strong>APOSTE NO VERMELHO.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaa">5</p>
                <p className="redaa">5</p>
                <p className="redaa">red</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaaa">BLACK</p>
                <div className="balao">
                Sempre que vier dois numero 5 seguidos, seguidos de 3 red, a probabilidade de cair é red, <strong>APOSTE NO VERMELHO.</strong></div>
        </div>
        <div className="One foor">
                <p className="redaa">6</p>
                <p className="redaa">6</p>
                <p className="redaaa">black</p>
                <p className="redaa">red</p>
                <TbArrowBigRightLines className="seta" style={{ color: '#fff'  }} />
                <p className="redaa">RED</p>
                <div className="balao">
                Sempre que vier dois numero 6 seguidos, a probabilidade de cair é red,<strong>APOSTE NO VERMELHO, porém, se vier numero 12, seguido de  10 black não aposte.</strong></div>
        </div>
    </Container>
)


}

export default Estrategias;
