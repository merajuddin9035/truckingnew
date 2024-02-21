import React from 'react'
import './CostToStart.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const CostToStart = () => {
  return (
    <>
    <h1 className='CostToStart'>Cost to Start</h1>
<div className='PaymentContainer'>

<div className='ReceiptIcon'>
    <ReceiptIcon style={{ fontSize: '10em' }} />
    <h2 >₹ 1,00,000</h2>
    <h1>Down Payment</h1>
    </div>
    
    <div className='AutomationFee'>
    <CurrencyRupeeIcon style={{ fontSize: '10em' }} />
    <h2>₹ 1,00,000</h2>
    <h1>Automation Fee</h1>
</div>

    </div>


    
    </>
  )
}
