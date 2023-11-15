import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: #8B0000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BoxContent = styled.div`
  max-width: 800px;
  max-height: 800px;
  width: 95vw;
  height: 90vh;
  background: khaki;
  box-shadow: 0 0 15px khaki;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 0;

  @media(max-width: 1024px) {
    width: 90%;
  };
`;

const BoxTitle = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-top: -1px;
  background: khaki;

  > h1 {
    width: auto;
    color: white;
    font-size: 3em;
    margin: 0;
    padding: 1rem;
    text-align: center;
    height: 20rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    font-weight: 500; 

    @media(max-width: 1024px) {
      font-size: 2rem;
  };

  @media(max-width: 500px) {
      font-size: 1.5rem;
  };

    > img {
    width: 400px;
    height: 200px;
  }
  }
`

const BoxCards = styled.div`
  padding: 30px;
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  overflow-y: scroll;
`;

const Cards = styled.div`
  width: 120px;
  height: 200px;
  max-height: 200px;
  background: #fff;
  color: #8B0000;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media(max-width: 600px) {
    width: 40%; 
  }
  
  &:hover{
    transform: scale(1.1);
    opacity: .7;
  }

  > img {
    width: 100%;
    height: 50%;
    margin-bottom: .875rem;
  }

  > span {
    gap: 1rem 0;
    display: flex;
    flex-direction: column;
    text-align: center;

    :first-child {
        height: 50px;
    }

      > p {
      font-size: 0.875rem;
      padding: 0 0.5rem;
      line-height: 20px;
    }
  }
`
const ButtonShop = styled.button`
  width: 50px;
  height: 50px;
  background: #F0FFF0;
  border: 0px;
  cursor: pointer;
  outline: 0px;
  padding: 0 2px;
  font-weight: 600;
  font-size: 18px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  top: 0;
  left: 1px;
  position: absolute;
`;

