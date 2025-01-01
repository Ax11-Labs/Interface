import React from 'react';
import styled from 'styled-components';
import { RowBetween } from '../Row'
import  Settings  from '../Settings';
const ActiveText = styled.div`
  font-weight: 500;
  font-size: 20px;
`

const StepsComponent = () => {
  return (
    <>
    <RowBetween style={{ padding: '1rem' }}>
    <ActiveText>Swap</ActiveText>
    <Settings/>
    </RowBetween>
    <div style={styles.container}>
      <div style={styles.step}>
        <div style={styles.number}>1</div>
        <span style={styles.text}>Select tokens</span>
      </div>
      <div style={styles.step}>
        <div style={styles.number}>2</div>
        <span style={styles.text}>Enter amount</span>
      </div>
      <div style={styles.step}>
        <div style={styles.number}>3</div>
        <span style={styles.text}>Click Swap</span>
      </div>
    </div>
    </>
  );
};

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
    margin:'0 0 24px 0',
    gap:'10px'
  },
  step: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  number: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: '#2C2F36',
    color: '#C3C5CB',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'10px',
  },
  text: {
    color: '#6C7284',
    fontSize: '12px',
  },
};

export default StepsComponent;
