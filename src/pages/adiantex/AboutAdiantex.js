import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";
import imgSobreAdiantex from "../../images/sobre_a_adiantex.jpg";
import PropTypes from "prop-types";
import { ImageHeader, Container } from "../../components";
import { ImageTitle } from "../../components/ImageHeader";

const MediaBox = styled.div`color: white;`;

const MediaImage = styled.div`display: table-cell;`;

const MediaContent = styled.div`
  display: table-cell;
  font-size: 21px;
  marging: auto;
`;

const Media = props => (
  <MediaBox>
    <MediaImage>
      <img alt={""} src={props.imgPath} />
    </MediaImage>
    <MediaContent>
      <h2>{props.header}</h2>
      <p>{props.content}</p>
    </MediaContent>
  </MediaBox>
);

const List = props => {
  let split = props.items.length > 1 ? props.split : false;
  let slice1;
  let slice2;
  if (split) {
    const mid = (props.items.length + 1) / 2;
    slice1 = props.items.slice(0, mid);
    slice2 = props.items.slice(mid, props.items.length);
  }
  return (
    <Grid>
      <Row>
        <Col key={1} sm={split ? 6 : 12}>
          <ul>{slice1.map((value, index) => <li key={index}>{value}</li>)}</ul>
        </Col>
        {split === true && (
          <Col key={2} sm={6}>
            <ul>
              {slice2.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
          </Col>
        )}
      </Row>
    </Grid>
  );
};

List.defaultProps = {
  split: true
};
List.prototype = {
  split: PropTypes.bool,
  items: PropTypes.arrayOf(String)
};

const AreaTitle = ImageTitle.extend`
  display: block;
  color: #8b9dc3;
  text-align: center;
  margin-bottom: 10px;
`;

const AreaDeAtuacao = props => {
  const itemsNossasAreas = [
    "Internet das coisas",
    "Sector de Energia e de Utilidades",
    "Agricultura",
    "Cidades inteligentes",
    "Varejo",
    "Segurança",
    "Saúde",
    "Logística",
    "Telecomunicação",
    "Sector Automotivo",
    "Automação residencial",
    "Rastreamento de cargas"
  ];
  return (
    <div>
      <AreaTitle> {"NOSSAS ÁREAS DE ATUAÇÃO"} </AreaTitle>
      <p>
        {
          "As soluções da AdianteX podem ser utilizadas em diversos segmentos, tais como:"
        }
      </p>
      <List items={itemsNossasAreas} split />
    </div>
  );
};

const NossosValores = props => {
  const itemsNossosValores = [
    "Colocar o cliente sempre em primeiro lugar",
    "Ser proativo e apresentar exelenentes resultados",
    "Espiríto de equipe, persistência e determinação em todo momento",
    "Movido pelo desafio e inovação",
    "Trabalhar com responsabilidade, honestidade e Comprometimento "
  ];
  return (
    <div>
      <Media
        header={"NOSSOS VALORES"}
        imgPath={require("../../images/valores.png")}
        content={<List items={itemsNossosValores} split />}
      />
    </div>
  );
};

const MissaoVisao = () => {
  const sobreContent = [
    {
      imgPath: require("../../images/missao.png"),
      header: "MISSÃO",
      content:
        " Desenvolver e produzir equipamentos de vanguarda, soluções tecnológicas e serviços para o mercado, considerando a inovação, qualidade e satisfação dos clientes. "
    },
    {
      imgPath: require("../../images/visao.png"),
      header: "VISÃO",
      content:
        " Para 2021: Ser uma das 10 (dez) empresas mais importantes na área de internet das coisas para o mercado Brasileiro. "
    }
  ];
  return (
    <div>
      {sobreContent.map((_, index) => (
        <Media
          key={index}
          imgPath={_.imgPath}
          header={_.header}
          content={_.content}
        />
      ))}
    </div>
  );
};

const Sobre = () => (
  <p>
    {
      " A AdianteX é uma empresa brasileira, fundada em 2017. A AdianteX oferece soluções de vanguarda, principalmente, para áreas de Internet das coisas (Internet of Things), Telemetria, Automação Residencial, Rastreamento de Carga; aumentando a eficiência, a eficácia e reduzindo o custo operacional dos clientes. As nossas soluções permitem que o desenvolvimento de produtos seja rápido, rentável e confiável.  "
    }
  </p>
);

const AboutBox = styled.div`
  background-color: #8b9dc3;
  margin-bottom: 30px;
`;
const AboutAdiantex = () => {
  return (
    <div>
      <ImageHeader img={imgSobreAdiantex} title="SOBRE" />
      <Container>
        <Sobre />
      </Container>
      <br />
      <br />
      <AboutBox>
        <Container>
          <MissaoVisao />
          <NossosValores />
        </Container>
      </AboutBox>

      <Container>
        <AreaDeAtuacao />
      </Container>
      <br />
      <br />
    </div>
  );
};

export default AboutAdiantex;
