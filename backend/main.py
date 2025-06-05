from fastapi import FastAPI
from analyzer import analyze_log

app = FastAPI()

@app.post("/analyze")
async def analyze(log: str):
    return {"analysis": analyze_log(log)}
