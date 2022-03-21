# Dockerizing a Blockchain Development Environment

- Goal is to ultimately standup a docker-compose that has a instance of ganache cli running 
- As well as a simple web3 node application that retrieves the balance from the ganache cli instance.
- Finally I will deploy a smart contract into the docker environment and integrate into it using the web3 node application

## Docker Basics

docker build -t <Image-Name:Version>  ./ (Make sure you are running in the correct directory)

docker run -it -p 7545:7545 <Image-Name:Version>


### Repo consists of:
1. Blockchain - Spins up local blockchain
2. Bot - Web3 Integrations that connects to local blockchain
3. Contracts - Smart contracts for web3 integrations 