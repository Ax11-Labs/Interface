import React from 'react';
import { Info } from 'react-feather';
// import styled from 'styled-components';
// import { RowBetween } from '../Row'
// import  Settings  from '../Settings';
// const ActiveText = styled.div`
//   font-weight: 500;
//   font-size: 20px;
// `

const StepsLiquidity = () => {
  return (
    <>
    {/* <RowBetween style={{ padding: '1rem' }}>
    <ActiveText>Swap</ActiveText>
    <Settings/>
    </RowBetween> */}
    <div style={styles.container}>
      <div style={styles.step}>
        <div style={styles.number}>
<Info size={18}/>
        </div>
        <span style={styles.text}>Select both currencies to define the liquidity pool and specify deposit amounts. For single-sided liquidity, leave the other token's amount at zero.</span>
      </div>
    </div>
    </>
  );
};

// const Point = styled.div`
//  width:2px;

// `

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'transparent',  
    border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
    borderRadius: '12px',
    padding: '10px 20px',
    maxWidth: '600px',
    // margin:'0 0 24px 0',
    gap:'10px'
  },
  step: {
    display: 'flex',
    alignItems: 'top',
    gap: '8px',
  },
  number: {
    borderRadius: '50%',
    backgroundColor: 'transparent',
    color: '#C3C5CB',
    display: 'flex',
    justifyContent: 'center',
    marginTop:'2px',

  },
  text: {
    color: '#6C7284',
    fontSize: '12px',
  },
};

export default StepsLiquidity;
