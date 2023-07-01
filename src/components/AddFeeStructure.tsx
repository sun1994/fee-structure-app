import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate  } from 'react-router-dom';
import FeeStructure from '../types/FeeStructure';
import { addFeeStructure } from '../store/actions';
import '../App.css'

const AddFeeStructure: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [feeStructure, setFeeStructure] = useState<FeeStructure>({
    id: Date.now(),
    name: '',
    frequency: '',
    installment: 0,
    amount: 0,
    registerFee: 0,
    course: [],
    studentCount: 0,
    status: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFeeStructure((prevFeeStructure) => ({
      ...prevFeeStructure,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(addFeeStructure(feeStructure));
    navigate('/');
  };

  return (
    <div>
      <h2>Add Fee Structure</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Fee Structure Name:
            <input
              type="text"
              name="name"
              value={feeStructure.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Frequency:
            <select
              name="frequency"
              value={feeStructure.frequency}
              onChange={handleChange}
              required
            >
              <option value="">Select Frequency</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Annually">Annually</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Installment:
            <input
              type="number"
              name="installment"
              value={feeStructure.installment}
              onChange={handleChange}
              min={0}
              max={12}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={feeStructure.amount}
              onChange={handleChange}
              min={0}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Register Fee:
            <input
              type="number"
              name="registerFee"
              value={feeStructure.registerFee}
              onChange={handleChange}
              min={0}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Course:
            <select
              name="course"
              onChange={handleChange}
              multiple
              required
            >
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Student Count:
            <input
              type="number"
              name="studentCount"
              value={feeStructure.studentCount}
              onChange={handleChange}
              min={0}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Status:
            <select
              name="status"
              value={feeStructure.status.toString()}
              onChange={handleChange}
              required
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </label>
        </div>
        <div className='form-footer'>
          <button className='button' type="submit">Submit</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddFeeStructure;
