from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models.TestModel import sample
app = FastAPI()

# Import Database Functions
from DatabaseFunctions import (
    create_test,
    read_one_test,
    update_test,
    remove_test,

)

# Origins
origins = [
    'http://localhost:3000',
    'http://127.0.0.1:8000/'
]

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Home Root
@app.get("/")
def index():
    return {"message": "This is the index"}
# Create User
@app.post("/api/test", response_model=sample)
async def post_user(user:sample):
    response = await create_test(user.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong, bad request")

# Read 1 test
@app.get("/api/test/{name}", response_model=sample)
async def get_user_by_name(name):
    response = await read_one_test(name)
    if response:
        return response
    raise HTTPException(404, f"There is no test with this name: {name}")

# Read All tests
'''
@app.get("/api/test")
async def get_user():
    response = await read_all_user()
    return response
'''
# Update test
@app.put("/api/user/{name}", response_model=sample)
async def put_user(name:str, email: str, password:str):
    response = await update_test(name, email, password)
    if response:
        return response
    raise HTTPException(404, f"There is no Todo item with this title {id}")

# Delete test
@app.delete("/api/test/{name}/")
async def delete_user(name):
    response = await remove_test(name)
    if response:
        return "Successfully deleted User"
    raise HTTPException(404, f"There is no Todo item with this title {name}")

