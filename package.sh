#!/bin/bash

declare -r app_name="package-demo"
declare -r version="1.0"
# Stops execution of the script if error
set -e

export NODE_ENV=production
npx next build

zip -r appv2.zip .next src public *.json *.ts *.mjs