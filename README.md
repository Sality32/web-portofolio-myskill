# Portofolio Web
This is the repository to finish technical test from MySkill

## Getting Started


### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```cmd
   git clone https://github.com/Sality32/web-portofolio-myskill.git
   ```
2. Go to project
   ```cmd
   cd web-portofolio-myskill
   ```
3. install npm 
   ```sh
   npm insall 
   ```
4. run project
   ```sh
   npm run dev
   ```

## Schema Data
I use 2 types store data in local, i use mockAPI to store my portofolio and profile data and i use file json with fs for my image **with base 64 format**

when i trying to use mockApi, i get denied about maximum load data when i store, base64 had to long string and i was tryng using object its same, so i decide to use json file.
## MockAPI
### JSON Data
```
profile: {
    id: int,
    name: string,
    description: string,
    position: string,
    createdAt: date
},
portofolio: {
    id: int,
    companyName: string,
    description: string,
    position: string,
    startDate: date,
    endDate: date,
    createdAt: date
}
```

## JSON FILE with fs
```
medias: [
    {
        id: int,
        name: string,
        isBackground: boolean,
        base64: text
    }
]
```
## Update Design
from the desain, i had some update on page
### Show Page
- Add button edit under profile to make user focus on card portofolio

### Edit Page
- add button every form card that make user can edit separated part of page
- When upload file on background, that show preview before implement in page
- When upload file on avatar, that show preview in avatar image when implement

- Add Save and Back Button to make user easier decided about changes
- Add remove icon on every item Portofolio, make user can remove exist portofolio or new portofolio before save

## Tech Stack
- NodeJS 18.19.0
- react-dom 18.*
- Chakra ui 2.8.2
- react 18.
- Next JS 13.*
- Yup 1.3.3
- SWR 2.2.4
