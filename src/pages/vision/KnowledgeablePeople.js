import React from "react";
import { ImageHeader, Container } from "../../components";
import imgPeople from "../../images/visao_de_futuro.jpg";
import PropTypes from "prop-types";

const KnowledgeablePeople = ({ match }) => {
  return (
    <div>
      <ImageHeader
        height="250px"
        img={imgPeople}
        title="Pessoas de Conhecimento"
      >
        {`“O Ser Humano é a medida de todos os valores na Empresa, dos valores que são, enquanto são, dos valores que não são, enquanto não são.”`}
      </ImageHeader>
      <Container>
        <p>
          {" "}
          {`A AdianteX é composta por Pessoas de Conhecimento, que são fundamentais para a evolução da empresa, que por sua vez está associada com a evolução do conhecimento dos seus colaboradores.`}
        </p>
        <p>
          {`A AdianteX entende que o conhecimento humano é um recurso ilimitado, que possui um papel de relevância nos seus negócios.`}
        </p>
        <p>
          {`Como o conhecimento é a ferramenta muito importante para a evolução da empresa, além de investir fortemente em treinamentos e qualificação profissional, a AdianteX incentiva os seus colaboradores a potencializarem os seus conhecimentos através de desenvolvimento das habilidades, competências e criatividade.`}
        </p>
        <p>
          {`Os colaboradores têm de estar sempre em busca de novas tecnologias, já que são fatores que proporcionem vantagens competitivas para a AdianteX.`}
        </p>
        <br />
      </Container>
    </div>
  );
};

KnowledgeablePeople.prototype = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string
};
export default KnowledgeablePeople;
