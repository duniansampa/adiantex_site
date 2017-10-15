import React, { Component } from "react";
import styled from "styled-components";
import { Nav, MenuItem } from "react-bootstrap";
import { MyNavDropdown } from "../components";

const IntNav = styled(Nav)`
  &.nav {
    background: #8b9dc3;
    display: flex;
    justify-content: center;
    border: 0;
  }
`;

const myWidth = "228px";
const myHeight = "60px";

const IntMenuItem = styled(MenuItem)`
  &[role="presentation"] {
    height: 43px;
    width: ${myWidth};
    display: flex;
    justify-content: center;
    align-items: center;
    > a[role="menuitem"] {
      color: white;
      height: 43px;
      line-height: 43px;
      width: ${myWidth};
      padding-left: 10px;
      background-image: none;
      background-color: transparent;
      border-bottom-color: rgba(0, 0, 0, 0.07);
      border-bottom-width: 1px;
      border-bottom-style: solid;
      &:hover {
        background-color: #d6d6d6;
        color: black;
      }
    }
  }
`;

export default class HeaderNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IntNav bsStyle="tabs">
        <MyNavDropdown
          itemDivider
          noCaret
          isButton
          eventKey={1}
          height={myHeight}
          width={myWidth}
          title="SOBRE A ADIANTEX"
          id="nav-dropdown-aadiantex"
          href="/a-adiantex"
        />
        <MyNavDropdown
          itemDivider
          eventKey={2}
          height={myHeight}
          width={myWidth}
          title="VISÃO DE FUTURO"
          id="nav-dropdown-vfuturo"
          href="/visao-de-futuro"
        >
          <IntMenuItem
            eventKey={2.1}
            href="/visao-de-futuro/pessoas-de-conhecimento"
          >
            Pessoas de Conhecimento
          </IntMenuItem>
          <IntMenuItem
            eventKey={2.2}
            href="/visao-de-futuro/tecnologia-e-inovacao"
          >
            Tecnologia e Inovação
          </IntMenuItem>
          <IntMenuItem eventKey={2.3} href="/visao-de-futuro/produtividade">
            Produtividade
          </IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown
          itemDivider
          eventKey={3}
          height={myHeight}
          width={myWidth}
          title="SOLUÇÕES"
          id="nav-dropdown-solucao"
          href="/solucoes"
        >
          <IntMenuItem eventKey={3.1} href="/solucoes/internet-das-coisas">
            Internet das Coisas
          </IntMenuItem>
          <IntMenuItem eventKey={3.2} href="/solucoes/telemetria">
            Telemetria
          </IntMenuItem>
          <IntMenuItem eventKey={3.3} href="/solucoes/rastreamento-de-carga">
            Rastreamento de Carga
          </IntMenuItem>
          <IntMenuItem eventKey={3.4} href="/solucoes/automacao-residencial">
            Automação Residencial
          </IntMenuItem>
          <IntMenuItem eventKey={3.4} href="/solucoes/nossos-servicos">
            Nossos Serviços
          </IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown
          itemDivider
          eventKey={4}
          height={myHeight}
          width={myWidth}
          title="GOVERNANÇA"
          id="nav-dropdown-governanca"
          href="/governanca"
        >
          <IntMenuItem eventKey={4.1} href="/governanca/conformidade">
            Conformidade
          </IntMenuItem>
          <IntMenuItem eventKey={4.1} href="/governanca/conselho-e-diretoria">
            Conselho e Diretoria
          </IntMenuItem>
        </MyNavDropdown>
        <MyNavDropdown
          eventKey={5}
          height={myHeight}
          width={myWidth}
          title="COMUNICAÇÃO"
          id="nav-dropdown-comunicacao"
          href="/comunicacao"
        >
          <IntMenuItem eventKey={5.1} href="/comunicacao/noticias">
            Notícias
          </IntMenuItem>
          <IntMenuItem eventKey={5.2} href="/comunicacao/redes-sociais">
            Redes Sociais
          </IntMenuItem>
        </MyNavDropdown>
      </IntNav>
    );
  }
}
