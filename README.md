# [threejs-rain-storm](https://threejs-rain-storm.web.app/)

<br />
<img src="https://github.com/sctlcd/threejs-rain-storm/blob/main/design/threejs-rain-storm-mockup-presentation.png" alt="threejs-rain-storm" width="900">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Deployment](#deployment)
	- [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
	- [Deployment – Live website](#deploymentLiveWebsite)

4. [Credits](#credits)
	- [Media](#media)
---

## Introduction <a name="introduction"></a>

Creating an animated 3D realistic rain storm with Three.js

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>
### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:  
    - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
    - Please see `.nvmrc` file at the root of `threejs-rain-storm` repo.
    - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
2. In GitHub click on the repository nammed [threejs-rain-storm](https://github.com/sctlcd/threejs-rain-storm)
3. Clone the repository locally. Run

    ````
      git clone https://github.com/sctlcd/threejs-rain-storm.git
    ````

4. Install all modules listed as dependencies in package.json

    ```
      cd threejs-rain-storm
      npm i 
    ```

    note: in this app 
    - [three](https://www.npmjs.com/package/three) - **a JavaScript 3D library**, 
    - [vite](https://vitejs.dev/) - **a built in development server**,

5. Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

[threejs-rain-storm](https://github.com/sctlcd/threejs-rain-storm) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

    ```
      npm install -g firebase-tools
    ```

2. Create firebase.json and .firebaserc at the root of your project with the following content:

    `firebase.json`:

    ```
      {
        "hosting": {
          "public": "dist",
          "ignore": [],
          "rewrites": [
            {
              "source": "**",
              "destination": "/index.html"
            }
          ]
        }
      }
    ```

    `.firebaserc`:

    ```
      {
        "projects": {
          "default": "<YOUR_FIREBASE_ID>"
        }
      }
    ```

3. After running `npm run build`, deploy using the command `firebase deploy`. 


=> live link: https://threejs-rain-storm.web.app/

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

### Media <a name="media"></a>

- [favicon.ico](https://www.flaticon.com/free-icon/rain_4834585?term=rain&related_id=4834585) - [Flaticon](https://www.flaticon.com/) | copyright [Konkapp](https://www.flaticon.com/authors/konkapp)
- [colored-smoke-png-43277-min.png](https://www.freeiconspng.com/downloadimg/43277) - [Freeiconspng](https://www.freeiconspng.com/img/43277) | copyright [Ahkâm](https://www.freeiconspng.com/img/43277)
- [smoke-texture-free-download-min.jpg](https://www.textures4photoshop.com/tex/fire-and-smoke/smoke-texture-free-download.aspx) - [textures4photoshop](https://www.textures4photoshop.com/) | copyright unknown


Back to [top](#tableOfContents)

---