import React from 'react';
import PropTypes from 'utils/propTypes';

import { Card, CardText, CardTitle, Progress } from 'reactstrap';
import Typography from '../Typography';

const NumberWidget = ({
  title,
  subtitle,
  number,
  color,
  progress: { value, label },
  ...restProps
}) => {
  return (
    <Card body {...restProps}  style={{alignItems:"center", padding:"10px"}}>
      <div className="d-flex justify-content-between">
        <CardText tag="div">
          <Typography className="mb-0" style={{paddingTop:"10px"}}>
            <strong>{title}</strong> Total Applicants
          </Typography>
          <Typography className="mb-0 text-muted small">{subtitle}</Typography>
        </CardText>
        <CardTitle style={{paddingTop:"10px", marginLeft:"7px", color:"#d7790e"}}><b>{number}</b></CardTitle>
      </div>
   
{/*      <CardText tag="div" className="d-flex justify-content-between">
        <Typography tag="span" className="text-left text-muted small">
          {label}
        </Typography>
        <Typography tag="span" className="text-right text-muted small">
          {value}%
        </Typography>
  </CardText>*/}
    </Card>
  );
};

NumberWidget.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
  ]),
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
};

NumberWidget.defaultProps = {
  title: '',
  subtitle: '',
  number: 0,
  color: 'primary',
  progress: {
    value: 0,
    label: '',
  },
};

export default NumberWidget;
