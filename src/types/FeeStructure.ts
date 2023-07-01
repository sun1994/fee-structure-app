interface FeeStructure {
    id: number;
    name: string;
    frequency: string;
    installment: number;
    amount: number;
    registerFee: number;
    course: string[];
    studentCount: number;
    status: boolean;
  }
  
  export default FeeStructure;
  