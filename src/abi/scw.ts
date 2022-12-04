export const scwAbi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_signers',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_guardians',
        type: 'address[]',
      },
    ],
    name: 'deployAccount',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
