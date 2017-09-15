import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './pages/home/Home';

class HeaderComp extends Component {
  render(){
    return(
      <header>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            {/*<!-- Slide One - Set the background image for this slide in the line below -->*/}
            <div className="carousel-item active" styles="background-image: url('http://placehold.it/1900x1080')">
              <div className="carousel-caption d-none d-md-block">
                <h3>First Slide</h3>
                <p>This is a description for the first slide.</p>
              </div>
            </div>
            {/*<!-- Slide Two - Set the background image for this slide in the line below -->*/}
            <div className="carousel-item" styles="background-image: url('http://placehold.it/1900x1080')">
              <div className="carousel-caption d-none d-md-block">
                <h3>Second Slide</h3>
                <p>This is a description for the second slide.</p>
              </div>
            </div>
            {/*<!-- Slide Three - Set the background image for this slide in the line below -->*/}
            <div className="carousel-item" styles="background-image: url('http://placehold.it/1900x1080')">
              <div className="carousel-caption d-none d-md-block">
                <h3>Third Slide</h3>
                <p>This is a description for the third slide.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    );
  }
}

const NavBarComp = (props)=>(
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
        <a className="navbar-brand" href="#">WebSiteName</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">Page 1-1</a></li>
              <li><a href="#">Page 1-2</a></li>
              <li><a href="#">Page 1-3</a></li>
            </ul>
          </li>
          <li><a href="#">Page 2</a></li>
          <li><a href="#">Page 3</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

/*<!-- Navigation -->*/
class NavComp extends Component {
  render(){
    return(
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="about.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Portfolio
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                  <a className="dropdown-item" href="portfolio-1-col.html">1 Column Portfolio</a>
                  <a className="dropdown-item" href="portfolio-2-col.html">2 Column Portfolio</a>
                  <a className="dropdown-item" href="portfolio-3-col.html">3 Column Portfolio</a>
                  <a className="dropdown-item" href="portfolio-4-col.html">4 Column Portfolio</a>
                  <a className="dropdown-item" href="portfolio-item.html">Single Portfolio Item</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Blog
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                  <a className="dropdown-item" href="blog-home-1.html">Blog Home 1</a>
                  <a className="dropdown-item" href="blog-home-2.html">Blog Home 2</a>
                  <a className="dropdown-item" href="blog-post.html">Blog Post</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Other Pages
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                  <a className="dropdown-item" href="full-width.html">Full Width Page</a>
                  <a className="dropdown-item" href="sidebar.html">Sidebar Page</a>
                  <a className="dropdown-item" href="faq.html">FAQ</a>
                  <a className="dropdown-item" href="404.html">404</a>
                  <a className="dropdown-item" href="pricing.html">Pricing Table</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }  
}

/* <!-- Marketing Icons Section -->*/
class MarkComp extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <h4 className="card-header">Card Title</h4>
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <h4 className="card-header">Card Title</h4>
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <h4 className="card-header">Card Title</h4>
            <div className="card-body">
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
            </div>
            <div className="card-footer">
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*<!-- Portfolio Section -->*/
class PortComp extends Component {
  render(){
    return(
      <div>
        <h2>Portfolio Heading</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project One</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Two</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Three</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Four</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 portfolio-item">
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Five</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 portfolio-item" >
            <div className="card h-100">
              <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">Project Six</a>
                </h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* <!-- Features Section --> */
class FeatComp extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-lg-6">
          <h2>Modern Business Features</h2>
          <p>The Modern Business template by Start Bootstrap includes:</p>
          <ul>
            <li>
              <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid rounded" src="http://placehold.it/700x450" alt="" />
        </div>
      </div>
    );
  }
}

/*<!-- Call to Action Section -->*/
class CalComp extends Component {
  render(){
    return(
      <div className="row mb-4">
        <div className="col-md-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
        <div className="col-md-4">
          <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
        </div>
      </div>
    );
  }
}

/*<!-- Footer -->*/
class FootComp extends Component {
  render(){
    return(
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
        </div>
      </footer>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavComp />
//         <HeaderComp />
//         {/*<!-- Page Content -->*/}
//         <div className="container">
//           <h1 className="my-4">Welcome to Modern Business</h1>
//           <MarkComp />
//           <PortComp />
//           <FeatComp />
//           <hr />
//           <CalComp />
//         </div>
//         {/*<!-- /.container -->*/}
//        <FootComp />

//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer  />
      </div>
    );
  }
}
 
export default App;
