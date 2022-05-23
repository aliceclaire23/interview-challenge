# Feedr Technical Challenge

Thank you for taking the time to attempt this challenge.

These tests are used to evaluate candidates of all skill levels so please complete them to a level you feel is an accurate representation of your skill set.

Please read `README-FRONTEND.md` for further instructions.

If you have any questions or would like to clarify any details, please email nick@feedr.co.

Good luck!

# Quick Start

Fork the repository, clone it to your local system, then:

## Install dependencies

yarn (or npm install)

## Start development server

yarn dev (or npm run dev)

## Run tests

yarn test (or npm run test)

# Notes/Plan

## Funcionality:

- [x] Break down existing code into smaller components
- [x] Fetch data from /api/items endpoint and populate items in left-hand sidebar with data
- [x] Populate Menu Preview on the righthand side with selected items from sidebar
- [x] Add filter (by name) in backend
- [x] Add search based on name filter in the frontend (side bar)
- [x] Delete items from the menu by clicking the (x)
- [x] Show the total number of selected items in the header
- [x] Show the total number of each dietary type selected in the header

## Tests:

### App.Js

- [x] it renders menu builder
- [x] it renders menu summary
- [ ] it fetches data
- [ ] it fetches data with filter

### Menu Summary

- [ ] it renders dietary types component
- [ ] it renders correct item count
- [ ] it renders the correct dietary type count

### Menu Builder

- [ ] it renders an item list with class name ‘item-picker’
- [ ] it renders an item list with class name ‘menu-preview’

### Item List

- [ ] it renders the correct number of items

### Dietary Type List

- [ ] it renders the correct number of dietary type labels

### Dietary Type Label

- [ ] it renders the correct label
