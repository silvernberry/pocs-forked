# Use the official Rust image as a base
FROM rust:latest

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y \
    clang \
    libssl-dev \
    protobuf-compiler 

# Create a new non-root user to run Docker commands
RUN useradd -m rustuser
USER rustuser

# Create a new empty shell project named 'pocs' within the user's home directory
RUN cargo new --bin /home/rustuser/pocs
WORKDIR /home/rustuser/pocs

# Update Rust toolchain to the latest stable version
RUN rustup update stable

# Install Rust nightly version (as of 2023-12-21)
RUN rustup install nightly-2023-12-21

# Configure the Rust toolchain for wasm32-unknown-unknown on nightly-2023-12-21
RUN rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21

# Override the default Rust version to nightly-2023-12-21 for this project
RUN rustup override set nightly-2023-12-21
