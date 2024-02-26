#!/bin/bash

# Update package lists
sudo apt-get update

# Install required dependencies
sudo apt install --assume-yes build-essential clang curl libssl-dev protobuf-compiler

# Install Rust using rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y

# Source the cargo environment script to set up environment variables
source $HOME/.cargo/env

# Set default Rust version to stable
rustup default stable   

# Install specific nightly version
rustup install nightly-2023-12-21  

# Add WebAssembly target for nightly version (pallet-contracts compatible)
rustup target add wasm32-unknown-unknown --toolchain nightly-2023-12-21 

# Set nightly version as override 
rustup override set nightly-2023-12-21  

# Restart bash for changes to take effect
exec bash
