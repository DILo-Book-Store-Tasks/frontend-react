import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

const ResitFooter = props => {
  return (
    <footer class="page-footer font-small blue bg-info" style={{marginTop:"20px",fontWeight:"bold",color:"#FFF"}}>
      <div class="footer-copyright text-center py-3">© 2019 Copyright
        <a href="https://youtube.com/c/RestuDwiCahyo" style={{color:"#FFF"}}> Book Town</a>
      </div>
    </footer>
  );
};

ResitFooter.propTypes = propTypes;
ResitFooter.defaultProps = defaultProps;

export default ResitFooter;
