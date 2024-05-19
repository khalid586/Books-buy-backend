
# Deployment steps
1. create a vercel.json file and paste the following

```json
{
    "version": 2,
    "builds": [
        { 
            "src": "/index.js", "use": "@vercel/node" 
        }
    ],
    "routes": [
        {   "src": "/(.*)", "dest": "/", 
            "methods":["GET","POST","PUT","PATCH","DELETE","OPTIONS"] 
        }
    ]
 }
```

2. Setup and deploy - yes
3. select scope (account) - khalid's projects (for me)
4. Link to existing project - no (for me)
5. Select your project name (By default it will be folder's name)
6. Choose directory - ./ 
7. configure the environment variables
8. run ``` vercel --prod ```