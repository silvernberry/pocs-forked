#!/bin/bash

# Build the project in release mode  
cargo build --release

# Run the Substrate node in development mode. STRICTLY USED FOR DEVELOPMENT PURPOSE ONLY
./target/release/pocs --dev --rpc-external --rpc-cors=Unsafe
