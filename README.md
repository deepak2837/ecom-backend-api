# ecom-backend-api
### This project is live 
### [see it live] http://ecom-backend-apis.herokuapp.com 



#### **allmost all requests are authrised by token: Request Headers => x-access-token : "ur-token-value-recieved-while-sign-in"

# Ecom:

## 1. Product:
     
       a) Get request:
            ▪ request to fetch a specfic product by its id
              http://127.0.1:8000/ecom/api/v1/products/4
              
            ▪ request to get all the products from database from product table
              http://127.0.1:8000/ecom/api/v1/products/
       
            ▪ fetch a product by its product id
              http://127.0.1:8000/ecom/api/v1/products/1
              
         b) post requests :
             ▪ post request to add a product to product table
                http://127.0.1:8000/ecom/api/v1/products/
                  Bodyraw(json):
                  {
                    "id": 7,
                    "name": "tv",
                    "description": "thi is one of tfhe best remi mobile ",
                    "cost": 68400,
                    "createdAt": "2022-06-12T09:08:50.000Z",
                    "updatedAt": "2022-06-12T09:08:50.000Z",
                    "categoryId": 1
                        }
                      
         c) Put requests :
            ▪ put request to update a product using the product idle
              http://127.0.1:8000/ecom/api/v1/products/4
                • Bodyraw(json):
               	{
        		"id": 5,
        		"name": "tv",
         		"description": "thi is one of tfhe best remi mobile ",
         		"cost": 68400,
         		"categoryId": 2
                    }
            
         d) Delete requests :
            ▪ delete request to delte a product based on its id
              http://127.0.1:8000/ecom/api/v1/products/3


         e) filter requests(Get):
            ▪ filter product based on the their name and the minCost
              http://127.0.1:8000/ecom/api/v1/products/?name=tv&maxCost=40000
       
            ▪ filter product based on the their name and minCost and maxCost
              http://127.0.1:8000/ecom/api/v1/products/? name=tv&minCost=40000&maxCost=50000
              
            ▪ filter product based on the their name and minCost and maxCost
              http://127.0.1:8000/ecom/api/v1/products/?name=tv&minCost=40000&maxCost=50000
              
            ▪ filter product based on the the minCost only
              http://127.0.1:8000/ecom/api/v1/products/?minCost=40000
              
            ▪ filter product based on the the minCost and maxCost only
              http://127.0.1:8000/ecom/api/v1/products/?minCost=40000&maxCost=50000
              
            ▪ filtering out all the products based on their category
              http://127.0.1:8000/ecom/api/v1/categories/2/products/


## 2. Categories :
         a) Get request:
            ▪ request to fetch a specfic categories by its id
              http://127.0.1:8000/ecom/api/v1/categories/1
              
            ▪ request to get all the categories from database from categories table
              http://127.0.1:8000/ecom/api/v1/categories/
       
            ▪ fetch a categories by its category id
              http://127.0.1:8000/ecom/api/v1/categories/1
              
         b) Post requests :
            ▪ post request to add a category to category table
               http://127.0.1:8000/ecom/api/v1/categories/
                • Bodyraw(json):
                  {
                    "id": 3,
                    "name": "poly ethlene",
                    "description": "This category will contain all the polythene 22 products",
                    "createdAt": "2022-06-12T09:22:53.000Z",
                    "updatedAt": "2022-06-12T09:22:53.000Z"
                        }
                          
         c) Put requests :
            ▪ put request to update a product using the category  id
              http://127.0.1:8000/ecom/api/v1/categories/1
                Bodyraw(json):
                  {
                    "id": 3,
                    "name": "cycling itens",
                    "description": "This category will contain all the cycling  products",
                    "createdAt": "2022-06-12T09:22:53.000Z",
                    "updatedAt": "2022-06-12T09:22:53.000Z"
                        }
                      
         d) Delete requests :
            ▪ delete request to delte a product based on its id
              http://127.0.1:8000/ecom/api/v1/categories/3

              
## 3. Auth:
         a) Sign in :
            ▪ Sign in requestion by the user(get)
               http://127.0.0.1:8000/ecom/api/v1/auth/signin
                Bodyraw (json):
                {
        	     "username": "deepak",
         	     "password": "deepu"
                 }
                  
         b) Sign up(post) :
            ▪ sign up request(post) 
              http://127.0.0.1:8000/ecom/api/v1/auth/signup
                Bodyraw (json):
                {
                  "username": "deepak1111",
                  "password": "deepu",
                  "email": "deefu1v1jjh14e1gfh1@gmrail.com",
                  "roles": ["admin"]
                     }
## 4. Cart:
         a) Get request:
            ▪ request to fetch all the things of cart
              http://127.0.0.1:8000/ecom/api/v1/carts/:cartId
              
         b)	Get request:
              ▪ request for creating the cart
                http://127.0.0.1:8000/ecom/api/v1/carts
              
          c) Put requests :
            ▪ this is the request to add the items to the cart
              http://127.0.0.1:8000/ecom/api/v1/carts/2
                Bodyraw(json):
                   {"productIds": [2]}
                  
              
           
                  
              



      
 
