# My blog - Powered by Payload, Next, Tailwind
- [My blog - Powered by Payload, Next, Tailwind]
  This is a full- stack blog project using:
  - [Next.js](https://nextjs.org/docs)- frontend framework
  - [Payload CSM](https://payloadcms.com/docs/getting-started/installation) - headless CMS for content management
  - [Tailwind CSS](https://tailwindcss.com/) - styling
## Setup
### 1. Create a Next.js app<br>
  * Install project
  ``` 
  npx create-next-app
  ```

### 2. Install [Payload](https://payloadcms.com/docs/getting-started/installation)
  * followed "Adding to existing app"<br>
  a. install packages<br>
  b. install db adapter<br>
  c. create [payload files](https://github.com/payloadcms/payload/tree/main/templates/blank/src/app/(payload))<br>
  d. add Payload Plugin to your Next.js config<br>
  e. add payload config to ts config<br>
  Note: <br>
  add .env file w/ db cred & payload secret (generated)<br>
  f. Visit /admin<br>

### Run locally
```
npm run dev
pnpm dev
```



