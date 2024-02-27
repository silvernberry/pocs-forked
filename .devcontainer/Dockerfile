# Use the official Ubuntu image as a base
FROM ubuntu:latest

# Copy Docker_setup.sh
COPY Docker_setup.sh
RUN chmod +x Docker_setup.sh && Docker_setup.sh

# Create a new empty shell project named 'pocs'
RUN USER=root cargo new --bin pocs
WORKDIR /pocs

# Copy the actual source code into the container
COPY . .

# Build the project in release mode  
RUN cargo build --release

# Expose the specified ports
EXPOSE 9944 9933 30333

# Run the Substrate node in development mode . STRICTLY USED FOR DEVELOPMENT PURPOSE ONLY
CMD ["./target/release/pocs", "--dev", "--rpc-external", "--rpc-cors=Unsafe"]
