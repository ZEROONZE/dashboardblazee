import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container } from "./styles";
import { TbArrowBigDownLines } from "react-icons/tb";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const loaderRef = useRef(null);
  const [data, setData] = useState();
  const scrollToElement = () => loaderRef.current.scrollIntoView();
  const current = new Date();
  const date = `?date=${current.getDate()}1${current.getMonth("") +
    1}${current.getFullYear()}`;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("https://vps20643.hostzonevps.net/json/report" + date)
      .then((response) => {
        setItems(response.data);
      })

      .finally(() => {
        setIsLoaded(false);
      });
  }
  console.log(date);

  return (
    <Container>
      <div className="box">
        <div className="title1">
          <h1 className="title">Relatório em tempo real</h1>
        </div>

        <table className="tabela">
          <div className="button-bottom">
            <TbArrowBigDownLines />
          </div>
          <button className="button-bottom" onClick={scrollToElement}>
            <TbArrowBigDownLines />
          </button>

          <tbody className="tabela1">
            {items.map((item) => (
              <tr key={item.id} className="fundo4">
                <td id="n22" value="1">
                  {(item.color === "red" && (
                    <p className="rednumero">{item.color}</p>
                  )) ||
                    (item.color === "red" && (
                      <p className="rednumero">{item.color}</p>
                    )) ||
                    (item.color === "black" && (
                      <p className="reda1numero">{item.color}</p>
                    )) || <p className="reda2numero">Qtd até cair</p>}
                </td>
                <td id="n2" value="1">
                  {(item.color === "red" && (
                    <p className="redaa">{item.number}</p>
                  )) ||
                    (item.color === "black" && (
                      <p className="reda11">{item.number}</p>
                    )) || <p className="reda22">{item.rounds_to_white}</p>}
                </td>

                <td> {item.datetime}</td>
              </tr>
            ))}
            <p ref={loaderRef} style={{ margin: "3px", textAlign: "center" }}>
              Clique em atualiza...
            </p>
          </tbody>
          <button type="button1" className="bottom2" onClick={() => getData()}>
            Atualizar
          </button>
        </table>
      </div>
    </Container>
  );
}
