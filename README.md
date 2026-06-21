# 👻 GhostJS - System Inspector & Workspace Manager

## 📌 Project Overview

GhostJS is a Node.js command-line application that gathers system information, reads selected environment variables, performs CRUD operations on code files, scans the workspace, detects duplicate files, monitors file changes, and generates detailed JSON reports.

The project is built using Node.js built-in modules along with a few npm packages to provide a clean and interactive command-line interface.

---

# Features

## System Information

* Operating System
* Platform
* Hostname
* CPU Model
* CPU Cores
* Node.js Version
* Architecture
* Total Memory
* Free Memory
* Home Directory
* Username
* System Uptime

---

## Environment Variables

Displays important environment variables such as:

* PATH
* HOME
* USERPROFILE
* TEMP
* USERNAME
* COMPUTERNAME
* SHELL
* LANG

If a variable is unavailable, the application displays:

```
Not Available
```

---

## CRUD Operations

Supports complete file management inside the **workspace** folder.

* Create File
* Read File
* Update File
* Delete File
* Rename File
* List Files

---

## Workspace Scanner

Scans every file inside the workspace and collects:

* File Name
* Extension
* Size
* Number of Lines
* Number of Characters
* Created Time
* Modified Time

---

## Duplicate File Detection

Compares the contents of all files in the workspace.

If duplicate files are found, the application reports both the original and duplicate file names.

---

## Workspace Summary

Displays:

* Total Files
* Total Lines
* Total Characters
* Total Workspace Size

---

## Live File Watching

Monitors the workspace folder using Node.js `fs.watch()`.

Detects:

* File Creation
* File Modification
* File Deletion

---

## JSON Report Generation

Generates a detailed report inside the `reports` folder.

The report contains:

* System Information
* Environment Variables
* Workspace Summary
* Workspace Scan
* Duplicate Files
* Date and Time

---

# Technologies Used

* Node.js
* JavaScript

### Built-in Modules

* fs
* os
* path
* process

### npm Packages

* chalk
* cli-table3
* figlet
* ora
* inquirer

---

# Project Structure

```
GhostJS
│
├── commands
│      systemInfo.js
│      envInfo.js
│      crud.js
│      scan.js
│      watch.js
│      dashboard.js
│      report.js
│
├── utils
│      utils.js
│
├── workspace
│
├── reports
│
├── index.js
├── package.json
└── README.md
```

---

# Code Flow

```
Start

↓

Load Modules

↓

Collect System Information

↓

Collect Environment Variables

↓

Display Dashboard

↓

Perform CRUD Operations

↓

Scan Workspace

↓

Generate Workspace Summary

↓

Detect Duplicate Files

↓

Generate JSON Report

↓

Watch Workspace (Optional)

↓

Exit
```

---

# Installation

Clone or download the project.

Install dependencies:

```bash
npm install
```

Run the application:

```bash
node index.js
```

---

# Modules

## systemInfo.js

Collects operating system information using the Node.js `os` module.

---

## envInfo.js

Reads selected environment variables using `process.env`.

---

## crud.js

Handles Create, Read, Update, Delete, Rename, and List operations for files inside the workspace.

---

## scan.js

Scans workspace files and generates statistics including duplicate detection.

---

## watch.js

Monitors workspace changes in real time.

---

## dashboard.js

Displays information in formatted tables using `cli-table3` and `chalk`.

---

## report.js

Creates timestamped JSON reports inside the `reports` folder.

---

## utils.js

Contains reusable helper functions such as:

* Format Bytes
* Format Uptime
* Count Lines
* Get Extension
* Get Current Date & Time

---

# Error Handling

The application handles common errors such as:

* Missing files
* Missing environment variables
* Invalid file names
* Empty workspace
* Existing file creation attempts

---

# Future Improvements

* Search files by keyword
* Export reports as PDF
* Compress reports
* Password-protected workspace
* Automatic backup system
* Interactive command-line menu
* File hashing for faster duplicate detection
* System resource monitoring

---

# Learning Outcomes

This project helped in understanding:

* Node.js File System Module
* OS Module
* Path Module
* Environment Variables
* JSON Handling
* Modular Programming
* CLI Development
* Workspace Monitoring
* Report Generation

---

# Author

**Shubham Singh**

Built using JavaScript and Node.js for learning purposes.
