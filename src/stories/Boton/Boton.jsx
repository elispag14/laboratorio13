import PropTypes from "prop-types";
import "./Boton.css"; 

export const Boton = ({ label, Restablecer, size }) => {
  const tipo = Restablecer ? "btn-Restablecer" : "btn-RestablcerAhora";
  return (
    <button type="button" className={'btn {$tipo}'}>
       {label}
    </button>
  );
 };
   
Boton.PropTypes = {
    label: PropTypes.string,
    Restablecer:PropTypes.bool,
    size:PropTypes.oneOf(["small", "medium", "large"]),
};

Boton.defaultProps = {
    label: "Restablecer",
    Restablecer: true,
    size: "medium",
};