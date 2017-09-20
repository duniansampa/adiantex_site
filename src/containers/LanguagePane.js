
import styled from 'styled-components';
import React, { Component } from 'react';


export default class LanguagePane extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }
    
    render() {
      const props = [ {src: require('../images/pt-br.png') , alt: 'Pt-br: ', content: 'Português'}, 
                      {src: require('../images/en.png') , alt: 'En: ', content: 'English'}, 
                      {src: require('../images/es.png') , alt: 'Es: ', content: 'Español'} ];

      const IntUl = styled.ul`
          margin: 0px;
          padding: 0px;
          list-style: none;
      `;

      const IntNav = styled.nav`
          margin: 0px;
          padding: 0px;
      `;

      const IntLi =  styled.li`
          margin: 0px;
          padding: 0px;
          display: inline;
      `;
      
      const IntImgLang = styled.img`
          width: 24px;
          height: 24px; 
          padding: 2px;
      `;

      const IntLink =  styled.a`
          display: inline-block;
          margin: 0px;
          padding: 2px 10px;
          background-color:  #6666FF;
          color: white;
          text-align: center;
          text-decoration: none;
          font-family: monospace;
          line-height:  80px;
          height:  80px;

          &:hover {
              background-color: #D6D6D6;
              color: black;
          }
      `;
      return (
          <IntNav>
              <IntUl>
                  { props.map( ( obj, index) =>
                      <IntLi key={index}  >
                          <IntLink> 
                              <IntImgLang alt={obj.alt} src={obj.src} />
                              {obj.content}
                          </IntLink>
                      </IntLi> )
                  }
              </IntUl>
          </IntNav>
      );
    }
}