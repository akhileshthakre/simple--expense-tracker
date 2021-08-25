import React,{useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transactions'

const TranscationList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext)

    useEffect(() => {
      getTransactions()
    },[])

    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction => (
           <Transactions key ={transaction.id} transaction={transaction} />
          ))}

        </ul>
        </>
    )
}

export default TranscationList
