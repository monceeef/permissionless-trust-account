export const FactoryABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_facetRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_defaultFallback",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "BarzDeployed",
    type: "event",
  },
  {
    inputs: [],
    name: "accountFacet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_verificationFacet",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_owner",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract Barz",
        name: "barz",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultFallback",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetRegistry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_verificationFacet",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_owner",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "barzAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verificationFacet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_facetRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_defaultFallback",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_ownerPublicKey",
        type: "bytes",
      },
    ],
    name: "getBytecode",
    outputs: [
      {
        internalType: "bytes",
        name: "barzBytecode",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "creationCode",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;
