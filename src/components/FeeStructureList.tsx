import React from 'react';
import { connect, MapStateToProps } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css';

const FeeStructureList: React.FC = (props: any) => {
    const {feeStructureList } = props;
  return (
    <div>
      <h2>Fee Structure List</h2>
      <div className='addFee'>
        <Link to="/add">Add Fee Structure</Link>
      </div>
      <table className='fee-table'>
        <thead>
          <tr className='fee-table-row fee-table-header'>
            <th className='fee-table-row-item'>Name</th>
            <th className='fee-table-row-item'>Frequency</th>
            <th className='fee-table-row-item'>Installment</th>
            <th className='fee-table-row-item'>Amount</th>
            <th className='fee-table-row-item'>Register Fee</th>
            <th className='fee-table-row-item'>Course</th>
            <th className='fee-table-row-item'>Student Count</th>
            <th className='fee-table-row-item'>Status</th>
          </tr>
        </thead>
        <tbody>
          {feeStructureList.length !== 0 ? feeStructureList.map((feeStructure : any ) => (
            <tr key={feeStructure.id} className='fee-table-row'>
              <td className='fee-table-row-item'>{feeStructure.name}</td>
              <td className='fee-table-row-item'>{feeStructure.frequency}</td>
              <td className='fee-table-row-item'>{feeStructure.installment}</td>
              <td className='fee-table-row-item'>{feeStructure.amount}</td>
              <td className='fee-table-row-item'>{feeStructure.registerFee}</td>
              <td className='fee-table-row-item'>{feeStructure.course}</td>
              <td className='fee-table-row-item'>{feeStructure.studentCount}</td>
              <td className='fee-table-row-item'>{feeStructure.status ? 'Active' : 'Inactive'}</td>
            </tr>
          )) : <tr><td colSpan={10}>Data not available</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps(state: any) {
    return {
        feeStructureList : state?.feeStructures
    };
}


export default connect(mapStateToProps) (FeeStructureList);
