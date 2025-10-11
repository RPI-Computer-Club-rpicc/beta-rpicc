import React from "react";

const membershipFees = [
  // { type: 'Base Membership', fee: '100 BDT/month', description: 'Includes one squad' },
  // { type: 'Additional Squad', fee: '25 BDT/month', description: 'Per squad (max 2 additional)' },
  { type: "Registration Fee", fee: "30 BDT", description: "One-time payment" },
  {
    type: "Online Processing",
    fee: "5 BDT",
    description: "For online registration only",
  },
];

const FormFee = () => {
  return (
    <div>
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-indigo-900 "> Form Fees</h3>
        <p className="text-red-300">Form Fee Is Not Refundable</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {membershipFees.map((fee, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-indigo-700">{fee.type}</p>
              <p className="text-2xl font-bold text-gray-900 my-2">{fee.fee}</p>
              <p className="text-sm text-gray-600">{fee.description}</p>
            </div>
          ))}
        </div>
        <div className="my-2 ">
          <p className="text-red-300 font-semibold">
            Form Fee Is 30. if You Apply Online , Form Fee Will
            Be 30 + 5 (online charge) = 35 .
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormFee;
