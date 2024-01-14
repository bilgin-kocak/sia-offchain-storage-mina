# Trustless Ballot Box

Trustless Ballot Box is a secure and decentralized voting platform utilizing the Mina blockchain and renterd's decentralized storage technology. This project aims to revolutionize digital voting, ensuring maximum security, transparency, and user privacy.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Inspired by the need for a more secure and transparent voting process, Trustless Ballot Box leverages the power of blockchain technology to provide a voting system where integrity and privacy are paramount. Our platform ensures that every vote is securely cast and counted, bringing trust and accountability to digital elections.

## Features

- **Secure Voting**: Utilizes zero-knowledge proofs to ensure voter privacy.
- **Blockchain Integration**: Leverages Mina blockchain for immutable vote recording.
- **Decentralized Storage**: Uses renterd for secure, decentralized data storage.
- **Scalability**: Efficiently handles large-scale elections with a Merkle Tree structure.
- **User-Friendly Interface**: Easy-to-use interface for voters and administrators.

## Technology Stack

- **Blockchain**: Mina, Sia
- **Smart Contracts**: zkApps (TypeScript)
- **Off-Chain Storage**: renterd (Sia network)
- **Frontend**: Next, React
- **Backend**: Express

## Installation

Here is detailed installation process.

Firstly run renterd:

```bash
renterd
```

Then install the necessary libraries.

```bash
# Example installation steps
git clone https://github.com/bilgin-kocak/sia-offchain-storage-mina.git
cd trustless-ballot-box
cd ui
npm install
cd ..
cd backend
npm install
```

After that you can run first backend and then frontend.

```bash
node ./backend/server.js
```

```bash
cd ui
npm run dev
```

## Acknowledgements

- This project is a part of the [Sia: Innovate and Integrate 2023](https://renterdinnovate2023.devpost.com/).
- A big thank you to the organizers and supporters of the Sia: Innovate and Integrate 2023.

## Contributing

Contributions to this project are welcome.

## License

This project is licensed under the [MIT License](LICENSE.md).
