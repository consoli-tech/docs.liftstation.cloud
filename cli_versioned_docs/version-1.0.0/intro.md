# CLI Documentation

## Overview

The LiftStation.cloud CLI is used to enter well and lift station data through a command line interface. This may
be preferred to sending API requests.

The CLI is written with Node.js. You will need to install Node.js and the NPM package manager to install this program
on your computer.

## Windows Installation

Go to [Node.js Download](https://nodejs.org/en/download/) to download Node.js. Ensure that the Node.js version is
12 or greater. 

Once you have completed the installation process, run the following command to ensure that they are installed

```powershell
PS C:\Users\conutils node -v
v14.17.0
```

```powershell
PS C:\Users\conutils npm -v
6.14.13
```

Now that they are installed open a Powershell Window and run `npm i -g lscloud`

```powershell
PS C:\Users\conutils npm i -g lscloud
```

Run command `lscloud` to ensure installation was successful

```powershell
PS C:\Users\conutils lscloud
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

## Mac Installation

If `homebrew` is not installed go [here](https://brew.sh/).

Open a terminal Window and enter `brew install node@12`. 

Once you have completed the installation process verify that Node and NPM have been installed

```bash
$ node -v
v14.17.0
```

```bash
$ npm -v
6.14.13
```

Run the command `npm i -g lscloud`

