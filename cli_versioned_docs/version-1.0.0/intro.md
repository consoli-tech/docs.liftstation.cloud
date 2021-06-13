# CLI Documentation

## Overview

The LiftStation.cloud CLI is used to enter well and lift station data through a command line interface. This may
be preferred to sending API requests.

The CLI is written with Node.js. You will need to install Node.js and the NPM package manager to install this program
on your computer. Note that the CLI requires version 12 or greater of Node.js.

## Installation
Once you have installed Node.js and npm for your operating system run the following command:
```bash
$ npm i -g lscloud
```
Once the installation completes run the following command to verify installation. Note that this screen lists the commands
for the CLI.
```bash
$ lscloud
lscloud

Commands:
  lscloud config             Enter your API Credentials
  lscloud get wells          Retrieve a list of wells. Used to retrieve the ID
                             of a well to push readings to the cloud.
  lscloud push well reading  Push a well reading to the cloud.

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

## Windows Powershell Notes

You may receive this a message that says lscloud cannot be loaded because running scripts is disabled on 
this system. You have three options
1. Run `Set-ExecutionPolicy RemoteSigned` as an administrator. This command will allow you to run scripts. When you are
done you can run `Set-ExecutionPolicy Restricted` as an administrator to put things back the way they were.
2. If you prefer to use Powershell, and you don't want to change the settings for security purposes you can install the 
script in the Windows Subsystem for Linux and call it from Powershell. You do this by prefacing commands with `wsl`. So `wsl lscloud get wells`.
The Windows Subsystem for Linux also provides a terminal that you could use if you don't need to use powershell.   
3. You can run the script in cmd.

## Basics
You can use the parameter `--help` with any command to find out more about it

```bash
$ lscloud config --help
lscloud config

Enter your API Credentials

Options:
  --help        Show help                                              [boolean]
  --version     Show version number                                    [boolean]
  --api_key     Your API Key                                 [string] [required]
  --api_secret  Your API Secret                              [string] [required]

```

