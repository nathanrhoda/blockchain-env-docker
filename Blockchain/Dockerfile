# node:alpine will be our base image to create this image
FROM node:16-alpine
# Set the /app directory as working directory
WORKDIR /app
# Install ganache-cli globally
RUN npm install -g ganache-cli
# Set the default command for the image
#CMD ["ganache-cli", "-h", "0.0.0.0"]

ENTRYPOINT ganache-cli -u 0x0e5069514a3dd613350bab01b58fd850058e5ca4 -f wss://eth-mainnet.alchemyapi.io/v2/mw5ku40muRjvDj8AB_hZFH3EvW1mzO7m -m "gravity drop steel humor quarter cost taxi sunny sustain vacuum paper boy"  -p 7545  -e 99999999999999999999 --networkId 57771 --host 0.0.0.0