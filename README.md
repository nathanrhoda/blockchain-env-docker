# Dockerizing a Blockchain Development Environment

- Goal is to ultimately standup a docker-compose that has a instance of ganache cli running 
- As well as a simple web3 node application that retrieves the balance from the ganache cli instance.
- Finally I will deploy a smart contract into the docker environment and integrate into it using the web3 node application

## Docker Basics

docker build -t <Image-Name:Version>  ./ (Make sure you are running in the correct directory)

docker run -it -p 7545:7545 <Image-Name:Version>

docker run --name ganache -it -p 7545:7545 bot:latest
docker run --name bot -it -p 8080:8080 bot:latest

docker-compose up -d
docker-compose stop 

### Repo consists of:
1. Blockchain - Spins up local blockchain
2. Bot - Web3 Integrations that connects to local blockchain
3. Contracts - Smart contracts for web3 integrations 



# TODO

- Access smart contract from node app -> How to push abi contract to node app keep in mind ci/cd automation 
- Add a ui to retrieve balances and transfer tokens between accounts
- Push to blockchain to ecs/ec2
- Push node app to lambda 
- Push node app to aws container
- terraform everything
- extend blockchain to make use of private transactions
