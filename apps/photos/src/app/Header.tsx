import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav' ;
import NavDropdown from 'react-bootstrap/NavDropdown' ;
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


const useStyles = makeStyles(theme => ({
  toolbar: { borderBottom: `1px solid ${theme.palette.divider}`,
     },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  headerTopArea: {
    backgroundColor: '#000',
    fontSize: '12px',
    '& a': {
      color: '#fff'
    }
  },
  socialIcon: {
    fontSize: '14px',
    textAlign: 'right',
    paddingRight: '30px',
    '& a': {
      padding: '10px 5px',
      marginTop: '10px'
    },
    // '& svg': {
    //   padding: '10px 5px',
    //   marginTop: '10px'
    // }
  },
  socialIconsItems: {
    marginTop: '5px'
  }
}))
  
export interface MenuType {
  url: string
  name: string
  children?: MenuType[]
}

export interface HeaderProps {
  social: { url: string, icon: IconDefinition}[]
  brand: { imageUrl: string, name: string} 
  mainMenu: MenuType[]
  topMenu: MenuType[]
} 



export default function Header(props: HeaderProps)  {
  const classes = useStyles();
  const { social, brand, mainMenu, topMenu } = props;
  const socialIcons = social.map((icon, id) => (
    <div key={id} className={classes.socialIconsItems}>
      <a href={icon.url} key={id} target="_blank">
        <FontAwesomeIcon icon={icon.icon} size='1x' />
      </a>
    </div>
  ))

  return (
    <React.Fragment>
      <div className={classes.headerTopArea}>
      <Container>
        <Row>
        <Col sm={6}>
        <Nav
        activeKey="/home"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
          {topMenu.map((item, id) => (
          <Nav.Item key={id}>
            <Nav.Link key={id} href={item.url}>{item.name}</Nav.Link>
          </Nav.Item>
          ))}
      </Nav>
        </Col>
        <Col sm={5}>
          <div className={classes.socialIcon}>
            {socialIcons}
          </div>
        </Col>
        </Row>

      </Container>
      </div>
      <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                <Navbar.Brand href="/">
                  <img src={brand.imageUrl}   width="35px" height="35px" className="d-inline-block align-top" />{' '}
                  {brand.name}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    {
                      mainMenu.map((item, id) => {
                        if (!item.children) {
                          return (<Nav.Link key={id} href={item.url}>{item.name}</Nav.Link>)
                        } else {
                          return (<NavDropdown key={id} title={item.name} id="collasible-nav-dropdown">
                            {item.children.map(child =>
                              <NavDropdown.Item href={child.url}>{child.name}</NavDropdown.Item>

                            )}
                          </NavDropdown>)
                        }

                      })}

                  </Nav>
                </Navbar.Collapse>
            </Navbar>
</div>
    </React.Fragment>
  );
}

