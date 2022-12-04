export const deployerAbi = [
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
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'SCWs',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
