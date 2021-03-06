var React = require('react'),
    Link = require('react-router').Link,
    Header = require('./header.jsx'),
    Footer = require('./footer.jsx');



var Page = React.createClass({
  render: function() {
    var splash;

    if (this.props.splash){
      splash =
          <div className="splash-container">
            <div className="splash">
              <div className="splash-head">
                Contributor Badges
              </div>
              <div className="splash-subhead">
                <p>Exploring the use of digital badges for crediting contributors to scholarly papers for their work</p>
              </div>
              <p>
              <Link to="about" className="pure-button pure-button-primary">Learn More</Link>
              </p>
            </div>
          </div>
      }

    return (
      <div className={ this.props.splash ? "home" : "" }>
        <Header />
        { splash }
        <div className="content-wrapper">
          <div className="content">
            { this.props.children }
          </div>
          <Footer />
        </div>
      </div>
    );
  }
});

module.exports = Page;