const BoxLittleCar = styled.div`
  width: 300px;
  height: 400px;
  background: #F0FFF0;
  position: absolute;
  top: 49px;
  left: 1px;
  border-radius: 0 8px 8px 0;
  padding: 15px;
  overflow-y: auto;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

  h2 {
    color: #8B0000;
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;


const App = () => {
  const [moneyNey, setMoneyNey] = useState(4000000000);
  const [comprados, setComprados] = useState([]);
  const [openshop, setOpenShop] = useState(false);
  const values = [
    { name: "Carro de luxo", value: 100000, img: "https://www.boatshopping.com.br/wp-content/uploads/2019/08/carros-de-luxo-flo-rida-boat-shopping.jpg" },
    { name: "Férias em uma ilha", value: 500000, img: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2018/07/ilhas-paradisiacas-as-mais-lindas-para-visitar.jpg" },
    { name: "Coleção de relógios", value: 1000000, img: "https://www.royalewatches.com.br/wp/wp-content/uploads/2022/07/relogios-mais-desejados-1024x1024.png" },
    { name: "Casa de campo", value: 5000000, img: "https://media-cdn.tripadvisor.com/media/vr-splice-j/00/27/fa/eb.jpg" },
    { name: "Coleção de arte", value: 10000000, img: "https://midias.agazeta.com.br/2023/10/27/de-onde-surgem-os-sonhos--colecao-andrea-e-jose-olympio-pereira-uma-exposicao-do-museu-vale-e-do-instituto-cultural-vale-1906321-article.jpeg" },
    { name: "PC Gamer", value: 50000, img: "https://cdn.dooca.store/1841/products/728vhoflvgtrxhqruhh3gvikbivi4n2gbbry.jpg?v=1685577113" },
    { name: "Doação significativa", value: 1000000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Zom74NUr1l0rc1DAtPeku-ZrdrQUg4cye3CBuLshZzlJ4x7WRdy6YF2mSDwEwsjjX8c&usqp=CAU" },
    { name: "Festa de aniversário", value: 2000000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvvCwg6gYVgTRY9vkdyZUj11VuwF1c1QOQybPjtBldBbMlZG4LqIrG-ZprZfr0vydqAc&usqp=CAU" },
    { name: "Iate de luxo", value: 20000000, img: "https://img.olhardigital.com.br/wp-content/uploads/2021/07/60d9fab836cf170019de80e1.jpg" },
    { name: "Mansão de alto padrão", value: 30000000, img: "https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg" },
    { name: "Time de futebol", value: 100000000, img: "https://media.santosfc.com.br/wp-content/uploads/2022/04/Asset-2.jpg" },
    { name: "Video game", value: 5000, img: "https://www.oficinadanet.com.br/imagens/post/47704/capa-ps5-slim-tem-data-e-preco-vazados-por-documento-da-microsoft.jpg" },
    { name: "Fabrica de biscoitos", value: 50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58JcTUyhWWFb9z2Cpcslo-PBbGVr8QNo1Qw&usqp=CAU" },
    { name: "Um jetpack dourado", value: 10000, img: "https://p.turbosquid.com/ts-thumb/rd/G7Vstx/OM/r20/jpg/1664385166/600x600/fit_q87/34b420aa4ced7a325eee37944ee49541b4c20814/r20.jpg" },
    { name: "Action Figure", value: 1000, img: "https://blogdebrinquedo.com.br/wp-content/uploads/2022/04/20220408action-figure-moon-knight-hot-toys-01.jpg" },
    { name: "Máquina de fazer sorvete", value: 200, img: "https://images-americanas.b2w.io/produtos/6074376810/imagens/maquina-de-fazer-sorvete-gelateria-modelo-2-0340-calesita/6074376828_1_large.jpg" },
    { name: "Um chapéu seletor", value: 100, img: "https://img.quizur.com/f/img5ede3e599f5626.42115969.jpg?lastEdited=1591623270" },
    { name: "fones de ouvido de ouro", value: 5000000, img: "https://s2-vogue.glbimg.com/eO1QG37aabEXBYRobeds3aZzew4=/0x0:1080x1049/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_5dfbcf92c1a84b20a5da5024d398ff2f/internal_photos/bs/2022/8/C/BXyku7REyJ9wzBAPpBLA/lojaraonigold-315927600-854522832231976-5008157763947638950-n.jpg" },
    { name: "Uma biblioteca de HQ's", value: 1000, img: "https://www.bco.ufscar.br/imagens/14082019-dsc_9703.jpg/@@images/fa04b209-8a03-4cee-a632-bd261d7658d0.jpeg" },
    { name: "Um traje de astronauta", value: 2000, img: "https://s2-techtudo.glbimg.com/-Hld_zlLmQ8ChLxuN89xHJelhqA=/0x0:1325x2000/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/a/Z/1vJdORQoaVtdRH3qNZsQ/2013-01-08-mark-iii.jpg" },
    { name: "Um pacote de figurinhas", value: 2, img: "https://i0.wp.com/universolumina.com.br/wp-content/uploads/2020/10/FIGURINHA-BARBIE.jpg?fit=500%2C500&ssl=1" },
    { name: "Um par de meias Disney", value: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxddvYdYQMtpLML2SrUldJbv6R6SMExNEH0ACX5x7wdS4aVqKRAN4MWJUB04N3QVegL8&usqp=CAU" },
    { name: "Um quebra-cabeça de 1000 peças", value: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJoB80c7l0y5K48R5D0XCrnAsH8jUz1Ix01dFibeOEVvFuOD2wt48DzBWFjzH2G3z1C5E&usqp=CAU" },
    { name: "FIFA Points", value: 500, img: "https://image.api.playstation.com/vulcan/ap/rnd/202209/2315/Inm0wBfqv09myxffd3XIA9tM.png" },
    { name: "Skin CS Go", value: 7500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2kuh5XdbFZ8tFbj6eLbriAHq4BcedtVBHeNEmUqNyXOhbugbn0ARn_D0z3jnyASNTR4&usqp=CAU" },
  ];


  const selecionarItem = (item) => {
    setComprados((prevComprados) => [...prevComprados, item]);
    setMoneyNey((prevMoneyNey) => prevMoneyNey - item.value);
  };

  let url = "";
  if ((moneyNey / 4000000000) * 100 >= 90) {
    url = "https://www.ofuxico.com.br/img/upload/noticias/2021/03/01/neymar-jr-em-selfie-sorrindo_397627_36.jpg";
  } else if ((moneyNey / 4000000000) * 100 >= 80) {
    url = "https://noticiasdatv.uol.com.br/media/_versions/artigos/instagram-neymar-reproducao-31-12_fixed_large.jpg";
  } else if ((moneyNey / 4000000000) * 100 >= 70) {
    url = "https://static1.purepeople.com.br/articles/0/36/50/90/@/4184681-neymar-usou-look-de-mais-de-r-18-mil-pa-1200x0-2.png";
  } else if ((moneyNey / 4000000000) * 100 >= 60) {
    url = "https://s2-oglobo.glbimg.com/y6XRK8ikVoGIUbJytsQQU_x8BHQ=/0x0:1080x748/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/7/h/6edpwiTomcLKMh2zTOjQ/316061513-628342102405569-8682723337930041240-n.jpg";
  } else if ((moneyNey / 4000000000) * 100 >= 50) {
    url = "https://f5noticia.com.br/wp-content/uploads/2019/07/Neymar.png";
  } else if ((moneyNey / 4000000000) * 100 >= 40) {
    url = "https://dailypost.ng/wp-content/uploads/2017/08/neymar.jpg";
  } else if ((moneyNey / 4000000000) * 100 >= 30) {
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgJl435EKDDYpolQ32rXXcetvklFRQOTiCXesuUbb5dR-j_vpETlJWM2clhPUfW00cAs&usqp=CAU";
  } else if ((moneyNey / 4000000000) * 100 >= 20) {
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8MBM_27s6MyjWBYO95plVVVjSF70bAPsEPg&usqp=CAU";
  } else if ((moneyNey / 4000000000) * 100 >= 10) {
    url = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4ff1770072fc7694/60ddf92ed9a5243b66a49bff/58ceca43dff13b3ebb69ed5a4da4fee7612a7a66.jpg";
  } else if ((moneyNey / 4000000000) * 100 >= 5) {
    url = "https://sportbuzz.uol.com.br/media/_versions/captura_de_tela_2020-08-23_as_18.27.02_widexl.png";
  } else if ((moneyNey / 4000000000) * 100 >= 3) {
    url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBzGMwof8v5N7mlW5sLSe6MhJ7ZRZxegaKGA&usqp=CAU";
  } else {
    url = "https://i.superesportes.com.br/iHNSoTXrNkEHP3brl8sZGjVV0cQ=/1200x675/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2022/11/22/3980504/neymar_1_87520.jpg";
  }

  return (
    <Content>
      <BoxContent>
        <BoxTitle>
          <ButtonShop onClick={() => setOpenShop(!openshop)}>🛒</ButtonShop>
          <h1>
            <img src={url} alt={`Neymar's Emotion`} />
            R$ {moneyNey}</h1>
          {openshop &&
            <BoxLittleCar>
              <h2>Itens Comprados:</h2>
              <ul>
                {comprados.map((item, index) => (
                  <li key={index}>{item.name} - R$ {item.value}</li>
                ))}
              </ul>
            </BoxLittleCar>
          }
        </BoxTitle>
        <BoxCards>
          {values.map((item) => (
            <Cards onClick={() => { selecionarItem(item) && setOpenShop(true) }}>
              <img src={item.img} alt={item.name} />
              <span>
                <p>{item.name}</p>
                <p>R$ {item.value}</p>
              </span>
            </Cards>
          ))}
        </BoxCards>
      </BoxContent>
    </Content>
  );
};
export default App;
