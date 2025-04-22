#!/usr/bin/bash

git clone https://github.com/michaelpadiernos/minim.css.git ./source/00-core/_minim.css

export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
nvm install 23
npm i
